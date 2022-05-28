import { MindBlockType } from '@/types'
import { pushNewBlock } from './useMindTree'

export const createNode = (event: KeyboardEvent, mindBlock: MindBlockType) => {
	event.preventDefault()
	pushNewBlock(mindBlock)
}
