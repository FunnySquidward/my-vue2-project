import Vue from 'vue'
import App from './App.vue'


// 统一将axios对象导入后加载到Vue对象实例原型上同时设置axios的baseUrl前缀
import axios from 'axios'
// 同时设置axios的baseUrl前缀
// http://106.52.170.128:8888
axios.defaults.baseURL = 'http://106.52.170.128:8888'  // 线上数据服务器
// axios.defaults.baseURL = 'http://127.0.0.1:8888'  // 本地数据服务器
Vue.prototype.$axios = axios


// 1. 导入vant的所有组件
import Vant from 'vant'
// 2. 导入vant组件所有的样式css
import 'vant/lib/index.css'

// 3. 将vant组件注册到vue中
Vue.use(Vant)

// 使用路由步骤
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 准备路由规则
import Home from './Home/Index.vue'
import News from './News/Index.vue'
import Image from './Image/Index.vue'
import ShopCar from './ShopCar/Index.vue'

const routes = [
  // {path:'/',component:Home},   // 给/根路径注册一个页面对应，来解决刚开始进入网站白屏问题
  {path:'/',redirect:'/Home' },  // 解决白屏问题方案2：使用redirect:'/Home'
  {path:'/Home',component:Home},
  {path:'/News',component:News},
  {path:'/Image',component:Image},
  {path:'/ShopCar',component:ShopCar}
]
// 实例化路由
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router // 注入路由规则对象
}).$mount('#app')
