<script setup lang="ts">
import { computed } from 'vue'
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
		<MindBranch v-for="(blocks, key) in branches"
				:key="key"
				:blocks="blocks">
		</MindBranch>
	</div>
</template>
