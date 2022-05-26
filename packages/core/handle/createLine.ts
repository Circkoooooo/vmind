/**
 *  * put the function in the onMounted life cycle, offer two htmlElement node.
 * you need expose the function's invoke to a environment which exists the Window object.
 * @param lNodeId
 * @param rNodeId
 * @param canvasId
 * @returns
 */
export const createLine = (
	lNodeId: string,
	rNodeId: string,
	canvasId: string
) => {
	const node1 = document.getElementById(lNodeId)
	const node2 = document.getElementById(rNodeId)
	const cv1 = document.getElementById(canvasId) as HTMLCanvasElement

	const container = document.getElementsByClassName('container')[0]
	container.appendChild(cv1)

	resizeCanvas(node1, node2, cv1)
	if (!node1 || !node2) return // 测试node1和node2输入后的resize函数的触发结果
	node1.addEventListener('input', () => {
		resizeCanvas(node1, node2, cv1)
	})
	node2.addEventListener('input', () => {
		resizeCanvas(node1, node2, cv1)
	})
	window.addEventListener('resize', () => {
		resizeCanvas(node1, node2, cv1)
	})
}
type Point = {
	x: number
	y: number
}

/**
 * Calculate some coordinate data and invoke the strokeLine function to stroke a line bewteen lNode and rNode.
 * @param lNode
 * @param rNode
 * @param canvas
 * @returns
 */
const resizeCanvas = (
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

	const bottomPx =
		lNode.offsetTop + lNode.offsetHeight < rNode.offsetTop + rNode.offsetHeight
			? rNode.offsetTop + rNode.offsetHeight
			: lNode.offsetTop + lNode.offsetHeight
	const cTop = topNode.offsetTop
	const cHeight = bottomPx - topNode.offsetTop
	const cWidth = rNode.offsetWidth + rNode.offsetLeft - lNode.offsetLeft
	const cLeft = lNode.offsetLeft

	canvas.style.top = cTop + 'px'
	canvas.style.left = cLeft + 'px'
	canvas.setAttribute('width', `${cWidth}`)
	canvas.setAttribute('height', `${cHeight}`)

	let startPoint = {
		x: lNode.offsetWidth,
		y:
			lNode.offsetTop === cTop
				? bottomPx - lNode.offsetHeight / 2 - cTop
				: lNode.offsetTop - cTop + lNode.offsetHeight / 2,
	}
	let endPoint = {
		x: rNode.offsetLeft - lNode.offsetLeft,
		y:
			rNode.offsetTop === cTop
				? bottomPx - rNode.offsetHeight / 2 - cTop
				: rNode.offsetTop - cTop + rNode.offsetHeight / 2,
	}
	strokeLine(line, startPoint, endPoint)
}

/**
 * separate the stroke logic from resizeCanvas.
 * @param line 
 * @param startPoint 
 * @param endPoint 
 */
const strokeLine = (
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
