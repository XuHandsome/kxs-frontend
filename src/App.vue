<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  /* 全局设置默认一屏高度 */
  height: 100vh;
}
</style>
