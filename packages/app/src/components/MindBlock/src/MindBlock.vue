<script setup lang="ts">
import { enter } from '@/composables/createNode'
import { MindBlockType } from '@/types'
import MindBranch from '@/components/MindBranch/src/MindBranch.vue'
import { computed } from 'vue'
import { mindTree } from '@/composables/useMindTree'

const props = withDefaults(defineProps<{
	mindBlock: MindBlockType
}>(), {})

const childBlocks = computed(() => {
	return mindTree.filter(item => {
		return item.parentId === props.mindBlock.id && item.branchId === props.mindBlock.branchId + 1
	})
})
</script>

<template>
	<div class="mind_block">
		<div contenteditable="true"
				class="node_input"
				@keydown.enter="enter($event, mindBlock)"
				:value="mindBlock.value"
				:id="mindBlock.branchId.toString() + '-' + mindBlock.id">{{
						mindBlock.value
				}}
		</div>
		<MindBranch :blocks="childBlocks"></MindBranch>
	</div>
</template>
