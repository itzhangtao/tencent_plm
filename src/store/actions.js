/**
 * 1、参数说明
 * @store   是store对象，可以通过store.commit来调用mutations函数（简洁化：可以通过{commit}来解构出来使用）
 * @value   传递过来的参数（要改变的值）
 * 2、注意事项
 * 提交的是 mutation方法，而不是直接变更状态。
 * 不接受第3个参数，所以传多个参数的时候，把第二个写成对象传入
 * */

 export default {
    // 改变登录状态函数
    doLogin ({commit},value) {
      console.log(value)
      // 代替请求后台
      setTimeout(() => {
        commit('login',value)
        this.$router.push({path: '/login'})
      }, 1000)
    }
  }
  