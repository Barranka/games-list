<template>
  <div class="container container-content">
    <div class="games-list">
        <div
          class="game-item"
          v-for="(item, i) in listGames"
          :key="i"
          :style="{
            background: `url(https://aws-origin.image-tech-storage.com/gameRes/sq/200/${item.item_title}.jpg)`,
          }"
        >
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listGames: {
      type: Array,
      default: () => null,
    },
  }
}
</script>