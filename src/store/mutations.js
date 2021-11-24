
/**
 * 1、参数说明
 * @state   定义好的变量（要修改的变量名，通过.XXX来获取）
 * @value   传递过来的参数（要改变的值）
 * 2、注意事项
 * 不接受第3个参数，所以传多个参数的时候，把第二个写成对象传入
 * */

 export default {
    //系统登陆
    login(state,loginFromValue){
      state.loginFromValue = loginFromValue;
    },
    //切换项目形态 列表/卡片
    changeProjectTab(state,type){
      state.type = type;
    }
  }
  