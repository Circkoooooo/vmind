<script setup lang="ts">
import { onMounted } from 'vue'
import { init } from '@/composables/init'

onMounted(() => {
	init()
})
</script>

<template>

	<div class="container">
		<div contenteditable="true" id="node-1" class="node_input node1">213213</div>
		<div contenteditable="true" id="node-2" class="node_input"></div>
		<canvas id="canvas">
		</canvas>
	</div>
</template>