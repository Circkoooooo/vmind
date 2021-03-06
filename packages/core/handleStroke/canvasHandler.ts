import { LineInstance } from '../index'

export let canvas: HTMLCanvasElement = null
export let canvasRender: CanvasRenderingContext2D = null

export const initCanvas = (containerId: string) => {
	canvas = document.createElement('canvas') as HTMLCanvasElement
	canvasRender = canvas.getContext('2d')
	if (containerId === undefined) {
		document.body.appendChild(canvas)
	} else {
		document.getElementById(containerId).appendChild(canvas)
	}
	canvas.style.position = 'absolute'
	canvas.style.pointerEvents = 'none'
	canvas.setAttribute('id', 'vmind-canvas')
}
/*
 * update the postion and size of canvas, makes it cover the nodes.
 */
export const updateCanvas = (
	canvas: HTMLCanvasElement,
	lineBucket: LineInstance[]
) => {
	const waitNode: HTMLElement[] = []
	lineBucket.forEach(item => {
		const { node1, node2 } = item
		if (!waitNode.includes(node1)) {
			waitNode.push(node1)
		}
		if (!waitNode.includes(node2)) {
			waitNode.push(node2)
		}
	})

	// calculate left,right,height,width of the canvas.
	let left = 0,
		top = 0,
		right = 0,
		height = 0,
		width = 0
	waitNode.forEach(node => {
		if (left === 0 || right === 0 || height === 0 || width === 0) {
			left = node.offsetLeft
			top = node.offsetTop
			right = node.offsetLeft + node.offsetWidth
			height = node.offsetHeight
			width = right - left
		} else {
			//left
			if (node.offsetLeft < left) {
				left = node.offsetLeft
			}
			//right
			if (node.offsetWidth + node.offsetLeft > right) {
				right = node.offsetWidth + node.offsetLeft
			}
			//top
			if (node.offsetTop < top) {
				top = node.offsetTop
			}

			width = right - left
		}
		// Get the height size after the top size has calculated.
		// otherwise it will get a wrong canvas height.
		waitNode.forEach(node => {
			if (node.offsetTop + node.offsetHeight - top > height) {
				height = node.offsetTop + node.offsetHeight - top
			}
		})
	})
	canvas.style.left = left + 'px'
	canvas.style.top = top + 'px'
	canvas.setAttribute('height', `${height}`)
	canvas.setAttribute('width', `${width}`)
}
