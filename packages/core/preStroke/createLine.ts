import { LineType, LineInstance } from '../types/Line'
import { bindEvent } from '../node_modules/@vmind/event/index'
import { calcStartEndPoint } from './calcPoint'
import { strokeQuadraticCurveLine } from '../strokeImp/strokeQuadraticCurveLine'
import { strokeStraightLine } from '../strokeImp/strokeStraightLine'

const lineBucket: LineInstance[] = []

/**
 *  * put the function in the onMounted life cycle, offer two htmlElement node.
 * you need expose the function's invoke to a environment which exists the Window object.
 * @param lNodeId
 * @param rNodeId
 * @returns
 */
export const createLine = async (
	lNodeId: string,
	rNodeId: string,
	lineType: LineType
) => {
	const node1 = document.getElementById(lNodeId)
	const node2 = document.getElementById(rNodeId)
	const canvas = document.createElement('canvas') as HTMLCanvasElement
	canvas.setAttribute('id', `${lNodeId}-${rNodeId}`)

	if (!node1) {
		throw ReferenceError(`can't find a element, which id is ${lNodeId}`)
	}
	if (!node2) {
		throw ReferenceError(`can't find a element, which id is ${rNodeId}`)
	}
	if (node1.parentElement) {
		node1.parentElement.appendChild(canvas)
	}

	await pushLine({ node1, node2, canvas, lineType })
	strokeLine()
	// 立刻执行一次绘制
	// 将绘制传入桶中
	bindEvent('input', node1, () => strokeLine())
	bindEvent('input', node2, () => strokeLine())
	bindEvent('resize', window, () => strokeLine())
}

const strokeLine = () => {
	lineBucket.forEach(item => {
		const { node1, node2, canvas, lineType } = item
		if (!checkNodeExist(node1, node2, canvas)) return
		const pointData = calcStartEndPoint(node1, node2, canvas)
		if (pointData === undefined) return
		const { line, startPoint, endPoint } = pointData
		switch (lineType) {
			case 'straight':
				strokeStraightLine(line, startPoint, endPoint)
				break
			case 'quadratic':
				strokeQuadraticCurveLine(line, startPoint, endPoint)
				break
		}
	})
}

/**
 * check if the node exist
 */
const checkNodeExist = (
	lNode: HTMLElement,
	rNode: HTMLElement,
	canvas: HTMLCanvasElement
) => {
	const nodeId = lNode.getAttribute('id')
	const node2Id = rNode.getAttribute('id')
	if (
		nodeId &&
		node2Id &&
		document.getElementById(nodeId) &&
		document.getElementById(node2Id)
	) {
		return true
	} else {
		canvas.remove()
		return false
	}
}
/**
 * push the line to line bucket
 * @param lineInstance
 * @returns
 */
const pushLine = (lineInstance: LineInstance) => {
	return new Promise(resolve => {
		for (const key of Object.keys(lineInstance)) {
			if (!lineInstance[key]) return
		}
		lineBucket.push(lineInstance)
		resolve(lineInstance)
	})
}
