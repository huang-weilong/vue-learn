<template>
  <div>
    <p>我是页面A</p>
    <p>子路由需要挂载到父页面才能显示,使用router-view进行挂载</p>
    <router-link to="/PageA1">进入A级子页面</router-link>
    <router-link to="/">返回首页</router-link>
    <!-- 挂载A级子页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
</style>
