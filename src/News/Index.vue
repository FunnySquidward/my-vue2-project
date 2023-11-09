<template>
   <div class="root">
   <!-- 1. 导航 -->
    <van-nav-bar
      left-text="返回" 
      left-arrow
      @click-left="onClickLeft"
      title="新闻列表" />

   <!-- 2. 新闻item -->
   </div>
</template>

<script>
export default {
   methods:{
      onClickLeft(){
         // 返回到上一级目录
         this.$router.go(-1)
      }
   }
}
</script>

<style>

</style>