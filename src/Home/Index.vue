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
        <van-swipe-item v-for="(item ,index) in imglist" :key="index">
            <a :href="item.url">
                 <img :src="item.img" alt="">
            </a>
        </van-swipe-item>
    </van-swipe>

    <!-- 3. 新闻广播 -->
    <a :href="cur_url">
        <van-notice-bar
            :text="cur_title"
            left-icon="volume-o"
            />
    </a>
    <!-- 4. 九宫格导航 -->
    <div class="nav">
    <van-row gutter="20">
        <van-col span="8">
            <img src="../assets/menu3.png" alt="">
        </van-col>
        <van-col span="8">
             <img src="../assets/menu4.png" alt="">
             </van-col>
        <van-col span="8"> 
            <img src="../assets/menu5.png" alt="">
            </van-col>
    </van-row>
      <van-row gutter="20">
        <van-col span="8">
             <img src="../assets/menu6.png" alt="">
             </van-col>
        <van-col span="8"> 
            <img src="../assets/menu9.png" alt="">
            </van-col>
        <van-col span="8"> 
            <img src="../assets/menu10.png" alt="">
            </van-col>
    </van-row>
</div>
  </div>
</template>

<script>

// 1.0 npm i axios
// 2.0 导入axios
import axios from 'axios'

export default {
    data(){
        return {
            imglist:[],        
            cur_title:'', // 当前消息
            cur_url:'', // 当前消息的url
            index:0, //当前消息的下标
            curr_interval:null  //保存setinterval
        }
    },
    methods:{
        // 请求轮播图
        getlunbo(){
            // 3.0 请求服务器获取到轮播图数据: http://106.52.170.128:8888/api/getlunbo
            axios.get('http://106.52.170.128:8888/api/getlunbo')
            .then(res=>{
                // console.log(res);
                this.imglist = res.data.message
            })
        },
        // 请求广播的新闻数据
        getNewsList(){
            axios.get('http://106.52.170.128:8888/api/getnewslist')
            .then(res=>{   
                let list = res.data.message              
                
                // 获取数组的第一条数据
                this.cur_title = list && list.length>0 ? list[0].title:"当前没有任何广播消息";
                this.cur_url = list && list.length>0 ? list[0].link_url:"";

                // 开启定时器
               this.curr_interval = setInterval(() => {
                    // 1. 将index 加1
                    this.index ++;
                    // 2. 获取list中的值 list[index]
                    let curData = list[this.index];

                    this.cur_title = curData ? curData.title:"当前没有任何广播消息";
                    this.cur_url = curData ? curData.link_url:"";

                }, 5000);
            })
        }
    },
    mounted(){
        // 4.0 当页面挂在完成后执行ajax请求获取轮播图数据
     this.getlunbo();   
     this.getNewsList();
    },
    beforeDestroy() {
        // 在页面离开之前，销毁定时器
        clearInterval(this.curr_interval)
    }
}
</script>

<style scoped>
.van-swipe {
    height: 200px;
    background-color: red;
}

img{
    width: 100%;
    height: 100%;
}
.nav{
    margin-top:10px;
}
</style>
