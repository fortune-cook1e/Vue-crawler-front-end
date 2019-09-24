<template>
  <div id="app">
    <el-container>
      <el-aside width='300px'>
        <nav-menu/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'app',
  components: {
    NavMenu
  }
}
</script>

<style>
html,body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
a {
  text-decoration: none;
}
</style>
