<template>
  <div id="app">
    <nav-panel></nav-panel>
    <router-view></router-view>
  </div>
</template>

<script>
import NavPanel from '@/components/NavPanel'

export default {
  name: 'app',
  components: {
    NavPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
