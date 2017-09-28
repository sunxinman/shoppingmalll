<template>
    <div class="container">
        <router-view></router-view>
        <nav class="bottom">
            <ul class="nav">
                <router-link tag="li" :to="{path:'/entry/home'}">
                    <span class="icon iconfont icon-shouye">首页</span>
                </router-link>
                <router-link tag="li" :to="{path:'/entry/classify/0'}">
                    <span class="icon iconfont icon-fenlei">分类</span>
                </router-link>
                <router-link tag="li" :to="{path:'/entry/community'}">
                    <span class="icon iconfont icon-shequ">社区</span>
                </router-link>
                <router-link tag="li" :to="{path:'/entry/shopcar'}" class="allnum">
                    <span class="num">{{this.$store.state.num}}</span>
                    <span class="icon iconfont icon-gouwuche">购物车</span>
                </router-link>
                <router-link tag="li" :to="{path:'/entry/my'}">
                    <span class="icon iconfont icon-wode">我的</span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    height:100%;
    overflow-y:scroll
}
.bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.nav {
  display: flex;
  border-top: 1px solid #000000;
  padding-top: 5px;
  z-index: 40;
  background:#fff;
}

.nav li {
  width: 20%;
  text-align: center;
}

.nav li span::before {
  display: block;
  font-size: 18px;
  margin-bottom: -32px;
}

.router-link-active {
  color: red;
}

.nav li:nth-of-type(3) {
  background: red;
  height: 55px;
  width: 55px;
  padding: 3px;
  border-radius: 50%;
  color: #fff;
}
.allnum{
    position: relative;
    .num{
        position: absolute;
        width:20px;
        height:20px;
        border-radius:50%;
        right: 0;
        top:0;
        color:#fff;
        background:red;
        font-size:14px;
        line-height:20px;
        text-align:center;
    }
}
</style>


