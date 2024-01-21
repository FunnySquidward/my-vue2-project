<template>
   <div class="root">
   <!-- 1. 导航 -->
    <van-nav-bar 
      left-text="返回" 
      left-arrow
      @click-left="onClickLeft"
      title="新闻列表" />

   <!-- 2. 新闻item -->
      <a v-for="(item,index) in newsList" :key="index" :href="item.link_url">
         <van-card 
            :tag="isHot(item.click)"
            :price="dateFromat(item.add_time)"
            currency=""
            :desc="item.zhaiyao"  
            :title="item.title"
            :thumb="item.img_url"         
            >
            <div slot="num">
              <span>点击:{{item.click}}</span>
            </div>
            <div slot="desc">
               <span  v-html="item.zhaiyao"></span>
            </div>
         </van-card>
      </a>
   </div>
</template>

<script>
export default {
   data(){
      return {
         newsList:[]
      }
   },
   methods:{
      onClickLeft(){
         // 返回到上一级目录
         this.$router.go(-1)
      },
      getNewsList() {
         this.$axios.get('/api/getnewslist')
         .then(res=>{
            // console.log(res);
            this.newsList = res.data.message
         })
      },
      dateFromat(dataStr) {
         // 将dateStr 参数格式化后返回
         let date = new Date(dataStr);
         let y = date.getFullYear();
         let m = date.getMonth();
         let d = date.getDate();
         let h = date.getHours();
         let mi = date.getMinutes();
         let s = date.getSeconds();
         return `${y}-${m}-${d} ${h}:${mi}:${s}` ;
      },
      isHot(clicknum) {
         // 如果点击数大于等于2，则为热门
         return clicknum >= 2?'热门':''
      }
   },
   mounted() {
      this.getNewsList();
   }
}
</script>

<style>

</style>