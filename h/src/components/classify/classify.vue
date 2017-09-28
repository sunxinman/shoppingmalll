<template>
    <div class="classify">
        <header class="header">
            <input type="text" placeholder="请输入您要购买的商品" />
        </header>
        <div class="mainbox">
            <ul class="navbar">
                <router-link tag="li" v-for="(item,index) in classify" :key="index" :to="{name:'classify',params:{'index':index}}">{{item.title}}</router-link>
            </ul>
            <div class="rightview">
                <div class="items" v-for="(v,i) in itemslist" :key="i" @click="gotonext">
                    <img src="../../img/jia2@2x.png" />
                    <span>{{v.cate_name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bus from "../../js/bus";
export default {
    data() {
        return {
            classify: null,
            itemslist: null
        }
    },
    created() {
        this.$http.post("/mobile/Category/categorySon").then((res) => {
            this.classify = [...res.data.moduleList];
            this.itemslist = this.classify[0].items;
        })
    },
    watch: {
        "$route": function(newval, oldval) {
            this.itemslist = this.classify[newval.params.index].items;
        }
    },
    methods: {
        gotonext() {
            setTimeout(()=>{bus.$emit("msga", this.itemslist)},0)
            this.$router.push({ name: "categoryclass" })
        }
    }
}
</script>

<style scoped lang="scss">
.router-link-active {
    background: orangered !important;
    color: #fff !important;
}

.classify {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 50px;
    display: flex;
    background: #fff;
}

.header input {
    outline: none;
    border-radius: 5px;
    height: 35px;
    background: rgba(0, 0, 0, .1);
    border: none;
    width: 85%;
    margin: 10px auto;
}

.mainbox {
    flex: 1;
    background: #f0eced;
    display: flex;
}

.navbar {
    width: 30%;
    height: 100%;
    overflow: auto;
    li {
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        color: #333;
        background: #fff;
    }
}

.rightview {
    width: 70%;
    height: 100%;
    background: #fff;
    padding: 8px;
}

.items {
    width: 1.2rem;
    height: 2rem;
    float: left;
    margin-right: 10px;
    img {
        width: 1.2rem;
        height: 1.2rem;
        margin-bottom: -32px;
    }
    span {
        font-size: 16px;
        color: #333;
        display: inline-block;
        width: 100%;
        margin-top: 10px;
        text-align: center;
    }
}
</style>
