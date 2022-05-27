export type LineType = 'straight' | 'quadratic'
export type LineInstance = {
	node1: HTMLElement
	node2: HTMLElement
	canvas: HTMLCanvasElement
	lineType: LineType
}
