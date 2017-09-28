<template>
    <div class="login">
        <header class="header">
            <router-link tag="span" :to="{path:'/entry/home'}">返回</router-link>
            <h3>会员登录</h3>
            <router-link tag="span" :to="{}">注册</router-link>
        </header>
        <div class="main">
            <div class="msginfo">
                <!-- <form @submit.prevent> -->
                    <p><input type="text" placeholder="请输入您的手机号" required autofocus="autofocus" v-model="username"></p>
                    <p><input type="text" placeholder="请输入您的密码" required></p>
                    <p>
                        <span @click="login">立即登陆</span>
                    </p>
                <!-- </form> -->
                <router-link tag="p" :to="{}">忘记密码?</router-link>
            </div>
        </div>
        <login-mark class="mark" v-show="login_success">
            <p slot="logins">登陆成功</p>
        </login-mark>
    </div>
</template>
<script>
import ls from "../../js/storage";
import loginMark from "../mark/mark"
export default {
    components: {
        loginMark
    },
    created() {
        if (ls.getItem("personInfo")) {
            this.username = JSON.parse(ls.getItem("personInfo")).username
        }
    },
    data() {
        return {
            "username": "",
            "token": "52969B1A8B8581FC",
            "login_success": false
        }
    },
    methods: {
        login() {
            if(this.username){
                if (!ls.getItem("personInfo")) {
                    ls.setItem("personInfo", JSON.stringify({ 'username': this.username, 'token': this.token }))
                    this.loginSuccess()
                } else {
                    this.loginSuccess()
                }
            }
        },
        loginSuccess() {
            this.login_success = true;
            setTimeout(() => {
                this.login_success = false;
                this.$router.replace({ path: '/entry/home' })
            }, 500)
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 40px;
    background: #fff;
    position: relative;
    h3 {
        font-size: 18px;
        line-height: 40px;
        font-weight: normal;
        text-align: center;
    }
    span {
        position: absolute;
        font-size: 14px;
        color: #333;
        top: 10px;
        &:nth-of-type(1) {
            left: 10px;
        }
        &:nth-of-type(2) {
            color: red;
            right: 10px;
        }
    }
}

.main {
    flex: 1;
}

.msginfo {
    text-align: center;
    position: relative;
    input {
        border: 1px solid #eee;
        border-radius: 8px;
        height: 40px;
        display: inline-block;
        outline: none;
        font-size: 18px;
    }
    span {
        border-radius: 10px;
        background: red;
        color: #fff;
        font-size: 20px;
        width: 100%;
        line-height: 40px;
        display: inline-block;
        margin-left: 1.6rem;
    }
    p {
        height: 50px;
        &:nth-last-of-type(1) {
            position: absolute;
            left: 3.5rem;
            text-decoration: underline;
            font-size: 14px;
            color: #555;
            margin-top: 20px;
        }
        &:nth-of-type(3) {
            width: 50%;
        }
    }
}

.mark {
    background: rgba(0, 0, 0, .7);
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    width: 80%;
    color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
</style>


