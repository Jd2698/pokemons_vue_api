<script setup>
	import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header class="flex justify-between">
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />

		<nav class="flex gap-4 items-start">
			<RouterLink to="/" class="">Home</RouterLink>
			<RouterLink to="/pokemons" class="">Pokemons</RouterLink>
		</nav>
	</header>
	<RouterView />
</template>

<style scoped>
nav a.router-link-exact-active {
	color: var(--main-color-text);
	/* #334c5c */
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}
</style>
