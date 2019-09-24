<template>
  <div class="nav-menu">
    <el-menu>
      <router-link v-for='item in navs' :key='item' :to="{name:item}">
        <el-menu-item>
          {{item}}
        </el-menu-item>
      </router-link>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navs: ['daily', 'convert', 'csv', 'related', 'combine', 'translate']
    }
  }
}
</script>

<style lang="scss">
  .nav-menu {
    height:100%;
  }
</style>
