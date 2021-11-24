<template>
    <div id="login" class="loginContainer">
        <!-- <div class="loginHeader">
            <span>项目管理系统</span>
        </div> -->
        <div class="loginMainWrapper">
            <div class="loginWrapper">
                <div class="loginBoxWrapper">
                    <a-form-model :model="loginFrom" @submit.native.prevent style="width: 100%">
                        <a-form-model-item style="text-align: center">
                            <h1>欢迎登录</h1>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="loginFrom.username" placeholder="账号" class="inputBorder">
                                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="loginFrom.password" type="password" placeholder="密码" class="inputBorder">
                                <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <div class="rememberMeWrapper">
                                <a-checkbox-group v-model="loginFrom.resource">
                                    <a-checkbox value="true" name="type">记住密码</a-checkbox>
                                </a-checkbox-group>
                                <a href="">忘记密码</a>
                            </div>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a @click="doLogin(loginFrom)" style="width: 100%;line-height:30px;" class="ant-btn ant-btn-primary inputBorder">立即登录</a>
                            还没有账号?
                            <a href="" class="ant-btn ant-btn-link">立即注册</a>
                        </a-form-model-item>
                        <a-divider>使用合作账号登陆</a-divider>
                        <a-form-model-item style="text-align: center">
                            <a-space size="large">
                                <a-icon type="wechat" style="font-size: 2em;cursor: pointer;color:#04BE02"/>
                                <a-icon type="qq" style="font-size: 2em;cursor: pointer;color:#2b92e4;"/>
                            </a-space>
                        </a-form-model-item>
                    </a-form-model>
                </div>
            </div>
            <div class="loginFooter">
                © china shenzhen tencent 版权所有. 
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                loginFrom: {
                    username: '',
                    password: '',
                },
            };
        },
        computed: {
            // 一般放 state he getter 
            // 数组里面写的是变量名 （也可以写对象，键值，也可以接收的是函数）
            ...mapState(['loginFromValue']),
            // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
            ...mapGetters([
                'getLoginValue',
            ]),
        },

        methods: {
            // 对象就是函数
            ...mapMutations([
                'login', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
            ]),
            ...mapActions([
                'doLogin'
            ]),
      
            // // 切换登录状态
            // doLogin () {
            //     let value = this.loginFrom;
            //     this.doLogin(value);
            // },
        },

    }
</script>

<style scoped>
    .loginContainer{
        width: 100%;
        position: relative;
        /* background: url(https://img1.baidu.com/it/u=564468332,1185985646&fm=26&fmt=auto&gp=0.jpg); */
        background-attachment: fixed;
        background-repeat: no-repeat !important;
        background-size: cover;
        background-position: center;
        padding-top: 98px;
        min-height: 100%;
    }
    .ant-input{
        border-radius: 55px !important;
    }
    .loginHeader{
        width: 100%;
        height: 64px;
        background-color: #ffffff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 15px rgba(0,0,0,.2);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        padding: 10px;
    }
    .loginHeader span{
        font-size: 25px;
        font-weight: 700;
    }
    .loginMainWrapper{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }
    .loginWrapper{
        width: 90%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        height: 100%;
    }
    .loginFooter{
        width: 100%;
        min-height: 64px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        text-align: center;
        color: #ffffff;
        margin-top: 40px;
    }
    .siteSummary ul{
        list-style: none;
        padding: 0;
    }
    .siteSummary ul li{
        margin-top: 10px;
        list-style: none;
    }
    @media screen and (min-width: 1200px){
        .loginTipsWrapper{
            padding: 20px 30px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            min-height: 100%;
        }
        .loginBoxWrapper{
            background-color: #ffffff;
            padding: 20px;
            width: 400px;
            height: 100%;
            border-radius: 5px;
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1200px){
        .loginTipsWrapper{
            padding: 20px 30px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            height: 100%;
        }
        .loginBoxWrapper{
            background-color: #ffffff;
            padding: 20px;
            width: 400px;
            height: 100%;
            border-radius: 5px;
        }
    }
    @media screen and (max-width: 768px){
        .loginTipsWrapper{
            display: none;
        }
        .loginBoxWrapper{
            background-color: #ffffff;
            padding: 20px;
            width: 100%;
            border-radius: 5px;
        }
    }
    .rememberMeWrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
    .siteSummaryTitle{
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;
    }
    .siteSummary{
        margin-top: 25px;
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 300;
    }
    .inputBorder{
        border-radius: 15px;
    }
</style>


