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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #DBDFE2;
}
@font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


* {
  font-family: "GmarketSansBold";
}
body {
    margin: 0px;
}
</style>
