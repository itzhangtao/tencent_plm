/**
 * 1、参数说明
 * @state   指定义好的变量（要修改的变量名，通过.XXX来获取）
 * @getters   可以调用所有getters方法
 * */

// import state from "./state";

 export default {
    // 获取登陆状态（以方法形式调用）
    getLoginValue (state) {
        return state.loginFromValue;
    },
    //获取切换的项目卡片还是列表
    getProjectViewStatus (state) {
        return state.type;
    }
  }
  