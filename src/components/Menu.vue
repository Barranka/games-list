<template>
  <div>
    <div class="container container-content">
      <ul class="menu-wrap">
        <li class="menu-item" :class="{active: link.isActive }" v-for="(link, i) in links" :key="link.title">
          <router-link class="menu-link" :title="link.title" :to="link.url">
            <img v-if="link.icon" class="menu-link__icon" :src="getImgUrl(`./menu/${link.icon}.svg`)" alt="вид игр">
            <div class="menu-link__title">{{link.title}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      links: [
        {title: 'All GAMES', url: '/', icon: 'star'},
        {title: 'TOP GAMES', url: '/top-games', icon: 'top'},
        {title: 'LIVE CASINO', url: '/live-casino', icon: 'live'},
        {title: 'SLOTS GAMES', url: '/slots-games', icon: 'seven'},
        {title: 'ROULETTE', url: '/roulette', icon: 'roulette'},
        {title: 'TABLE GAMES', url: '/table-games', icon: 'table'},
        {title: 'CARD GAMES', url: '/card-games', icon: 'cards'}
      ],
    }
  },
  methods: {
    getImgUrl(fileName) {
      const images = require.context('@/assets/images/', true, /\.(png|jpe?g|svg)$/);
      return images(fileName);
    }
  }
};
</script>