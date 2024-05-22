<script setup>
	import { ref, onMounted } from "vue";
	import { useGetData } from "@/composables/getData";
	import Spinner from "@/components/Spinner.vue";
	import PokemonList from "@/components/PokemonList.vue";
	import { useRoute, useRouter } from "vue-router";
	import axios from "axios";

	import {
		TransitionRoot,
		TransitionChild,
		Dialog,
		DialogPanel,
		DialogTitle,
	} from "@headlessui/vue";

	const { data, error, loading, getData } = useGetData();
	const route = useRoute();
	const router = useRouter();

	const pokemonName = ref(null);
	const pokemons = ref([]);
	const pokemon = ref(null);

	const searchPokemon = async (event) => {
		if (pokemonName.value) {
			const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
			await getData(url);

			pokemons.value = data.value.results.filter((pokemon) =>
				pokemon.name.includes(pokemonName.value)
			);
			console.log(pokemons.value);
		}
	};

	const isOpen = ref(false);

	const setIsOpen = (value) => {
		isOpen.value = value;
	};

	const changePokemon = async (url) => {
		const { data } = await axios.get(url);
		pokemon.value = data;
		setIsOpen(true);
	};
</script>
<template>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black/25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full items-center justify-center text-center">
					<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
						<DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#2b2a33] p-6 text-left align-middle shadow-xl transition-all">
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-white">
								{{pokemon.name.toUpperCase()}}
							</DialogTitle>
							<div class="mt-2">
								<img class="block w-[250px] m-auto" :src="pokemon.sprites.front_shiny" :alt="pokemon.name">
							</div>

							<div class="flex justify-end">
								<button type="button" class="border-b-2 px-4 py-2 text-lg text-white hover:text-[--main-color-text] focus:outline-none focus:text-[--main-color-text]" @click="setIsOpen(false)">
									Close
								</button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>

	<div class="mt-6 text-end">
		<input class="h-8 bg-[#eee] focus:outline-none text-black p-2" type="search" placeholder="Search a pokemon" @keyup.enter="searchPokemon" v-model="pokemonName" autofocus />
	</div>

	<template v-if="pokemons">
		<ul class="container-grid py-4">
			<li class="border-b-2 pb-2 text-center" v-for="pokemon in pokemons" :key="pokemon.name">
				<button @click="changePokemon(pokemon.url)" class="w-full hover:text-[--main-color-text]">{{pokemon.name.replace(/-/g, ' ')}}</button>
			</li>
		</ul>
	</template>
</template>