<template>
  <div id="app">
    <sidenav />
    <router-view />
  </div>
</template>

<script>
import sidenav from "./components/sidenav.vue";
export default {
  components: {
    sidenav,
  },
};
</script>

<style lang="scss">
#app {
  padding-left: 60px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
