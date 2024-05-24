<script setup>
	import { ref } from "vue";
	import { RouterLink, RouterView, useRouter } from "vue-router";
	import { useGetData } from "@/composables/getData.js";

	const router = useRouter();
</script>

<template>
	<header class="flex justify-between">
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />

		<nav class="flex gap-4 items-start">

			<RouterLink to="/" class="hover:border-b border-[--main-color-text]">Home</RouterLink>
			<RouterLink to="/pokemons" class="hover:border-b border-[--main-color-text]">Pokemons</RouterLink>
			<RouterLink to="/favoritos" class="hover:border-b border-[--main-color-text]">Favorites</RouterLink>
			<RouterLink to="/pokemon/search" class="hover:border-b border-[--main-color-text]">Search</RouterLink>
		</nav>
	</header>
	<RouterView />
</template>
