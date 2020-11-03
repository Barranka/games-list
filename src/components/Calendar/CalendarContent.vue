<template>
<div>
  <section class="tabs-menu-content">
    <div class="calendar-header-content">
      <h2 class="title">
        Календарь
      </h2>
      <div class="tabs">
        <div class="tabs__item" v-for="(item,i) in tabs" :key="i"  :class="{active: isActiveButton == i}" @click="changePages(item, i)"> {{ item }} </div>
      </div>
    </div>
  </section>
  <section class="body-content">
    <requests v-if="isRequests"/>
    <archive v-if="isArchive"/>
    <notices v-if="isNotices"/>
  </section>
</div>

</template>

<script>
import requests from "@/components/Calendar/TabsMenu/Requests.vue"
import archive from "@/components/Calendar/TabsMenu/Archive.vue"
import notices from "@/components/Calendar/TabsMenu/Notices.vue"

export default {
  components: {
    requests,
    archive,
    notices
  },
  data () {
    return {
      tabs: [ "Запросы", "Записи", "Архивы" ],
      isActiveButton: false,
      isRequests: true,
      isArchive: false,
      isNotices: false,
    }
  },
  methods: {
    changePages(item, i) {
      this.isActiveButton = i;
      if (item == "Записи") {
        this.isNotices = true;
        this.isArchive = false;
        this.isRequests = false;
      } else if (item == "Архивы") {
        this.isNotices = false;
        this.isArchive = true;
        this.isRequests = false;
      } else {
        this.isNotices = false;
        this.isArchive = false;
        this.isRequests = true;
      }

    }
  }
};
</script>

<style lang="scss">
.calendar-header-content {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin: 40px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .title {
    font-size: 35px;
    line-height: 40px;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
  .tabs {
    display: flex;
    &__item {
      padding: 10px 22px;
      background-color:#F9F8FC;
      color: #8E8E93;

      cursor: pointer;
      &:first-child {
        border-radius: 10px 0px 0px 10px;
      }
      &:last-child {
        border-radius: 0px 10px 10px 0px;
      }
      &.active {
        background-color: #103D97;
        color: #ffffff;
      }
    }
  }
}
</style>