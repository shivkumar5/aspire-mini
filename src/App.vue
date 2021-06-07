<style lang="sass">
@import "./styles/utility.scss";
</style>
<template>
  <div id="app">
    <!-- <CardsDesktop/> -->
    <!-- <CardsMobile/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import CardsDesktop from './components/CardsDesktop.vue'
// import CardsMobile from './components/CardsMobile.vue'
export default {
  name: 'App',
  components:{
    // CardsMobile,
    // CardsDesktop
  }
}
</script>

