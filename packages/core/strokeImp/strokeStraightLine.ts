import { Point } from '../index'
import { canvasRender } from '../preStroke/canvasHandler'

export const strokeStraightLine = (startPoint: Point, endPoint: Point) => {
	const line = canvasRender
	line.moveTo(startPoint.x, startPoint.y)
	line.lineTo(endPoint.x, endPoint.y)
	line.lineWidth = 2
	line.strokeStyle = 'black'
	line.stroke()
}
