import { MindBlockType } from '@/types'
import { enterToPush } from './useMindTree'

export const enter = (event: KeyboardEvent, mindBlock: MindBlockType) => {
	event.preventDefault()
	enterToPush(mindBlock)
}
