import Vue from 'vue'
import App from './App.vue'

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
