<template>
   <div class="root">
   <!-- 1. 导航 -->
    <van-nav-bar
      left-text="返回" 
      left-arrow
      @click-left="onClickLeft"
      title="新闻列表" />

   <!-- 2. 新闻item -->
   <van-card
         tag="热门"
         price="2023-11-9 15:00:01"
         currency=""
         desc="描述信息"  
         title="商品标题"
         thumb="http://127.0.0.1:8888//upload/201504/16/201504161229442885.jpg"         
         >
         <div slot="num">
           <span>点击:100</span>
         </div>
         </van-card>
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