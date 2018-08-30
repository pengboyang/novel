<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'STHeiti SC','\5fae\8f6f\96c5\9ed1',Arial,'Helvetica Neue',Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  box-sizing: border-box;
}
</style>
