import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './view/router/Router.js' //引用Router.js声明为router
import VueRouter from 'vue-router'
import axios from 'axios';
import qs from 'qs'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.prototype.$axios = axios //全局注册，使用方法为: this.$axios
axios.defaults.baseURL = '/api' //每次发送请求都会带一个/的前缀 跨域问题step1
Vue.prototype.qs = qs //全局注册，使用方法为:this.qs

new Vue({
  router: router, //将router放在Vue组件容器，进行全局生效
  render: h => h(App),
}).$mount('#app')
