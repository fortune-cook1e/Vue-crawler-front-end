<template>
  <div class="nav-menu">
    <el-menu>
       <router-link :to="{name:'daily'}">
        <el-menu-item>
          Daily
        </el-menu-item>
       </router-link>

       <router-link :to="{name:'convert'}">
        <el-menu-item>
          Convert
        </el-menu-item>
       </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style lang="scss">
  .nav-menu {
    height:100%;
  }
</style>
