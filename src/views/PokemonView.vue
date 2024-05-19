<script setup>
	import { ref, onMounted } from "vue";
	import { useGetData } from "@/composables/getData";
	import Spinner from "@/components/Spinner.vue";
	import { useRoute, useRouter } from "vue-router";

	const { data, error, loading, getData } = useGetData();
	const route = useRoute();
	const router = useRouter();
	const sprites = ref(null);

	onMounted(async () => {
		await getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

		if (error.value == null) {
			sprites.value = data.value.sprites.other.dream_world.front_default;
		}
	});
</script>
<template>
	<Spinner v-if="loading" />
	<div v-if="error">{{error}}</div>

	<div v-if="data" class="w-[240px] m-auto p-4 flex flex-col gap-2 rounded-lg shadow-[0_0_6px_0_#43ba83]">
		<span class="text-end">{{data.name.toUpperCase()}}</span>
		<img :src="sprites" :alt="data.name" class="h-[200px] w-full object-contain">
		<span>type: {{data.types[0].type.name}}</span>
	</div>
	<!-- <h1>Poke: {{ $route.params.name }}</h1> -->
</template>