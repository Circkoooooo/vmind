import { MindBlockType } from '@/types'
import { createLine } from '@vmind/core/index'
import { reactive, nextTick } from 'vue'

const mindTree = reactive<Array<MindBlockType>>([
	{ id: 1, value: '', branchId: 1, parentId: 0, isRoot: true },
])

export const storage = async (data: Array<MindBlockType>) => {
	for (let i = 0; i < data.length; i++) {
		const storageBlock = data[i]
		if (storageBlock.parentId === undefined) return
		if (storageBlock.isRoot) {
			await enterToPush(null, storageBlock.value)
		} else {
			await enterToPush(
				{
					id: storageBlock.parentId,
					value: '',
					branchId: storageBlock.branchId - 1,
					isRoot: storageBlock.branchId === 2 ? true : false,
				},
				storageBlock.value
			)
		}
	}
}
/**
 * push a mindBlock object to mindTree.
 * @param oldBlock
 */
const enterToPush = async (
	oldBlock: MindBlockType | null,
	newBlockValue?: string
) => {
	if (oldBlock === null) {
		if (!newBlockValue) return
		mindTree[0] = {
			id: 1,
			value: !newBlockValue ? '' : newBlockValue,
			branchId: 1,
			isRoot: true,
			parentId: 0,
		}
	} else {
		const newBranchId = oldBlock.branchId + 1
		const blocks = mindTree.filter(item => {
			return item.branchId === newBranchId
		})
		let minCurrentId = 1
		if (blocks.length !== 0) {
			minCurrentId = blocks.length + 1
		}
		const newBlock = {
			id: minCurrentId,
			value: !newBlockValue ? '' : newBlockValue,
			branchId: newBranchId,
			parentId: oldBlock.id,
			isRoot: false,
		}

		mindTree.push(newBlock)
		await nextTick()

		createLine(
			`${oldBlock.branchId.toString()}-${oldBlock.id.toString()}`,
			`${newBlock.branchId.toString()}-${newBlock.id.toString()}`,
			'beziercurve',
			'mind-cntainer'
		)

		document
			.getElementById(
				`${newBlock.branchId.toString()}-${newBlock.id.toString()}`
			)
			?.focus()
	}
}

export { mindTree, enterToPush }
