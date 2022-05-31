import { LineType, LineInstance } from '../types/types'
import { bindEvent } from '../../event/index'
import { calculatePointList } from './calcPoint'
import { canvas, initCanvas, updateCanvas } from './canvasHandler'
import { strokeStraightLine } from '../strokeImp/strokeStraightLine'
import { strokeBezierCurveLine } from '../strokeImp/strokeBezierCurveLine'
const lineBucket: LineInstance[] = []
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

	await pushLine({ node1, node2, lineType })
	strokeLine()
	// invoke a stroke immediately, then bind the stroke event to related element.
	bindEvent('input', node1, () => strokeLine())
	bindEvent('input', node2, () => strokeLine())
	bindEvent('resize', window, () => strokeLine())
}

const strokeLine = async () => {
	checkNodeExist()
	updateCanvas(canvas, lineBucket)

	const strokeLineList = calculatePointList(canvas, lineBucket)
	strokeLineList.forEach(item => {
		const { startPoint, endPoint, lineType } = item
		switch (lineType) {
			case 'straight':
				strokeStraightLine(startPoint, endPoint)
				break
			case 'beziercurve':
				strokeBezierCurveLine(startPoint, endPoint)
				break
		}
	})
}

/**
 * check if the node exist
 */
const checkNodeExist = () => {
	let newList: LineInstance[] = []
	lineBucket.forEach(line => {
		const { node1, node2 } = line
		if (node1 && node2) {
			newList.push(line)
		}
	})
	newList = lineBucket
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

export { lineBucket, createLine, checkNodeExist }
