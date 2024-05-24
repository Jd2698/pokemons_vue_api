<script setup>
	import { ref, onMounted } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import Spinner from "@/components/Spinner.vue";
	import { useGetData } from "@/composables/getData";
	import { useFavoritoStore } from "@/store/favoritos.js";

	const { data, error, loading, getData } = useGetData();
	const route = useRoute();
	const router = useRouter();
	const sprites = ref(null);

	const useFavorito = useFavoritoStore();
	const { add, findPoke } = useFavorito;

	const close = () => {
		router.push("/pokemons");
	};
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

	// console.log(route.params.name);
</script>
<template>
	<div v-if="error">{{error}}</div>

	<div class="w-[240px] mt-[50px] m-auto p-4 flex flex-col gap-2 rounded-lg shadow-[0_0_5px_1px_#43ba83] text-[--main-color-text] relative">
		<div v-if="data" class="h-full">
			<span class="text-end">{{data.name.toUpperCase()}}</span>
			<div class="h-[180px] relative overflow-hidden">
				<Spinner v-if="loading" />
				<img v-show="!loading" :src="sprites" :alt="data.name" class="h-full w-full object-cover drop-shadow-[0_0_2px_#43ba83]">
			</div>
			<span class="block">type: {{data.types[0].type.name}}</span>

			<button :disabled="findPoke(data.name)" @click="add(data)" class="">
				Agregar Favorito
			</button>

			<button class="px-2 absolute top-0 right-0 text-gray-300 hover:text-[--main-color-text]" @click="close">
				close
			</button>
		</div>
	</div>
</template>