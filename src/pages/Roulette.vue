<template>
  <div class="container-games">
    <list-games-wrap :listGames="rouletteGames"/>
  </div>
</template>

<script>
import ListGamesWrap from "@/components/wrap/ListGamesWrap.vue"

export default {
  components: {
    ListGamesWrap
  },
  created() {
    this.$store.dispatch('setRouletteGames');
  },
  computed: {
    rouletteGames() {
      return this.$store.getters.rouletteGames;
    }
  }
}
</script>