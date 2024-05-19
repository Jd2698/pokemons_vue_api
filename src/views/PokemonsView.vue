// npm i axios
<script setup>
	import { ref } from "vue";
	import Spinner from "@/components/Spinner.vue";
	import { RouterLink } from "vue-router";

	import { useGetData } from "@/composables/getData";

	const { data, error, loading, getData } = useGetData();

	getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
	<h1 class="my-8 text-[--main-color-text]">Pokemons:</h1>
	<Spinner v-if="loading" />

	<div v-if="error">Error: {{ error }}</div>
	<div v-if="data">
		<ul class="container-grid gap-6">
			<li v-for="pokemon in data.results" :key="pokemon.id" class="w-[100px]">
				<router-link :to="`/pokemon/${pokemon.name}`" class="hover:text-[--main-color-text]">{{
                    pokemon.name
                }}</router-link>
			</li>
		</ul>
		<div class="mt-8 flex gap-4">
			<button class="hover:text-[--main-color-text]" @click="getData(data.previous)" :disabled="data.previous === null">
				Previous
			</button>
			<button class="hover:text-[--main-color-text]" @click="getData(data.next)" :disabled="data.next === null">
				Next
			</button>
		</div>
	</div>
</template>

<style scoped>
.container-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, 100px);
	justify-content: center;
}
button:disabled {
	color: rgb(88, 86, 86);
}
</style>