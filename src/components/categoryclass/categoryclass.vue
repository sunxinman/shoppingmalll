<template>
    <div class="categoryclass">
        <div class="header">
            <router-link tag="span" :to="{name:'classify',params:{'index':0}}">返回</router-link>
            <h3>搜索你要购买的商品</h3>
        </div>
        <div class="main">
            <div class="main_wrap">
                <ul class="nav" @click="tab">
                    <li class="triangle">综合</li>
                    <li>销量</li>
                    <li>价格</li>
                </ul>
                <nav class="navbar">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide item" v-for="(v,i) in navlist" :key="i">
                                {{v.cate_name}}
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="food">
                    <!-- <goods></goods> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import goods from "../goods/goods.vue";
import bus from "../../js/bus";
export default {
    name: "categoryclass",
    data() {
        return {
            navlist: null
        }
    },
    components: {
        goods
    },
    watch: {
        "$route": function(newval, oldval) {

        }
    },
    mounted() {
        this.autoscroll()
    },
    methods: {
        autoscroll() {
            new Swiper(".swiper-container", {
                slidesPerView: 4
            })
        },
        tab(event) {
            // let arr = Array.from(event.target.children);
            // arr.forEach((val, index) => {
            //     val.addEventListener("click", () => {
            //        val.classList.toggle("triangle");
            //     })
            // })
        }
    },
    created() {
        bus.$on("msga", (data) => {
            this.navlist = [...data];
        })
    }
}
</script>
<style lang="scss" scoped>
@import url(../../css/swiper.min.css);
.router-link-active {
    color: orange !important;
}

.categoryclass {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 60px;
    font-size: 16px;
    line-height: 60px;
    background: #fff;
    display:flex;
    span{
        font-size:14px;
        white-space:nowrap;
    }
    h3 {
        width:100%;
        text-align: center;
        font-weight: normal;
    }
}

.main {
    flex: 1;
    overflow-y: scroll;
}

.nav {
    height: 40px;
    margin-top: 5px;
    font-size: 14px;
    line-height: 40px;
    display: flex;
    width: 100%;
    background: #fff;
    padding: 0 10px;
    justify-content: space-between;
    li {
        position: relative;
        display: block;
    }
}

.triangle {
    color: orange;
    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom-color: orange;
        left: 50%;
        top: 50%;
        margin-left: -10px;
    }
}

.navbar {
    height: 35px;
    background: #fff;
    margin-top: 5px;
    font-size: 14px;
    line-height: 35px;
}

.item {
    width: 25%;
    text-align: center;
}
</style>


