<template>
  <div class="wrapper">

    <header>
      <banner />
    </header>
    <body>
      <menu-list />
    </body>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import MenuList from "@/components/Menu.vue"

export default {
  components: {
    Banner,
    MenuList
  }
};
</script>