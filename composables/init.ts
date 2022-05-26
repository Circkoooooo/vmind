export const init = () => {
	const node1 = document.getElementById('node-1')
	const node2 = document.getElementById('node-2')
	const cv1 = document.getElementById('canvas') as HTMLCanvasElement

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
}

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
	// 设置canvas的top

	canvas.style.background = 'rgba(0,0,0,0.2)'
	line.moveTo(
		lNode.offsetWidth,
		topNode === rNode
			? bottomPx - lNode.offsetHeight / 2 - cTop
			: lNode.offsetHeight / 2
	)
	line.lineTo(
		rNode.offsetLeft - lNode.offsetLeft,
		topNode === lNode
			? bottomPx - rNode.offsetHeight / 2 - cTop
			: rNode.offsetHeight / 2
	)
	
	line.lineWidth = 1
	line.strokeStyle = 'black'
	line.stroke()
}
