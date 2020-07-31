<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <HomeText></HomeText>
    <router-link to="/PageA">跳转到页面A</router-link>
    <router-link to="/PageB">跳转到页面B</router-link>
    <!-- 挂载子路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HomeText from './HomeText.vue'

export default {
  name: 'HelloWorld',
  components: {
    HomeText
  },
  data () {
    return {
      msg: 'Vue学习'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
