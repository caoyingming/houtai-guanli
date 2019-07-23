import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/jquery-2.1.0.js'
import _url from './components/url'//引用文件
Vue.prototype.URL = _url//挂载到Vue实例上面
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
