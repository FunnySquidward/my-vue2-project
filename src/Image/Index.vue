<template>
   <div class="root">
    <!-- 1.导航栏 -->
    <van-nav-bar 
      left-text="返回" 
      left-arrow
      @click-left="onClickLeft"
      title="图片列表" />

    <!-- 2.分类tab烂 -->
   <van-tabs type="card" @click="onClick">
      <van-tab v-for="(item,index) in cates" :key="index" :title="item.title"></van-tab>
   </van-tabs>

    <!-- 3.图片列表区域 -->
      <div class="nodata" v-if="imglist.length == 0">该分类下没有图片数据</div>
      <div class="imgList" v-for="(item,index) in imglist" :key="index">
         <img :src="item.img_url" alt="">
         <!-- 标题和摘要,子绝父相 -->
         <div class="info">
            <h2>{{item.title}}</h2>
            <p>
               {{ item.zhaiyao }}

            </p>
         </div>
      </div>
   </div>
</template>

<script>


export default {
   data() {
      return {
         cates:[],
         imglist:[] //1.0定义数据
      }
   },
   methods:{
      onClickLeft(){
         // 返回到上一级目录
         this.$router.go(-1)
      },
      onClick(index,title){
         console.log(index,title);
         // 根据Index就可以从this.cates数组中获取到id值，然后将id值传入到getImages方法
         this.getImages(this.cates[index].id)
      },
      getcates(){
         this.$axios.get('/api/getimgcategory').then(res=>{
            let list = res.data.message;
            list.unshift({
               "title":"全部",
               id:0
            })
            this.cates = list;
         })
      },
      // 2.0定义方法获取数据
      getImages(cateid){
         this.$axios.get(`/api/getimages/${cateid}`)
         .then(res=>{
            this.imglist = res.data.message
         })
      }
   },
   mounted() {
      this.getcates();
      this.getImages(-1); //-1表示获取全部数据
   }
}
</script>

<style>
/* 解决tab导航栏样式的 */
.van-tabs__nav--card {
   margin: 0 !important;
}

.imgList {
   position: relative;
}
.imgList img {
   width: 100%;
   height: 300px;
}

.info{
   position: absolute;
   bottom: 10px;
   left: 5px;
   max-height: 100px;
   overflow: auto;
}

.info h2{
   font-size: 13px;
   color: white;
}

.info p{
   font-size: 12px;
   color: white;
}

.root{
   padding-bottom: 50px;
}

.nodata {
   text-align: center;
   color: red;
   margin-top: 250px;
}
</style>