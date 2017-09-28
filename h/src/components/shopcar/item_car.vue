<template>
    <ul class="all_goods">
        <li class="good_items">
            <i :class='{"bgsa":initbgsa,"bgss":initbgss}' @click="changecheck"></i>
            <img :src="'http://www.lb717.com'+cart.goods_url" />
            <p>{{cart.goods_name}}</p>
            <p>
                <span>*{{this.$store.state.carlist[i].goods_num}}</span>
                <span class='price'>￥{{cart.goods_price}}</span>
            </p>
            <p>
                <span @click="minu">-</span>
                <span>{{this.$store.state.carlist[i].goods_num}}</span>
                <span @click="add">+</span>
            </p>
        </li>
    </ul>
</template>
<script>
export default {
    props: ["cart", "i"],
    mounted() {
        //console.log(this.cart)
    },
    data() {
        return {
            initbgsa: true,
            initbgss: false,
            count: 1,
            f: null
        }
    },
    methods: {
        changecheck() {
            this.initbgsa = !this.initbgsa;
            this.initbgss = !this.initbgss;
            this.f = !this.$store.state.carlist[this.i].selected;
        },
        add() {
            this.cart.goods_num++;
            this.$store.state.num++;
        },
        minu() {
            this.cart.goods_num--;
            this.$store.state.num--;
        }
    },
    watch: {
        "f": function(n) {
            if (n) {
                this.$store.commit("selected_item",this.i)
            }
        }
    },
    updated() {//如果购物车内只有一件商品,点击选中，全选也高亮
        if (Object.keys(this.$store.state.carlist).length == 1) {
            this.$emit("highlight", true)
        }
    }
}
</script>
<style lang="scss" scoped>
.good_items {
    background: #fff;
    height: 135px;
    position: relative;
    margin-bottom: 8px;
    img {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: .5rem;
        left: 1rem;
    }
    p {
        font-size: 16px;
        position: absolute;
        top: .5rem;
        left: 2.8rem;
        &:nth-of-type(1) {
            width: 3.2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        &:nth-of-type(2) {
            span {
                display: block;
            }
            top:1.3rem;
        }
        &:nth-of-type(3) {
            border: 1px solid #333;
            span {
                display: inline-block;
                width: 25px;
                height: 25px;
                text-align: center;
                line-height: 25px;
            }
            span:nth-of-type(2) {
                border-left: 1px solid #333;
                border-right: 1px solid #333;
                width: 30px;
            }
            top:1.5rem;
            left:4.5rem;
        }
    }
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

.bgss {
    display: inline-block;
    position: absolute;
    background: #ccc;
    left: .2rem;
    top: 1rem;
    width: .48rem;
    height: .48rem;
    background: url("../../img/8.png") no-repeat;
    border: none;
    background-size: .48rem;
}

.price {
    color: red;
}
</style>


