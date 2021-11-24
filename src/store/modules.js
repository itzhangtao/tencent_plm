

/**
 * 1、属性说明
 * @namespaced  设置为true 的时候，模块的就是私有区域，（因为Vue 默认mutations,actions,getters 是全局区域）
 * 2、注意事项
 * 使用actions,想获取全局的mutations方法  参数上添加{root: true}属性 通过this['some/nested/module/foo']()来获取值  '/'
 * 可以拿到全局的state, 就是第3个参数rootState
 * (详情说明，请参考：https://vuex.vuejs.org/zh/guide/modules.html)
 * */
 export default {
    // system模块
    system: {
      namespaced: true,
      state: {
        loginFromValue: {}
      }
    },
    
  }
  