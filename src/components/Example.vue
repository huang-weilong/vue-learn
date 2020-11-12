<template>
<div>
  <router-link to="/">返回首页</router-link>
  <div class="title">v-bind:class</div>
  <div v-bind:class="{textColor:colorFlag}">①文字颜色</div>
  <div v-bind:class="computedTextColor">②文字样式使用computed，计算属性返回内容和①一致</div>
  <div v-bind:class="[textColorClass,textFontSizeClass]">③文字样式使用数组语法</div>
  <div>------------------------------------------------------</div>
  <div class="title">v-if</div>
  <div v-if="showText">v-if条件渲染，为真时显示，为假时不显示</div>
  <div v-else>v-else</div>
  <div>Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。</div>
  <div>
    <template v-if="loginType1">
      <label>Username</label>
      <input placeholder="Enter your username"/>
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address"/>
    </template>
    <button v-on:click="toggleInputType1">toggleInputType1</button>
  </div>
  <div>用 key 管理可复用的元素,现在，每次切换时，输入框都将被重新渲染</div>
  <div>
    <template v-if="loginType2">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input"/>
    </template>
    <button v-on:click="toggleInputType2">toggleInputType2</button>
  </div>
  <div>------------------------------------------------------</div>
  <div class="title">v-show</div>
  <div>v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display</div>
  <h5 v-show="true">v-show="true" Hello!</h5>
  <div>一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好</div>
  <div>------------------------------------------------------</div>
  <div class="title">v-for列表渲染</div>
  <ul>
    <li v-for="(item,index) in list" :key="item.name">
      {{item.name}} - 数组下标{{index}}
    </li>
  </ul>
  <div>遍历对象</div>
  <div v-for="(value, key, index) in obj" :key="value">下标：{{index}} : {{key}} : {{value}}</div>
</div>
</template>

<script>
export default {
  name: 'example',
  data () {
    return {
      colorFlag: true,
      textColorClass: 'textColor',
      textFontSizeClass: 'textFontSize',
      showText: true,
      loginType1: true,
      loginType2: true,
      list: [
        {name: '张三'},
        {name: '李四'},
        {name: '王五'}
      ],
      obj: {
        'name': '张三',
        'age': 20,
        'address': '广东省惠州市'
      }
    }
  },
  computed: {
    computedTextColor: function () {
      return {
        textColor: this.colorFlag
      }
    }
  },
  methods: {
    toggleInputType1 () {
      this.loginType1 = !this.loginType1
    },
    toggleInputType2 () {
      this.loginType2 = !this.loginType2
    }
  }
}
</script>

<style scoped>
.title{
  font-weight: bold;
  font-size: 20px;
}
.textColor{
  color: cornflowerblue;
}
.textFontSize{
  font-size: 18px;
}
</style>
