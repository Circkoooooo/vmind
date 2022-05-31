<script setup lang="ts">
import { onMounted } from 'vue'
import { mindTree, storage } from './composables/useMindTree'
import MindBlock from '@/components/MindBlock/src/MindBlock.vue'
import { getStorageSync, setStorage } from './composables/useStorage'
import { saveProjectEvent } from './composables/useEvent'


onMounted(async () => {
	const data = getStorageSync('vmind-tree')
	if (data) {
		await storage(data)
	}
	
	saveProjectEvent()
})


</script>

<template>
	<div class="container">
		<MindBlock id="root_mind"
				:mindBlock="mindTree[0]"></MindBlock>
	</div>
</template>
