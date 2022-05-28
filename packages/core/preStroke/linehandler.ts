import { LineType, LineInstance } from '../types/Line'
import { bindEvent } from '../node_modules/@vmind/event/index'
import { calcStartEndPoint } from './calcPoint'
import { strokeQuadraticCurveLine } from '../strokeImp/strokeQuadraticCurveLine'
import { strokeStraightLine } from '../strokeImp/strokeStraightLine'
import { canvas, initCanvas, updateCanvas } from './canvasHandler'
import { Point } from '../index'

const lineBucket: LineInstance[] = []
const pointBucket: {
	line: CanvasRenderingContext2D
	startPoint: Point
	endPoint: Point
}[] = []
/**
 *  * put the function in the onMounted life cycle, offer two htmlElement node.
 * you need expose the function's invoke to a environment which exists the Window object.
 * @param lNodeId
 * @param rNodeId
 * @returns
 */
const createLine = async (
	lNodeId: string,
	rNodeId: string,
	lineType: LineType
) => {
	if (canvas === null) initCanvas()

	const node1 = document.getElementById(lNodeId)
	const node2 = document.getElementById(rNodeId)

	if (!node1) {
		throw ReferenceError(`Can't find a element which id is ${lNodeId}`)
	}
	if (!node2) {
		throw ReferenceError(`Can't find a element which id is ${rNodeId}`)
	}

	document.body.appendChild(canvas)

	await pushLine({ node1, node2, lineType })
	strokeLine()
	// 立刻执行一次绘制
	// 将绘制传入桶中
	bindEvent('input', node1, () => strokeLine())
	bindEvent('input', node2, () => strokeLine())
	bindEvent('resize', window, () => strokeLine())
}

const strokeLine = () => {
	updateCanvas(lineBucket)
	lineBucket.forEach(item => {
		const { node1, node2, lineType } = item
		if (!checkNodeExist(node1, node2)) return
		const pointData = calcStartEndPoint(node1, node2, canvas)
		if (pointData === undefined) return
		pointBucket.push(pointData)
		switch (lineType) {
			case 'straight':
				strokeStraightLine(pointBucket)
				break
			case 'quadratic':
				strokeQuadraticCurveLine(pointBucket)
				break
		}
	})
}

/**
 * check if the node exist
 */
const checkNodeExist = (lNode: HTMLElement, rNode: HTMLElement) => {
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

export { lineBucket, createLine }
