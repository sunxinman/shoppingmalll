<template>
    <div class="food">
        <ul>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
            <router-link :to="{}" tag="li">
                <img src="../../img/nav1.png" alt="">
                牛奶乳品
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .food{
        font-size:16px;
        ul{
           display:flex;
           padding:0 8px;
           justify-content:space-between;
           flex-wrap:wrap;
        }
        li{
            color:#666;
            text-align:center;
            width:1.4rem;
            margin-bottom:4px;
        }
        img{
            width:1.1rem;
            height:1.1rem;
            margin-bottom:2px;
        }
    }
</style>


