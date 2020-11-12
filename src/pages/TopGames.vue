<template>
  <div class="container-games">
    <list-games-wrap :listGames="topGames"/>
  </div>
</template>

<script>
import ListGamesWrap from "@/components/wrap/ListGamesWrap.vue"

export default {
  components: {
    ListGamesWrap
  },
  created() {
    this.$store.dispatch('setTopGames');
  },
  computed: {
    topGames() {
      return this.$store.getters.topGames;
    }
  }
}
</script>