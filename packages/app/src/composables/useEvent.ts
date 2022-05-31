import { mindTree } from './useMindTree'
import { setStorage } from './useStorage'

export const saveProjectEvent = () => {
	window.addEventListener(
		'keydown',
		function (e) {
			//可以判断是不是mac，如果是mac,ctrl变为花键
			//event.preventDefault() 方法阻止元素发生默认的行为。
			if (
				(e.key == 's' || e.key == 'S') &&
				(navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
			) {
				e.preventDefault()
				setStorage('vmind-tree', mindTree)
			}
		},
		false
	)
}
