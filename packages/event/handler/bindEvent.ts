import { BindEvent } from '../types/BindEvent'

/**
 *
 * @param event event type
 * @param node a element need to bind
 * @param callback
 */
export const bindEvent = <k extends keyof HTMLElementEventMap>(
	event: k,
	node: Element | (Window & typeof globalThis),
	callback: BindEvent
) => {
	node.addEventListener(event, () => {
		callback()
	})
}
