import { Point } from '../types/Point'
import { canvasRender } from '../handleStroke/canvasHandler'

export const strokeBezierCurveLine = (startPoint: Point, endPoint: Point) => {
	const line = canvasRender
	const x1 = startPoint.x
	const y1 = startPoint.y
	const x2 = endPoint.x
	const y2 = endPoint.y

	line.moveTo(startPoint.x, startPoint.y)
	line.bezierCurveTo((x1 + x2) / 2, y1, (x1 + x2) / 2, y2, x2, y2)
	line.stroke()
}
