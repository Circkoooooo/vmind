<script setup lang="ts">
import { enter } from '@/composables/createNode'
import { MindBlockType } from '@/types'
import MindBranch from '@/components/MindBranch/src/MindBranch.vue'
import { computed } from 'vue'
import { mindTree } from '@/composables/useMindTree'
import { getClassName } from '@/composables/getClassName.ts'

const props = withDefaults(defineProps<{
	mindBlock: MindBlockType,
	id?: string
}>(), {})


const childBlocks = computed(() => {
	return mindTree.filter(item => {
		return item.parentId === props.mindBlock.id && item.branchId === props.mindBlock.branchId + 1
	})
})

const changeValue = (e: Event) => {
	const input = e.target as HTMLInputElement
	mindTree.forEach(item => {
		if (item.id === props.mindBlock.id && item.branchId === props.mindBlock.branchId) {
			item.value = input.value
		}
	})
}


</script>

<template>
	<div class="mind_block"
			:id="id">
		<input :class="getClassName(mindBlock)"
				contenteditable="true"
				class="node_input"
				@input="changeValue($event)"
				:value="mindBlock.value"
				@keydown.enter="enter($event, mindBlock)"
				:id="mindBlock.branchId.toString() + '-' + mindBlock.id" />
		<MindBranch v-if="childBlocks.length !== 0"
				:blocks="childBlocks"></MindBranch>
	</div>
</template>
