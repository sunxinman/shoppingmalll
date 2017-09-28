<template>
    <router-link tag="div" :to="{path:'/goods_detail'}" :key="idx">
        <img :src="'http://www.lb717.com'+items.obj_data" alt="">
        <p>{{items.goods_name}}</p>
        <span class="price">￥{{items.discount_price}}</span>
        <i class="icon iconfont icon-tianjiagouwuche" @click="addToCar"></i>
    </router-link>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: ["items","idx","showcar"],
    data(){
        return {
            
        }
    },
    methods: {
        addToCar(e) {
            e.stopPropagation();
            this.$http.post("/user/Cart/addCart", { params: { "key_code": 2, "goods_id":this.items.goods_id} })
                .then((res) => {
                    if(res.data.success==1){
                        this.$emit("addcarsuccess",!this.showcar);
                        this.$store.state.num++;
                        this.$store.commit("setStore",{'item':this.items,'selected':false})
                        console.log(this.$store.state)
                    }
                }).catch((error)=>{
                    throw new Error("error")
                })
        }
    },
    //computed:Object.assign({},mapState(["num"]))
}
</script>

<style lang="scss" scoped>
div {
    width: 3rem;
    height: 4.5rem;
    position: relative;
}

img {
    width: 3rem;
    height: 3rem;
}

p {
    font-size: 12px;
    color: #333;
    height: 48px;
    overflow: hidden;
}

span {
    font-size: 16px;
    position: absolute;
    color:red;
}

i {
    position: absolute;
    right: 5px;
    font-size: 24px;
    color:red;
}
.price {
    color: red;
}
</style>

