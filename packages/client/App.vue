<script setup lang="ts">
import { createLine } from '@vmind/core'

import { onMounted } from 'vue'
onMounted(() => {
	createLine()
})
</script>

<template>
	<div class="container">
		<div contenteditable="true" id="node-1" class="node_input">213213</div>
		<div contenteditable="true" id="node-2" class="node_input"></div>
		<canvas id="canvas">
		</canvas>
	</div>
</template>