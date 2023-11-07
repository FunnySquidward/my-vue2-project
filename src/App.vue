<template>
  <div id="app">
    <!-- 3.0 使用Home组件 -->
    <Home></Home>

    <!-- 底部的tabbar -->
  </div>
</template>

<script>
// 1.0 导入Home组件
import Home from './Home/Index.vue'

export default {
  name: 'App',
  components: {
    // 2.0 注册Home组件
    Home
  }
}
</script>

<style>
/* 修改vant的navbar的背景色为蓝色，这个覆盖的样式要写到app.vue中
将来在所有的其他.vue文件中才会生效
*/
.van-nav-bar {
  background-color:#0094ff !important;
}
.van-nav-bar__title{
  color:#ffffff !important;
}

</style>
