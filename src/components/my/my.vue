<template>
    <div class="my">
        <header class="header">
            <span class="icon iconfont icon-shezhi"></span>
            <h2>我的717商城</h2>
        </header>
        <main class="main">
            <div class="scroll-wrap">
                <div class="persioninfo">
                    <img src="../../img/nav1.png">
                    <p>1234567890</p>
                </div>
                <router-link class="myshop" tag="div" :to="{path:'/myshop'}">
                    我的店铺
                </router-link>
                <div class="nav">
                    <router-link :to="{}" tag="div" class="nav-item">
                        <span class="icon iconfont icon-daifukuan"></span>待付款</router-link :to="{}" tag="div">
                    <router-link :to="{}" tag="div" class="nav-item">
                        <span class="icon iconfont icon-icon_daifahuo"></span>待发货</router-link :to="{}" tag="div">
                    <router-link :to="{}" tag="div" class="nav-item">
                        <span class="icon iconfont icon-daishouhuo"></span>待收货</router-link :to="{}" tag="div">
                    <router-link :to="{}" tag="div" class="nav-item">
                        <span class="icon iconfont icon-shouhou"></span>售后</router-link :to="{}" tag="div">
                    <router-link :to="{path:'/myorder'}" tag="div" class="nav-item">
                        <span class="icon iconfont icon-wodedingdan"></span>我的订单</router-link :to="{}" tag="div">
                </div>
                <ul class="navbar">
                    <router-link :to="{}" tag="li">我的社区</router-link>
                    <router-link :to="{}" tag="li">账户余额</router-link>
                    <router-link :to="{name:'address'}" tag="li">
                        <span class="icon iconfont icon-shouhuodizhi"></span>地址管理</router-link>
                </ul>
                <div class="hot">
                    <goods v-for="(item,index) in hotgoodslist" :key="index" :items="item"></goods>
                </div>
                <div class="gotobottom">
                    到底了奥!…
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import goods from "../goods/goods.vue"
export default {
    components: {
        goods
    },
    data() {
        return {
            hotgoodslist: []
        }
    },
    created() {
        this.$http.post("/mall/goods/recommendgoods", { params: { "key_code": 2 } }).then((res) => {
            this.hotgoodslist = [...res.data.success]
        })
    }
}
</script>

<style scoped lang="scss">
.my {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 110px;
    display: flex;
    background: #fff;
    line-height: 50px;
    span {
        font-size: 24px;
    }
    h2 {
        font-size: 16px;
        width: 100%;
        text-align: center;
    }
}

.main {
    overflow-y: auto;
    height: -webkit-calc(100%-110px);
    margin-bottom: 60px;
}

.persioninfo {
    height: 100px;
    text-align: center;
    padding-top: 10px;
    background: -webkit-gradient(linear, left top, left bottom, from(orange), to(orangered));
    img {
        width: 50px;
        height: 50px;
    }
    p {
        font-size: 16px;
    }
}

.myshop {
    font-size: 16px;
    line-height: 50px;
    color: orangered;
    text-align: center;
    background: #fff;
}

.nav {
    display: flex;
    font-size: 16px;
    margin-top: 10px;
    .nav-item {
        width: 20%;
        white-space: nowrap;
        text-align: center;
        height: 75px;
        background: #fff;
        padding-top: 15px;
        span {
            display: block;
            font-size: 24px;
        }
        &:nth-last-of-type(1) {
            border-left: 1px solid #333;
        }
    }
}

.navbar {
    margin-top: 20px;
    font-size: 16px;
    background: #fff;
    li {
        line-height: 40px;
        text-indent: 30px;
        border-bottom: 1px solid #444;
        &:nth-last-of-type(1) {
            border: none;
            position: relative;
            span {
                position: absolute;
                top: 2%;
                left: -30px;
                font-size: 20px;
            }
        }
    }
}

.hot {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 8px;
    margin-bottom: 15px;
    margin-top: 20px;
}

.gotobottom {
    font-size: 14px;
    height: 40px;
    background: orange;
    text-align: center;
    line-height: 40px;
}
</style>

