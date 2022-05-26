import { Point } from '../types/Point'

export const strokeStraightLine = (
	line: CanvasRenderingContext2D,
	startPoint: Point,
	endPoint: Point
) => {
	line.moveTo(startPoint.x, startPoint.y)
	line.lineTo(endPoint.x, endPoint.y)
	line.lineWidth = 2
	line.strokeStyle = 'black'
	line.stroke()
}
