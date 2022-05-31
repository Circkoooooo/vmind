import { MindBlockType } from '@/types'

/**
 * return different classname by the config of mindblock.
 * @param block
 * @returns
 */
export const getClassName = (block: MindBlockType) => {
	const baseClass = ['blocktheme-base']

	if (block.isRoot) {
		const rootClass = baseClass
		rootClass.push('blocktheme-root')
		return [rootClass]
	} else {
		const normalClass = baseClass
		return [normalClass]
	}
}
