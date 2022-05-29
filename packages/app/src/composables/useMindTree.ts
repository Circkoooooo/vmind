import { MindBlockType } from '@/types'
import { createLine } from '@vmind/core/index'
import { reactive, nextTick } from 'vue'

const mindTree = reactive<Array<MindBlockType>>([
	{ id: 1, value: 'hello', branchId: 1 }
])

/**
 * push a mindBlock object to mindTree.
 * @param oldBlock
 */
const pushNewBlock = async (oldBlock: MindBlockType) => {
	const newBranchId = oldBlock.branchId + 1

	let minCurrentId = 0
	const blocks = mindTree.filter(item => {
		item.branchId === newBranchId
	})
	if (blocks.length !== 0) {
		blocks.forEach(block => {
			if (block.id > minCurrentId) {
				minCurrentId = block.id
			}
		})
	}
	const newBlock = {
		id: minCurrentId + 1,
		branchId: newBranchId,
	}
	mindTree.push(newBlock)
	await nextTick()
	createLine(
		`${oldBlock.branchId.toString()}-${oldBlock.id.toString()}`,
		`${newBlock.branchId.toString()}-${newBlock.id.toString()}`,
		'straight'
	)
	document
		.getElementById(`${newBlock.branchId.toString()}-${newBlock.id.toString()}`)
		?.focus()
}
export { mindTree, pushNewBlock }
