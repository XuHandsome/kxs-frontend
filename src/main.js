import Vue from 'vue'
import App from './App.vue'
import { Button, Radio, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownItem, DropdownMenu } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'


import router from '../router'
import store from '../store'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)

new Vue({
  store,
  router, //将router放在Vue组件容器，进行全局生效
  render: h => h(App),
}).$mount('#app')
