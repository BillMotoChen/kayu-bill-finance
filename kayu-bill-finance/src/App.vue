<template>
  <div>
  <appHeader></appHeader>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <br>
  <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
