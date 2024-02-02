<script>
import AppHome from "./components/AppHome.vue";
import AppShow from "./components/AppShow.vue";
import Header from "./components/partials/Header.vue";
export default {
  components: {
    AppHome,
    AppShow,
    Header,
  },
};
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
