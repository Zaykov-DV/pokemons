<script setup>
import {ref, onBeforeMount} from "vue";
import {getPokemonInfo} from "../../api/pokemon.js";
import {useRoute} from 'vue-router';

const route = useRoute();

onBeforeMount(async () => {
  pokemon.value = await getPokemonInfo(route.params.pokemon)
})

const pokemon = ref(null)

</script>

<template>
  <div class="pokemon-page">
    <h1 class="pokemon-page__title"> {{ pokemon?.name }}</h1>
    <img class="pokemon-page__image" :src="pokemon?.sprites?.front_default" :alt="pokemon?.name">
    <div class="pokemon-page__info">
      <h2 class="pokemon-page__subtitle">
        height: <span class="pokemon-page__description">{{ pokemon?.height }}</span>
      </h2>
    </div>
    <div class="pokemon-page__info">
      <h2 class="pokemon-page__subtitle"> forms: &nbsp;</h2>
      <span class="pokemon-page__description" v-for="(form, index) in pokemon?.forms" :key="index">
     {{ form.name }}
    </span>
    </div>
    <div class="pokemon-page__info">
      <h2 class="pokemon-page__subtitle">abilities: &nbsp;</h2>
      <span class="pokemon-page__description" v-for="(ability, index) in pokemon?.abilities" :key="index">
      {{ ability.ability.name }}
    </span>
    </div>
    <div class="pokemon-page__info">
      <h2 class="pokemon-page__subtitle">stats:&nbsp;</h2>
      <div class="pokemon-page__list">
        <span class="pokemon-page__description" v-for="stat in pokemon?.stats">
          {{ stat.stat.name }} : {{ stat.base_stat }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pokemon-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__image {
    width: 220px;
    height: 220px;
  }

  &__title {
    font-size: 40px;
    font-weight: 600;
  }

  &__info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 500;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }
}
</style>
