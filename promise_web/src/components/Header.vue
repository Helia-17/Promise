<template>
  <!-- <div class="container"> -->
    <header>
      <h1>약속</h1>
      <nav>
        <span id='download'>다운로드</span>
        <span id='download-apple'><img class="download-logo" src="./../assets/apple-logo.png"> Apple Store</span>
        <span id='download-android'><img class="download-logo" src="./../assets/play-store-logo.png"> Play Store</span>
      </nav>
  </header>
  <!-- </div> -->
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* .container{
  width: 100%;
  height: 100%;
  background: teal;
} */

header {
  width: 1100px;
  margin: auto;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  height: 55px;
  padding: 1rem;
  color: black;
  
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav > span {
  font-size: 20px;
}

#download, #download-apple{
  margin-right: 20px;
}

#download-android > .download-logo {
  width: 15px;
}

#download-apple > .download-logo {
  width: 18px;
}
</style>