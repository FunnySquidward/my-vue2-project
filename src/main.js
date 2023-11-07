import Vue from 'vue'
import App from './App.vue'

// 1. 导入vant的所有组件
import Vant from 'vant'
// 2. 导入vant组件所有的样式css
import 'vant/lib/index.css'

// 3. 将vant组件注册到vue中
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
