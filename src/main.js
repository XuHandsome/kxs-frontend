import Vue from 'vue'
import App from './App.vue'
import { Button, Radio, Container, Main, Header, Aside } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/index.js'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(VueRouter)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)

new Vue({
  router: router, //将router放在Vue组件容器，进行全局生效
  render: h => h(App),
}).$mount('#app')
