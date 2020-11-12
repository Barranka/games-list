<template>
  <div class="container-games">
    <list-games-wrap :listGames="slotGames"/>
  </div>
</template>

<script>
import ListGamesWrap from "@/components/wrap/ListGamesWrap.vue"

export default {
  components: {
    ListGamesWrap
  },
  created() {
    this.$store.dispatch('setSlotsGames');
  },
  computed: {
    slotGames() {
      return this.$store.getters.slotsGames;
    }
  }
}
</script>