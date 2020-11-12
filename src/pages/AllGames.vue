<template>
  <div class="container-games">
    <list-games-wrap :listGames="allGames"/>
  </div>
</template>

<script>
import ListGamesWrap from "@/components/wrap/ListGamesWrap.vue"

export default {
  components: {
    ListGamesWrap
  },
  created() {
    this.$store.dispatch('setAllGames');
  },
  computed: {
    allGames() {
      return this.$store.getters.allGames;
    }
  }
}
</script>