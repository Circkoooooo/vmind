<script setup lang="ts">
import { computed } from 'vue'
import MindBlock from './components/MindBlock/src/MindBlock.vue'
import MindBranch from './components/MindBranch/src/MindBranch.vue'
import { mindTree } from './composables/useMindTree'

const branches = computed(() => {
	let branchCount = 1
	mindTree.forEach(block => {
		if (block.branchId > branchCount) branchCount = block.branchId
	})
	const branchList = Array.from({ length: branchCount }, (_, index) => {
		return mindTree.filter(item => {
			return item.branchId === index + 1
		})

	})
	return branchList
})
</script>

<template>
	<div class="container">
		<MindBranch v-for="(branch, key) in branches"
				:key="key">
			<MindBlock v-for="(mindBlock, key) in branch"
					:key="key"
					:mindBlock="mindBlock">
			</MindBlock>
		</MindBranch>
	</div>
</template>
