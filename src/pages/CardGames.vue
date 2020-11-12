<template>
  <div class="container-games">
    <list-games-wrap :listGames="cardGames"/>
  </div>
</template>

<script>
import ListGamesWrap from "@/components/wrap/ListGamesWrap.vue"

export default {
  components: {
    ListGamesWrap
  },
  created() {
    this.$store.dispatch('setCardGames');
  },
  computed: {
    cardGames() {
      return this.$store.getters.cardGames;
    }
  }
}
</script>