<template>
    <div class="shopcar">
        <header class="header">
            <h2>购物车</h2>
            <span>编辑</span>
        </header>
        <div class="main">
            <cart v-for="(val,index) in cartlist" :key="index" :cart="val" :i="index" @highlight="high"></cart>
        </div>
        <div class="footer">
            <p>
                <i :class='{"bgsa":initbgsa,"bgss":initbgss}' @click="changechecked"></i>全选
            </p>
            <p>合计:
                <span class="price">￥{{get_select}}</span>
            </p>
            <p>结算</p>
        </div>
    </div>
</template>
<script>
import ls from "../../js/storage"
import cart from "./item_car"
import { mapGetters } from "vuex"
export default {
    data() {
        return {
            cartlist: null,
            allprice: 0,
            initbgsa: true,
            initbgss: false,
        }
    },
    components: {
        cart
    },
    created() {
        this.cartlist = this.$store.state.carlist;
        console.log(this.cartlist)
    },
    computed: {
        ...mapGetters(["get_select"])
    },
    mounted() {
        //console.log(this.$store.state.carlist)
        //this.cartlist = this.$store.state.carlist;
        // console.log(this.$store.state.carlist)
        //this.cartlist = JSON.parse(ls.getItem("goodslist"));
        //console.log(this.$store.state)
    },
    methods: {
        changechecked() {
            this.initbgsa = !this.initbgsa;
            this.initbgss = !this.initbgss;
            if(this.initbgss){
                Object.values(this.$store.state.carlist).forEach((ele,index)=> {
                    ele.selected=true;
                });
            }
             //this.$store.getters.get_select
        },
        goto() {
            console.log(Object.values(this.cartlist))
            //this.allprice+=;
        },
        high() {
            //this.changecheck();
        }
    },
    updated() {
        // Object.keys(this.$store.state.carlist).forEach((val, index) => {
        //     if (this.$store.state.carlist[val].selected) {
        //         this.$store.commit("chageselect_all")
        //     }
        // })
    }
}
</script>

<style scoped lang="scss">
.footer .bgss {
    display: inline-block;
    position: absolute;
    background: #ccc;
    left: .2rem;
    top: 10px;
    width: .4rem;
    height: .4rem;
    background: url("../../img/8.png") no-repeat;
    border: none;
    background-size: .4rem;
}

.bgsa {
    display: inline-block;
    position: absolute;
    background: #ccc;
    left: .2rem;
    top: 1rem;
    width: .48rem;
    height: .48rem;
    border-radius: 50%;
    border: 1px solid #000;
}

.shopcar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #333;
    h2 {
        font-size: 16px;
        text-align: center;
        line-height: 40px;
    }
    span {
        font-size: 14px;
        float: right;
        margin-top: -29px;
        margin-right: 10px;
    }
}

.main {
    flex: 1;
    overflow-y: auto;
}

.footer {
    width: 100%;
    height: 40px;
    background: #fff;
    position: fixed;
    bottom: 70px;
    font-size: 16px;
    color: #666;
    line-height: 40px;
    p {
        float: left;
        &:nth-of-type(1) {
            height: 40px;
            width: 3rem;
            text-indent: 50px;
        }
        &:nth-of-type(1)>.bgsa {
            display: inline-block;
            background: #ccc;
            top: 10px;
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            border: 1px solid #000;
        }
        &:nth-last-of-type(1) {
            float: right;
            width: 1.2rem;
            background: red;
            color: #fff;
            text-align: center;
        }
    }
}

.price {
    color: red;
}
</style>
