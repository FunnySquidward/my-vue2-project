<template>
  <div class="root">
    <!-- 1. 顶部的导航栏 -->
    <!-- 实现思路：
      1. 去vant组件中找到navbar 这个组件
      2. 将navbar组件官方文档中的代码拷贝到这个文件中
      3. 修改样式
     -->
     <van-nav-bar  title="首页" />
    <!-- 2 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- 3. 新闻广播 -->

    <!-- 4. 九宫格导航 -->

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.van-swipe {
    height: 200px;
    background-color: red;
}
</style>
