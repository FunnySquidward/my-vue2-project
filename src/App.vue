<template>
  <div id="app">
    <!-- 3.0 使用Home组件 -->
    <!-- <Home></Home> -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <!-- 底部的tabbar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/Home">首页</router-link>
        </van-tabbar-item>
      <van-tabbar-item icon="search" >
        <router-link to="/News">新闻资讯</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" >
        <router-link to="/ShopCar">购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" >
        <router-link to="/Image">图片分享</router-link>
      </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
// 1.0 导入Home组件
import Home from './Home/Index.vue'

export default {
  name: 'App',
  data(){
    return {
      active:0
    }
  },
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
.van-nav-bar__title,.van-nav-bar__text,.van-icon-arrow-left{
  color:#ffffff !important;
}

</style>
