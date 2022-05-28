<script setup lang="ts">
import MindBlock from './components/MindBlock/src/MindBlock.vue'

import { mindTree } from '@/composables/useMindTree'
// onMounted(() => {
// })
</script>

<template>
	<div class="container"
			id="123"
			itme="3"
			name="4">
		<MindBlock v-for="(mindBlock, key) in mindTree" :key="key" :mindBlock="mindBlock"></MindBlock>
	</div>
</template>
