<script setup lang="ts">
import { computed } from 'vue'
import { mindTree } from './composables/useMindTree'
import MindBlock from '@/components/MindBlock/src/MindBlock.vue'


const root = computed(() => {
	return mindTree[0]
})

</script>

<template>
	<div class="container">
		<MindBlock id="root_mind"
				:mindBlock="root"></MindBlock>
	</div>
</template>
