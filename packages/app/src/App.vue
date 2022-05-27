<script setup lang="ts">
import { createLine } from '@vmind/core/index'
import { onMounted } from 'vue';
onMounted(() => {
	createLine("node-1", "node-2", "straight")
	createLine("node-2", "node-3", "straight")
	createLine("node-1", "node-4", "straight")
})
</script>

<template>
	<div class="container">
		<div contenteditable="true" id="node-1" class="node_input">213213</div>
		<div contenteditable="true" id="node-2" class="node_input"></div>
	</div>
</template>
