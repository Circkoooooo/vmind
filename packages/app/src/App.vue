<script setup lang="ts">
import { onMounted } from 'vue'
import { mindTree, storage } from './composables/useMindTree'
import MindBlock from '@/components/MindBlock/src/MindBlock.vue'
import { getStorageSync, setStorage } from './composables/useStorage'


onMounted(async () => {
	const data = getStorageSync('vmind-tree')
	if (data) {
		await storage(data)
	}
	window.addEventListener('keydown', function (e) {
		//可以判断是不是mac，如果是mac,ctrl变为花键
		//event.preventDefault() 方法阻止元素发生默认的行为。
		if ((e.key == 's' || e.key == 'S') && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
			e.preventDefault()
			setStorage('vmind-tree', mindTree)
		}
	}, false)
})


</script>

<template>
	<div class="container">
		<MindBlock id="root_mind"
				:mindBlock="mindTree[0]"></MindBlock>
	</div>
</template>
