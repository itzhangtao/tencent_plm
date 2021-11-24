import Vue from 'vue'
import Vuex from 'vuex'

// 引入Vuex 拆分文件
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import modules from "./modules";


Vue.use(Vuex)

var storePublics = {
  //strict: true,开启后，外部无法直接修改strict,限制开发人员从外部改变 （切记正式环境把它给关了 process.env.NODE_ENV）
  // 它是Vuex要定义的变量（也就是全局变量）
  state,
  // 它是处理同步，修改state 数据
  mutations,
  //  它是处理异步，或者多个同步的区域 使用dispatch来调用
  actions,
  // 它就像Vue组件里的computed 计算属性，有的时候后台返回来的数据，并不是我们想要的数据，我们需要处理或者拼接后使用，可能会多个组件使用。
  getters,
  //  这个是模块区分
  modules,
  // 自定义插件(可以)
  // plugins: [
  //   (store)=>{
  //     console.log(store)
  //     console.log('每次加载就回执行一次，可以做你想做的事情')
  //   }
  // ]
};



/**
 * 全局监听，页面刷新的时候将store里state的值存到sessionStorage中，然后从sessionStorage中获取，再赋值给store。
 * 然后再把session里面存的删除即可，相当于中间件的作用。
 */
//在页面加载时读取sessionStorage里的状态信息
if (sessionStorage.getItem("store")) {
  // console.log('刷新后')
  storePublics.state = JSON.parse(sessionStorage.getItem("store"))
  sessionStorage.removeItem("store")
}
//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  // console.log('刷新前')
  sessionStorage.setItem("store",JSON.stringify(storePublics.state))
});

let store = new Vuex.Store(storePublics)

// 这里是store的生命周期，特殊需求的可用
// store.watch((state)=>{
//   state.name + state.name1
//   console.log('当state值发生改变就会触发回调函数')
// },()=>{
//   console.log('回调函数')
// })
// store.subscribe((mutation)=>{
//   console.log(mutation)
//   console.log(mutation.payload)  // 每次传的参数
//   console.log('每次调用mutations 都会执行这个函数')
// })
// store.subscribeAction((action) => {
//     console.log(action)
//     console.log(action.payload)
//     console.log('监听action')
// })

/**
 * 导出的方式：
 * 1、对象形式导出 export default store
 * 2、函数形式导出 export function createStore() {return store}
 * 区别：
 * 1、引入的时候不同。
 * 对象形式引入：import store from './store'
 * 函数形式引入：import { createStore } from './store'
 * 2、函数形式引入，主要是为了SSO服务端渲染使用
 * */
//

export function createStore() {
  return store
}
     
