import { Point } from '../index'
import { canvasBound } from '../preStroke/canvasHandler'

export const strokeStraightLine = (startPoint: Point, endPoint: Point) => {
	const line = canvasBound
	line.moveTo(startPoint.x, startPoint.y)
	line.lineTo(endPoint.x, endPoint.y)
	line.lineWidth = 2
	line.strokeStyle = 'black'
	line.stroke()
}
