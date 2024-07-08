<template>
  <Header/>
  <div class="main-page">
    <div v-for="pokemon in pokemons">
      <PokeCard :pokemon="pokemon" @click="showFullInfo(pokemon.name)"/>
    </div>
  </div>
  <Footer/>
</template>


<script setup>
import {ref, onMounted} from 'vue'
import {getPokemons} from "../../api/pokemons.js";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PokeCard from "../components/PokeCard.vue";
import {useRouter} from 'vue-router';

const router = useRouter();

onMounted(async () => {
  pokemons.value = await getPokemons()
})

const pokemons = ref(null)

const showFullInfo = (slug) => {
  router.push({name: 'pokemon', params: {pokemon: `${slug}`}})
}

</script>

<style lang="scss" scoped>
.main-page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 40px 50px 64px 26px;
  flex: 1;

  &__control {
    margin-bottom: 40px;
  }
}
</style>
