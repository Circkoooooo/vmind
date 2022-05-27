import { LineType } from '../types/Line'
import { bindEvent } from '../node_modules/@vmind/event/index'
import { calcStartEndPoint } from './calcPoint'
import { strokeQuadraticCurveLine } from '../strokeImp/strokeQuadraticCurveLine'
import { strokeStraightLine } from '../strokeImp/strokeStraightLine'

/**
 *  * put the function in the onMounted life cycle, offer two htmlElement node.
 * you need expose the function's invoke to a environment which exists the Window object.
 * @param lNodeId
 * @param rNodeId
 * @returns
 */
export const createLine = (
	lNodeId: string,
	rNodeId: string,
	lineType: LineType
) => {
	const node1 = document.getElementById(lNodeId)
	const node2 = document.getElementById(rNodeId)
	const canvas = document.createElement('canvas') as HTMLCanvasElement
	canvas.setAttribute('id', `${lNodeId}-${rNodeId}`)

	if (!node1 || !node2) return
	if (node1.parentElement) {
		node1.parentElement.appendChild(canvas)
	}

	strokeLine(node1, node2, canvas, lineType)
	if (!node1 || !node2) return

	bindEvent('input', node1, () => strokeLine(node1, node2, canvas, lineType))
	bindEvent('input', node2, () => strokeLine(node1, node2, canvas, lineType))
	bindEvent('resize', window, () => strokeLine(node1, node2, canvas, lineType))
}

const strokeLine = (
	lNode: HTMLElement,
	rNode: HTMLElement,
	canvas: HTMLCanvasElement,
	lineType: LineType
) => {
	if (!checkNodeExist(lNode, rNode, canvas)) return
	const pointData = calcStartEndPoint(lNode, rNode, canvas)
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
