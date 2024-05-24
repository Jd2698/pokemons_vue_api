<script setup>
	import { useFavoritoStore } from "@/store/favoritos";
	import { storeToRefs } from "pinia";

	const useFavorito = useFavoritoStore();

	const { favoritos } = storeToRefs(useFavorito);
	const { remove } = useFavorito;
</script>

<template>
	<h1 class="my-6 text-center">Favorites</h1>
	<p v-if="favoritos.length === 0">Sin favoritos</p>
	<ul class="flex flex-col items-center" v-else>
		<li v-for="poke in favoritos" :key="poke.id" class="w-[370px] flex gap-6 border-b-2 py-3 border-[--main-color-text]">
			<div class="w-[50%]">{{ poke.id }} - {{ poke.name }}</div>
			<router-link class="" :to="`/pokemons/${poke.name}`">
				Más info
			</router-link>
			<button class="" @click="remove(poke.id)">
				Eliminar
			</button>
		</li>
	</ul>
</template>
