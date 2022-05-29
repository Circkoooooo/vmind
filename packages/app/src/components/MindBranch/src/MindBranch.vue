<script setup lang="ts">
import { MindBlockType } from '@/types'
import MindBlock from '@/components/MindBlock/src/MindBlock.vue'
withDefaults(defineProps<{
	blocks: MindBlockType[]
}>(), {})

</script>

<template>
	<div class="mind_branch">
		<MindBlock v-for="(block, key) in blocks"
				:key="key"
				:mindBlock="block"></MindBlock>
	</div>
</template>