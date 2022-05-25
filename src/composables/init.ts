export const init = () => {
	const node1 = document.getElementById('node-1')
	const node2 = document.getElementById('node-2')
	const cv1 = document.getElementById('canvas') as HTMLCanvasElement

	const container = document.getElementsByClassName('container')[0]
	container.appendChild(cv1)

	resizeCanvas(node1, node2, cv1)
	if (!node1 || !node2) return // 测试node1和node2输入后的resize函数的触发结果
	;[node1, node2].forEach(item => {
		item.addEventListener('input', () => {
			resizeCanvas(node1, node2, cv1)
		})
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
	canvas.style.top = lNode.offsetTop + 'px'
	canvas.style.left = lNode.offsetLeft + 'px'

	canvas.setAttribute(
		'width',
		`${rNode.offsetWidth + rNode.offsetLeft - lNode.offsetLeft}`
	)
	canvas.setAttribute(
		'height',
		`${rNode.offsetTop + rNode.offsetHeight - rNode.offsetTop}`
	)
	canvas.style.background = 'rgba(0,0,0,0.2)'
	line.moveTo(lNode.offsetWidth, lNode.offsetHeight / 2)
	line.lineTo(
		rNode.offsetLeft - lNode.offsetLeft ,
		rNode.offsetHeight / 2
	)
	// line.moveTo(
	// 	lNode.offsetWidth,
	// 	lNode.offsetWidth + rNode.offsetLeft - lNode.offsetLeft
	// )
	// line.lineTo(
	// 	lNode.offsetWidth + 20,
	// 	lNode.offsetWidth + rNode.offsetLeft - lNode.offsetLeft+30
	// )
	line.lineWidth = 1
	line.strokeStyle = 'black'
	line.stroke()
}
