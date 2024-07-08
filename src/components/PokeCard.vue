<script setup>
defineProps({
  pokemon: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div class="card" >
    <img class="card__image" :src="pokemon.image" :alt="pokemon.name">
    <h2 class="card__name">{{pokemon.name}}</h2>
    <h3 class="card__type">{{pokemon.type}}</h3>
    <div class="card__stats" v-for="stat in pokemon.stats">
      {{stat.stat.name}} : {{stat.base_stat}}
    </div>
  </div>
</template>

<style scoped lang="scss">

.card {
  display: flex;
  flex-direction: column;
  background: #EFEFF2;
  border-radius: 40px;
  box-shadow: 0 0 0 1px #0A2228;
  padding: 16px;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.01) rotate(1deg);
  }

  &__image {
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }

  &__name {
    font-weight: 600;
    font-size: 32px;
    color: #000000;
    text-align: center;
    text-transform: uppercase;
  }

  &__type {
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>


