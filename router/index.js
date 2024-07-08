import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../src/view/MainPage.vue";
import PokemonPage from "../src/view/PokemonPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/:pokemon',
      name: 'pokemon',
      component: PokemonPage
    },
  ]
})
export default router
