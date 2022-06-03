<script setup lang="ts">
import { onMounted } from 'vue'
import { mindTree, storage } from './composables/useMindTree'
import MindBlock from '@/components/MindBlock/src/MindBlock.vue'
import { getStorageSync } from './composables/useStorage'
import { saveProjectEvent } from './composables/useEvent'
import { saveCanvas } from '@/composables/save'

onMounted(async () => {
	const data = getStorageSync('vmind-tree')
	if (data) {
		await storage(data)
	}
	saveProjectEvent()
})


</script>

<template>
	<div @click="saveCanvas">
		保存图片
	</div>
	<div class="container"
			id="mind-container">
		<MindBlock id="root-block"
				:mindBlock="mindTree[0]"></MindBlock>
	</div>
</template>
