<template>
  <div class="home">
    <header class="header">
      <img src="../../img/homelo.gif">
      <router-link tag="input" type="text" placeholder="请输入您要购买的商品" :to="{path:'/search'}"></router-link>
      <router-link tag="p" :to="{path:'/myshop'}">
        <span class="icon iconfont icon-wodedingdan"></span>我的店铺</router-link>
    </header>
    <backtop class="back" ref="back" v-show="back" :wrap="wrap"></backtop>
    <main class="main" @scroll="loadmore && loadmore()" ref="main">
      <div class="main-wrap">
        <div class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <router-link tag="div" class="swiper-slide" :to="{}">
                <img src="../../img/banner1.png">
              </router-link>
              <router-link tag="div" class="swiper-slide" :to="{}">
                <img src="../../img/home.png">
              </router-link>
              <router-link tag="div" class="swiper-slide" :to="{}">
                <img src="../../img/video.png">
              </router-link>
              <router-link tag="div" class="swiper-slide" :to="{}">
                <img src="../../img/video717.png">
              </router-link>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <foodlist></foodlist>
        <div class="shoptrends">
          <h1>商城动态</h1>
          <div class="roll">
            <marquee direction="up" scrollamount="3">
              <router-link tag="p" :to="{}">誓要去，入刀山，浩气壮，过千关，愿与你，进一杯</router-link>
              <router-link tag="p" :to="{}">在晶莹的泪光中，又看见那肥胖的，青布棉袍，黑布马褂的背影</router-link>
            </marquee>
          </div>
        </div>
        <div class="day">
          <router-link class="dayday" :to="{}" tag="div">
            <h3>天天特惠</h3>
            <p>天天有惊喜</p>
            <span>更多</span>
          </router-link>
          <div class="daydaydetail">
            <router-link tag="div" :to="{}" class="leftimg">
              <img src="../../img/home1.png" alt="">
            </router-link>
            <router-link tag="div" :to="{}" class="rightimg">
              <router-link tag="p" :to="{}"><img src="../../img/gaodian.png"></router-link>
              <router-link tag="p" :to="{}"><img src="../../img/ruwei.png"></router-link>
            </router-link>
          </div>
        </div>
        <div class="hometaste">
          <router-link class="hometitle" tag="div" :to="{}">
            <h2>家乡味道</h2>
            <span>更多</span>
          </router-link>
          <div class="foodlist">
            <goods :showcar="showcar" @addcarsuccess="addsucess" v-for="(item,index) in getGoodsChannel" :key="index" :items="item" :idx="index"></goods>
          </div>
        </div>
        <div class="tips">{{info}}</div>
      </div>
      <addshopsuccess class="mark" v-show="showcar">
        <p slot="addshopsuccess">添加购物车成功</p>
      </addshopsuccess>
    </main>
  </div>
</template>

<script>
import Swiper from "swiper"
import foodlist from "../foodlist/foodlist.vue"
import backtop from "../backtop/backtop.vue"
import goods from "../goods/goods.vue"
import addshopsuccess from "../mark/mark"
export default {
  name: 'home',
  data() {
    return {
      getGoodsChannel: [],
      isfinish: true,
      info: "加载更多……",
      channel_id: 2,
      back: false,
      wrap: "",
      showcar: false
    }
  },
  created() {
    this.$http.post("/mall/index/getGoodsChannel", { params: { "channel_id": this.channel_id } })
      .then((res) => {
        this.getGoodsChannel = res.data.responstext;
        //console.log(this.getGoodsChannel)
      })
      .catch((error) => { })
  },
  mounted() {
    this.autoplay();
  },
  components: {
    foodlist,
    backtop,
    goods,
    addshopsuccess
  },
  methods: {
    addsucess(data) {
      this.showcar = data;
      setTimeout(() => { this.showcar = false }, 1000)
    },
    autoplay() {
      new Swiper(".swiper-container", {
        autoplay: 1000,
        loop: true,
        pagination: '.swiper-pagination'
      })
    },
    loadmore() {
      let main = this.$refs.main;
      let main_con = main.querySelector(".main-wrap");
      let main_con_height = main_con.offsetHeight;
      let main_height = main.offsetHeight;
      let main_scroll = main.scrollTop;
      this.wrap = main;
      if (main_scroll - main_height >= 20) {
        this.back = true;
      } else {
        this.back = false;
      }
      if (main_con_height - main_height - main_scroll < 40) {
        this.isfinish = false;
        setTimeout(() => {
          this.channel_id++;
          this.$http.post("/mall/index/getGoodsChannel", { data: { "channel_id": this.channel_id } })
            .then((res) => {
              this.getGoodsChannel = [...this.getGoodsChannel, ...res.data.responstext];
              this.isfinish = true;
            })
            .catch((error) => { })
        }, 1500)
        if (this.channel_id >= 5) {
          this.isfinish = false;
          this.info = "我是有底线的……";
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import url(../../css/swiper.min.css);

.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 130px;
  display: flex;
  padding: 10px 15px;
}

.header img {
  width: .9rem;
  height: .4rem;
  margin-right: .15rem;
}

.header input {
  outline: none;
  border-radius: 5px;
  height: 35px;
  background: rgba(0, 0, 0, .1);
  border: none;
  width: 4.5rem;
  margin-right: 6px;
  padding-left: 6px;
}

.header p {
  font-size: 14px;
  flex: 1;
  white-space: nowrap;
  color: orangered;
  text-align: center;
}

.header span {
  display: block;
}

.banner img {
  width: 100%;
  height: auto;
}

.main {
  overflow-y: scroll;
  margin-bottom: 60px;
}

.shoptrends {
  display: flex;
  padding: 2px 8px;
  h1 {
    font-size: 20px;
    color: orange;
    width: 1rem;
    height: 1rem;
    margin-right: .3rem;
  }
  .roll {
    flex: 1;
  }
  marquee {
    border: 1px solid #444444;
    border-radius: 5px;
    height: 1rem;
    overflow: hidden;
  }
  p {
    font-size: 16px;
    line-height: 28px;
    height: 1rem;
  }
}

.dayday {
  height: 0.6rem;
  line-height: .6rem;
  margin-top: 6px;
  font-size: 16px;
  background: #fff;
  display: flex;
  color: orange;
  h3 {
    font-size: 16px;
    font-weight: normal;
    padding-left: 8px;
    padding-right: 10px;
  }
  p {
    font-size: 14px;
    padding-right: 3rem;
  }
  span {
    color: #333;
  }
}

.daydaydetail {
  display: flex;
  padding-top: 10px;
  .leftimg {
    flex-shrink: 1;
    img {
      width: 3rem;
      height: 4rem;
    }
    margin-right:8px;
  }
  .rightimg {
    width: 3.2rem;
    img {
      width: 3.2rem;
      height: 1.88rem;
    }
  }
}

.hometitle {
  position: relative;
  background: #fff;
  height: 60px;
  line-height: 60px;
  h2 {
    font-weight: normal;
    font-size: 24px;
    color: orange;
    text-align: center;
  }
  span {
    font-size: 14px;
    color: #333;
    position: absolute;
    right: 16px;
    top: 2px;
  }
}

.foodlist {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 8px;
  margin-bottom: 15px;
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
  }
  i {
    position: absolute;
    right: 5px;
    font-size: 24px;
  }
}

.back {
  position: fixed;
  z-index: 70;
  right: 8px;
  bottom: 65px;
}

.tips {
  font-size: 14px;
  text-align: center;
  line-height: 30px;
}

.mark {
  background: rgba(0, 0, 0, .7);
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  width: 80%;
  color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}
</style>
