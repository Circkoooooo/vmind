import { Point } from './Point'

export type LineType = 'straight' | 'quadratic'
export type LineInstance = {
	node1: HTMLElement | null
	node2: HTMLElement | null
	lineType: LineType
}

export type StrokeLineData = {
	startPoint: Point
	endPoint: Point
	lineType: LineType
}
