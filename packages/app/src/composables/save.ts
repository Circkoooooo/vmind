import html2canvas from 'html2canvas'
export const saveCanvas = () => {
	const container = document.getElementById('root-block')
	if (!container) return
	html2canvas(container).then(function (canvas) {
		canvas.toBlob(function (blob) {
			const timestamp = Date.now().toString()
			const a = document.createElement('a')
			document.body.append(a)
			a.download = `${timestamp}.png`
			if (!blob) return
			a.href = URL.createObjectURL(blob)
			a.click()
			a.remove()
		})
	})
}
