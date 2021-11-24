import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login.vue'
import MainPage from '../MainPage'
Vue.use(Router)

export default new Router({
    mode:"hash",// 使用hash路由，带#号
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path:'/mainpage',
            component:MainPage
        }
    ]
})
