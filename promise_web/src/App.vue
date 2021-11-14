<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Main,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #DBDFE2;
}

body {
    margin: 0px;
}
</style>
