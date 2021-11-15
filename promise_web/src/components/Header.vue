<template>
    <header>
      <span id='nav-title-left'>약속</span>
      <nav id='nav-contents-right'>
        <span id='download'>다운로드</span>
        <span id='download-apple'><img class="download-logo" src="./../assets/apple-logo.png"> Apple Store</span>
        <span id='download-android'><img class="download-logo" src="./../assets/play-store-logo.png"> Play Store</span>
      </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>

header {
  width: 1100px;
  margin: auto;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  height: 60px;
  padding: 1rem;
  color: black;
  
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

#nav-title-left {
  font-size: 30px;
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