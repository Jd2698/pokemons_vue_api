import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/pokemons',
			name: 'pokemons',
			component: () => import('../views/PokemonsView.vue')
		},
		{
			path: '/pokemon/:name',
			name: 'pokemon',
			component: () => import('../views/PokemonView.vue')
		},
		{
			path: '/pokemon/search',
			name: 'pokemon/search',
			component: () => import('../views/PokemonSearchView.vue')
		}
	]
})

export default router
