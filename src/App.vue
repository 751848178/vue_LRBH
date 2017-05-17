<template>
  <div id="app">
    <img class="hide" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
html {
	font-size: calc(100vw / 375 * 14);
}
body {
	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Pingfang SC", "Microsoft Yahei", sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
