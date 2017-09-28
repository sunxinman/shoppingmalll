<template>
    <div class="myorder">
        <div class="header">
            <router-link tag="span" :to="{path:'/entry/my'}">返回</router-link>
            <h2>我的订单</h2>
            <router-link tag="span" class="icon iconfont icon-shouye" :to="{name:'home'}"></router-link>
        </div>
        <nav class="navbar">
            <router-link :to="{name:'myorder'}" tag="span" class="underline">全部</router-link>
            <router-link :to="{name:'myorder'}" tag="span">待付款</router-link>
            <router-link :to="{name:'myorder'}" tag="span">待发货</router-link>
            <router-link :to="{name:'myorder'}" tag="span">待收货</router-link>
            <router-link :to="{name:'myorder'}" tag="span">售后</router-link>
        </nav>
        <div class="main">
            <div class="scroller">
                <div class="show_myorder">
                    <p v-if="false">
                        您还没有相关的订单
                    </p>
                    <div v-else class="all_order">
                        <div>订单一</div>
                        <div>订单二</div>
                        <div>订单三</div>
                    </div>
                </div>
                <div class="hot_list">
                    <goods v-for="(item,index) in hotgoodslist" :key="index" :items="item"></goods>
                </div>
            </div>
        </div>
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
<style lang="scss" scoped>
.underline{
    color:orange;
    border-bottom:1px solid orange;
}
.myorder {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 40px;
    display: flex;
    line-height: 40px;
    background: #fff;
    justify-content: space-between;
    h2 {
        font-weight: normal;
        font-size: 16px;
        text-align: center;
    }
    span:nth-of-type(1) {
        font-size: 16px;
        padding-left: 15px;
    }
    span:nth-last-of-type(1) {
        font-size: 24px;
        padding-right: 20px;
    }
}

.main {
    flex: 1;
    overflow-y: auto;
}

.navbar {
    display: flex;
    height: 40px;
    margin-top: 2px;
    background: #fff;
    span {
        width: 20%;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }
}

.show_myorder {
    margin-top: 8px;
    background: #fff;
    p {
        text-align: center;
        font-size: 16px;
        padding-top: 10px;
    }
}

.all_order {
    font-size: 16px;
    line-height: 60px;
    padding-left: 20px;
}

.hot_list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 8px;
    margin-bottom: 15px;
    margin-top: 20px;
}
</style>


