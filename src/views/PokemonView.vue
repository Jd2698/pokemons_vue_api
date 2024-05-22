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
			if (data.value.sprites.other.dream_world == null) {
				sprites.value = data.value.sprites.other.dream_world.front_default;
				return;
			}
			sprites.value = data.value.sprites.front_shiny;
		}
	});
</script>
<template>
	<div v-if="error">{{error}}</div>
	<Spinner v-if="loading" />

	<div v-if="data" class="w-[240px] mt-[50px] m-auto p-4 flex flex-col gap-2 rounded-lg shadow-[0_0_5px_1px_#43ba83] text-[--main-color-text]">
		<span class="text-end">{{data.name.toUpperCase()}}</span>
		<div class="h-[200px]">
			<img v-show="!loading" :src="sprites" :alt="data.name" class="w-full object-contain drop-shadow-[0_0_2px_#43ba83]">
		</div>
		<span>type: {{data.types[0].type.name}}</span>
	</div>
	<!-- <h1>Poke: {{ $route.params.name }}</h1> -->
</template>