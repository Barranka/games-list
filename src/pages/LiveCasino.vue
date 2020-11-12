<template>
  <div class="container-games">
    <list-games-wrap :listGames="liveCasino"/>
  </div>
</template>

<script>
import ListGamesWrap from "@/components/wrap/ListGamesWrap.vue"

export default {
  components: {
    ListGamesWrap
  },
  created() {
    this.$store.dispatch('setLiveCasino');
  },
  computed: {
    liveCasino() {
      return this.$store.getters.liveCasino;
    }
  }
}
</script>