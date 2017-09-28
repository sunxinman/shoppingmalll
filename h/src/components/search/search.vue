<template>
  <div class="search">
    <header class="header">
      <input type="text" placeholder="请输入您要购买的商品" v-model.trim="inf" />
      <span @click="search">搜索</span>
    </header>
    <div class="main">
      <nav>
        <span>最近搜索</span>
        <img src="../../img/remo.png" @click="removeItem">
      </nav>
      <p v-if="sh">暂无搜索记录…</p>
      <ul class="everyones" v-else>
        <li v-for="(item,index) in arr" :key="index">{{item}}</li>
      </ul>
      <h4>大家都在搜</h4>
      <ul class="everyones">
        <li>三星</li>
        <li>华为</li>
        <li>小米</li>
        <li>乐视</li>
        <li>苹果</li>
      </ul>
    </div>
  </div>
</template>
<script>
import ls from "../../js/storage";
export default {
  data() {
    return {
      inf: "",
      arr: [],
      sh: true
    }
  },
  created() {
    if (ls.getItem("search_list")) {
      this.sh = false;
      this.arr = [...JSON.parse(ls.getItem("search_list"))];
    }
  },
  methods: {
    search() {
      if (this.inf) {
        if (ls.getItem("search_list")) {
          this.sh = false;
          this.arr = [...JSON.parse(ls.getItem("search_list"))]
        }
        if (this.arr.indexOf(this.inf) == -1) {
          this.arr.push(this.inf);
          ls.setItem("search_list", JSON.stringify(this.arr));
        }
      }
    },
    removeItem() {
      this.sh = true;
      ls.removeItem("search_list");
    }
  }
}
</script>
<style scoped lang="scss">
.search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 50px;
  display: flex;
  background: #fff;
  span {
    line-height: 50px;
    font-size: 14px;
    padding-right: 15px;
  }
}

.header input {
  outline: none;
  border-radius: 5px;
  height: 35px;
  background: rgba(0, 0, 0, .1);
  border: none;
  width: 80%;
  margin: 10px auto;
}

.main {
  flex: 1;
  margin-top: 10px;
  background: #fff;
  nav {
    height: 50px;
  }
  span {
    font-size: 16px;
    line-height: 50px;
    float: left;
  }
  img {
    float: right;
    width: 20px;
    height: 20px;
    margin-top: 15px;
  }
  p {
    font-size: 14px;
    text-indent: 40px;
    padding-top: 10px;
  }
  h4 {
    font-size: 16px;
    font-weight: normal;
    text-indent: 30px;
    padding-top: 100px;
  }
}

.everyones {
  display: flex;
  font-size: 16px;
  padding: 10px;
  flex-wrap: wrap;
  li {
    width: 25%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #222;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>