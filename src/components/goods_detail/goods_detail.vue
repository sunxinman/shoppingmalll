<template>
    <div class="goods_detail">
        <header class="header">
            <span>返回</span>
            <ul>
                <li>商品</li>
                <li>详情</li>
            </ul>
            <router-link tag="span" class="icon iconfont icon-shouye" :to="{path:'/entry/home'}"></router-link tag="span">
        </header>
        <main class="main">
            <div class="scroll-wrap">
                <div class="goods_img">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div tag="div" class="swiper-slide">
                                <img src="../../img/banner1.png">
                            </div>
                            <div tag="div" class="swiper-slide">
                                <img src="../../img/home.png">
                            </div>
                            <div tag="div" class="swiper-slide">
                                <img src="../../img/video.png">
                            </div>
                            <div tag="div" class="swiper-slide">
                                <img src="../../img/video717.png">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="goods_info">
                    <p>Herdem/希尔庄园 土耳其进口特级初榨橄榄油500ML*2礼盒装 送礼佳品</p>
                    <div>
                        <ul>
                            <li>
                                <span>￥148.00</span>
                                <span>￥196.00</span>
                            </li>
                            <li>
                                <span>(运费:￥0.00)</span>
                            </li>
                        </ul>
                        <em>追溯查询</em>
                    </div>
                </div>
                <div class="dianpu">
                    <div>
                        <h2>希尔庄园旗舰店</h2>
                        <p>店主: XRZY1405024</p>
                    </div>
                    <b>进入店铺</b>
                </div>
            </div>
        </main>
        <footer class="footer">
            <span class="icon iconfont icon-kefu">客服</span>
            <span class="icon iconfont icon-gouwuche">购物车
                <i>{{this.$store.state.num}}</i>
            </span>
            <span>加入购物车</span>
            <span>立即购买</span>
        </footer>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
    data() {
        return {

        }
    },
    methods: {
        autoplay() {
            new Swiper(".swiper-container", {
                autoplay: 1000,
                loop: true,
                pagination: '.swiper-pagination'
            })
        },
    },
    mounted() {
        this.autoplay();
    }
}
</script>

<style lang="scss" scoped>
@import url(../../css/swiper.min.css);
.goods_detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 60px;
    font-size: 16px;
    line-height: 60px;
    border-bottom: 1px solid #333;
    background: #fff;
    span:nth-of-type(1) {
        float: left;
        margin-left: 15px;
    }
    ul {
        display: inline-block;
        float: left;
        margin-left: 100px;
        li {
            display: inline-block;
            height: 54px;
            margin-left: 4px;
            border-bottom: 2px solid #444;
            &:nth-last-of-type(1) {
                border: none;
            }
        }
    }
    span:nth-of-type(2) {
        float: right;
        margin-right: 15px;
        font-size: 30px;
    }
}

.main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
}

.goods_img {
    img {
        width: 100%;
        height: auto;
    }
}

.goods_info {
    height: 115px;
    &::after {
        clear: both;
    }
    p {
        font-size: 14px;
        line-height: 28px;
        padding: 0 10px;
    }
    ul {
        float: left;
        padding-left: 10px;
        margin-top: -30px;
    }
    li {
        height: 20px;
    }
    span {
        font-size: 14px;
        color: #333;
        &:nth-of-type(2){
            text-decoration:line-through;
            color:#ccc;
        }
    }
    em {
        font-style: normal;
        font-size: 14px;
        float: right;
        width: 150px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 8px;
        color: #fff;
        margin-top: 10px;
        margin-right: 15px;
        background: #4f99f2;
    }
}

.dianpu {
    div {
        float: left;
        padding-left:15px;
    }
    margin-top:10px;
    h2 {
        font-size: 16px;
    }
    p {
        font-size: 14px;
    }
    b {
        font-size: 14px;
        float: right;
        margin-right: 15px;
        width: 120px;
        height: 30px;
        border:1px solid #333;
        text-align: center;
        line-height: 30px;
        border-radius: 8px;
        margin-top:5px;
    }
}

.footer {
    height: 60px;
    display: flex;
    font-size: 16px;
    span {
        text-align: center;
        &:nth-of-type(1),
        &:nth-of-type(2) {
            padding-top: 10px;
            width: 18%;
            font-size: 14px;
            &::before {
                font-size: 20px;
                display: block;
            }
        }
        &:nth-of-type(2) {
            position: relative;
        }
        &:nth-last-of-type(1),
        &:nth-last-of-type(2) {
            width: 32%;
            line-height: 60px;
            color: #fff;
            background: #fe8282;
        }
        &:nth-last-of-type(1) {
            background: #fb4142;
        }
    }
    i {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        color: #fff;
        font-style: normal;
        font-size: 14px;
        text-align: center;
        line-height: 20px;
        top: 5px;
        right: 10px;
    }
}
</style>

