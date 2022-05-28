/**
 * Calculate some coordinate data.returns a canvas Object and two point:Point
 * @param lNode
 * @param rNode
 * @param canvas
 * @returns lNode,rNode,line:CanvasRenderingContext
 */
export const calcStartEndPoint = (
	lNode: HTMLElement | null,
	rNode: HTMLElement | null,
	canvas: HTMLCanvasElement
) => {
	if (!lNode || !rNode || !canvas) return
	const line = canvas.getContext('2d')
	if (!line) return

	canvas.style.position = 'absolute'
	let topNode: HTMLElement
	lNode.offsetTop < rNode.offsetTop ? (topNode = lNode) : (topNode = rNode)

	// const bottomPx =
	// 	lNode.offsetTop + lNode.offsetHeight < rNode.offsetTop + rNode.offsetHeight
	// 		? rNode.offsetTop + rNode.offsetHeight
	// 		: lNode.offsetTop + lNode.offsetHeight
	// const cTop = topNode.offsetTop
	// const cHeight = bottomPx - topNode.offsetTop
	// const cWidth = rNode.offsetWidth + rNode.offsetLeft - lNode.offsetLeft
	// const cLeft = lNode.offsetLeft

	// canvas.style.top = cTop + 'px'
	// canvas.style.left = cLeft + 'px'
	// canvas.setAttribute('width', `${cWidth}`)
	// canvas.setAttribute('height', `${cHeight}`)
	// canvas.style.pointerEvents = 'none'

	// const startPoint = {
	// 	x: lNode.offsetWidth,
	// 	y:
	// 		lNode.offsetTop === cTop
	// 			? bottomPx - lNode.offsetHeight / 2 - cTop
	// 			: lNode.offsetTop - cTop + lNode.offsetHeight / 2,
	// }
	// const endPoint = {
	// 	x: rNode.offsetLeft - lNode.offsetLeft,
	// 	y:
	// 		rNode.offsetTop === cTop
	// 			? bottomPx - rNode.offsetHeight / 2 - cTop
	// 			: rNode.offsetTop - cTop + rNode.offsetHeight / 2,
	// }
	// return {
	// 	line,
	// 	startPoint,
	// 	endPoint,
	// }
}
