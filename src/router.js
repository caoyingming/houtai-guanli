import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import orderList from './views/orderList.vue'
import callDetails from './views/callDetails.vue'
import newPhone from './views/newPhone.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },{
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },{
      path: '/callDetails',
      name: 'callDetails',
      component: callDetails
    },{
		path: '/newPhone',
		name: 'newPhone',
		component: newPhone
	}
    
  ]
})
