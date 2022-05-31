import { MindBlockType } from '@/types'
import { createLine } from '@vmind/core/index'
import { reactive, nextTick } from 'vue'

const mindTree = reactive<Array<MindBlockType>>([
	{ id: 1, value: '', branchId: 1, parentId: 0 },
])

/**
 * push a mindBlock object to mindTree.
 * @param oldBlock
 */
const enterToPush = async (oldBlock: MindBlockType) => {
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
		branchId: newBranchId,
		parentId: oldBlock.id,
	}

	mindTree.push(newBlock)
	await nextTick()
	createLine(
		`${oldBlock.branchId.toString()}-${oldBlock.id.toString()}`,
		`${newBlock.branchId.toString()}-${newBlock.id.toString()}`,
		'beziercurve'
	)
	document
		.getElementById(`${newBlock.branchId.toString()}-${newBlock.id.toString()}`)
		?.focus()
}

export { mindTree, enterToPush }
