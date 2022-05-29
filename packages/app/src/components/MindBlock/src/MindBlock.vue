<script setup lang="ts">
import { enter } from '@/composables/createNode'
import { MindBlockType } from '@/types'

withDefaults(defineProps<{
	mindBlock: MindBlockType
}>(), {})
</script>

<template>
	<div contenteditable="true"
			class="node_input"
			@keydown.enter="enter($event, mindBlock)"
			:value="mindBlock.value"
			:id="mindBlock.branchId.toString() + '-' + mindBlock.id">{{
					mindBlock.value
			}}
	</div>
</template>
