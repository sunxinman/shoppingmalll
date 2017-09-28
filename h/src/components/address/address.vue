<template>
    <div class="address">
        <header class="header">
            <router-link tag="span" :to="{path:'/entry/my'}">返回</router-link>
            <h2>收货地址</h2>
            <router-link tag="span" class="icon iconfont icon-shouye" :to="{name:'home'}"></router-link>
        </header>
        <div class="main">
            <div class="main-wrap">
                <p class="addres" v-if="false">新增加地址</p>
                <div class="writeinfo">
                    <p class="username"><input type="text" placeholder="收货人姓名" name="username"></p>
                    <p class="usermoble"><input type="number" placeholder="手机号" name="usermobile"></p>
                    <nav class="personaddress">
                        <div class="city">
                            <span class="opt"></span>
                            <select name="" id="">
                                <option value="">北京</option>
                            </select>
                        </div>
                        <div class="city">
                            <span class="opt"></span>
                            <select name="" id="">
                                <option value="">北京</option>
                            </select>
                        </div>
                    </nav>
                    <section class="area">
                        <div class="city">
                            <span class="opt"></span>
                            <select name="" id="">
                                <option value="">昌平区</option>
                            </select>
                        </div>
                    </section>
                    <section class="street">
                        <p><input type="text" placeholder="详细地址"></p>
                    </section>
                    <div class="set_default_address">
                        <span class="icon iconfont icon-"></span>
                        <input type="hidden" name="" value="1"> 设为默认地址
                    </div>
                    <div class="keep">
                        <p>保存</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "address",
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
input{
    border:none;
    text-indent:20px;
    border-radius:5px;
    font-size:16px;
}
.city{
    height:40px;
    width:auto;
    background:#fff;
    position: relative;
    margin-top:10px;
    border-radius:5px;
    select{
        position:absolute;
        border:none;
        width:90%;
        height:100%;
        top:0;
        left:0;
        outline:none;
        z-index:8;
        opacity:0;
    }
    .opt{
        position:absolute;
        width:12px;
        height:9px;
        right:10px;
        top:18px;
        z-index:10;
        background:url(../../img/arrow.png) no-repeat;
        background-size:contain; 
    }
}
.address {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 40px;
    display: flex;
    line-height: 40px;
    background: #fff;
    justify-content: space-between;
    h2 {
        font-weight: normal;
        font-size: 16px;
        text-align: center;
    }
    span:nth-of-type(1) {
        font-size: 16px;
        padding-left: 15px;
    }
    span:nth-last-of-type(1) {
        font-size: 24px;
        padding-right: 20px;
    }
}

.addres {
    font-size: 20px;
    background: red;
    color: #fff;
    height: 50px;
    width: 50%;
    border-radius: 10px;
    margin-left: 25%;
    text-align: center;
    line-height: 50px;
}

.main {
    flex: 1;
    overflow-y: auto;
}

.main-wrap {
    padding-top: 20px;
}

.writeinfo {}

.username,
.usermoble {
    text-align: center;
    input {
        outline: none;
        width: 80%;
        height: 40px;
    }
}

.personaddress {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    .city {
        width: 45%;
    }
}

.area {
   padding:0 40px;
}

.street {
    text-align:center;
    input {
        outline: none;
        width: 80%;
        height: 40px;
    }
}
.set_default_address{
    font-size:16px;
    text-indent:60px;
    line-height:40px;
}
.keep{
    padding:0 40px;
    p{
        font-size:16px;
        color: #fff;
        height:40px;
        line-height:40px;
        background: red;
        border-radius:8px; 
        text-align:center;
        margin: 0 50px;
    }
}
</style>

