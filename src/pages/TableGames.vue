<template>
  <div class="container-games">
    <list-games-wrap :listGames="tableGames"/>
  </div>
</template>

<script>
import ListGamesWrap from "@/components/wrap/ListGamesWrap.vue"

export default {
  components: {
    ListGamesWrap
  },
  created() {
    this.$store.dispatch('setTableGames');
  },
  computed: {
    tableGames() {
      return this.$store.getters.tableGames;
    }
  }
}
</script>