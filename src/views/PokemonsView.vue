// npm i axios
<script setup>
	import { ref } from "vue";
	import Spinner from "@/components/Spinner.vue";
	// import PokemonList from "@/components/PokemonList.vue";
	import { RouterLink } from "vue-router";

	import { useGetData } from "@/composables/getData";

	const { data, error, loading, getData } = useGetData();

	getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
	<h1 class="mt-10 text-[--main-color-text]">Pokemons:</h1>
	<Spinner v-if="loading" />

	<div v-if="error">Error: {{ error }}</div>
	<div v-if="data">
		<!-- <PokemonList/> -->
		<ul class="container-grid py-4">
			<li v-for="pokemon in data.results" :key="pokemon.id" class="border-b-2 pb-2 text-center">
				<router-link :to="`/pokemon/${pokemon.name}`" class="block w-full hover:text-[--main-color-text]">{{
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
