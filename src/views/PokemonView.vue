<script setup>
	import { ref, onMounted } from "vue";
	import { useGetData } from "@/composables/getData";
	import Spinner from "@/components/Spinner.vue";
	import { useRoute, useRouter } from "vue-router";

	const { data, error, loading, getData } = useGetData();
	const route = useRoute();
	const router = useRouter();

	onMounted(async () => {
		getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
	});
</script>
<template>
	<Spinner v-if="loading" />
	<div v-if="data">
		<img :src="data.sprites.front_shiny" alt="">
		<span>{{data.name}}</span>
	</div>
	<!-- <h1>Poke: {{ $route.params.name }}</h1> -->
</template>