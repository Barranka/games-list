<template>
  <div>
    <div class="container container-content">
      <ul class="menu-list">
        <li class="menu-item"  @click="makeActive(i)" :class="{active: link.isActive }" v-for="(link, i) in links" :key="link.title">
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
        {title: 'All GAMES', url: '/', icon: 'star', isActive: true},
        {title: 'TOP GAMES', url: '/top-games', icon: 'top', isActive: null},
        {title: 'LIVE CASINO', url: '/live-casino', icon: 'live', isActive: null},
        {title: 'SLOTS GAMES', url: '/slots-games', icon: 'seven', isActive: null},
        {title: 'ROULETTE', url: '/roulette', icon: 'roulette', isActive: null},
        {title: 'TABLE GAMES', url: '/table-games', icon: 'table', isActive: null},
        {title: 'CARD GAMES', url: '/card-games', icon: 'cards', isActive: null}
      ],
    }
  },
  methods: {
    getImgUrl(fileName) {
      const images = require.context('@/assets/images/', true, /\.(png|jpe?g|svg)$/);
      return images(fileName);
    },
    makeActive(i){
      this.links.forEach((item, index)=>{
        item.isActive = false;
        if (index == i) item.isActive = true;
      })
    }
  }
};
</script>