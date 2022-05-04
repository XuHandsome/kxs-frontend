import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 关键字: let 和 const。
// let 声明的变量只在 let 命令所在的代码块内有效。
// const 声明一个只读的常量，一旦声明，常量的值就不能改变。
// new的作用是通过构造函数来创建一个实例对象。

// 创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数
const router = new VueRouter({
  routes: [
    {
      path: '/', // 路径
      // component是指组件  import引用Home.vue地址
      component: ()=>import('../home/HomeItem.vue')
    },
    {
      path: '/login',
      component: ()=>import('../login/Login.vue')
    }
  ]
})

// 导出router这个方法函数，便于其他模块引用
export default router