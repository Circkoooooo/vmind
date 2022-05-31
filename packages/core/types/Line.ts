import { Point } from './Point'

export type LineType = 'straight' | 'beziercurve'
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
