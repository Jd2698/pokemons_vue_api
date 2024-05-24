import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('../views/HomeView.vue')
		},
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
			path: '/pokemons/:name',
			name: 'pokemon',
			component: () => import('../views/PokemonView.vue')
		},
		{
			path: '/pokemon/search',
			name: 'pokemon/search',
			component: () => import('../views/PokemonSearchView.vue')
		},
		{
			path: '/favoritos',
			name: 'favoritos',
			component: () => import('../views/FavoritosView.vue')
		}
	]
})

export default router
