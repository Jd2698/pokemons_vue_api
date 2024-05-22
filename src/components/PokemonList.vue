<script setup>
	import { RouterLink } from "vue-router";
	const props = defineProps(["data"]);
</script>

<template>
	<li class="w-[100px]">
		<router-link :to="`/pokemon/${props.data.name}`" class="hover:text-[--main-color-text]">
			{{ props.data.name }}
		</router-link>
	</li>
</template>