import { Point, StrokeLineData } from '../index'
import { canvas } from './canvasHandler'
import { lineBucket } from './linehandler'

/**
 * calc all the startpoint and endpoint info of the line.
 */
export const calculatePointList = (): StrokeLineData[] => {
	const strokeLineList: StrokeLineData[] = []
	lineBucket.forEach(item => {
		const { node1, node2, lineType } = item

		const startX = node1.offsetLeft + node1.offsetWidth - canvas.offsetLeft
		const startY = node1.offsetTop + node1.offsetHeight / 2 - canvas.offsetTop

		const endX = node2.offsetLeft - canvas.offsetLeft
		const endY = node2.offsetTop + node2.offsetHeight / 2 - canvas.offsetTop

		const startPoint = { x: startX, y: startY } as Point
		const endPoint = { x: endX, y: endY }

		strokeLineList.push({ startPoint, endPoint, lineType } as StrokeLineData)
	})
	console.log(strokeLineList)
	return strokeLineList
}
