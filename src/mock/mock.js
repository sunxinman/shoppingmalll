import axios from "axios";
import MockAdapter  from "axios-mock-adapter";
import getGoodsChannel from "../service/getGoodsChannel.js";
import getClassify from "../service/getClassify.js";
import categoryclass from "../service/categoryclass.js";

let mock=new MockAdapter(axios);
//首页商品列表
mock.onPost("/mall/index/getGoodsChannel",{data:{"channel_id":2}}).reply(200,{
    responstext:getGoodsChannel.data.data
})
mock.onPost("/mall/index/getGoodsChannel",{data:{"channel_id":3}}).reply(200,{
    responstext:getGoodsChannel.data.data
})
mock.onPost("/mall/index/getGoodsChannel",{data:{"channel_id":4}}).reply(200,{
    responstext:getGoodsChannel.data.data
})
mock.onPost("/mall/index/getGoodsChannel",{data:{"channel_id":5}}).reply(200,{
    responstext:getGoodsChannel.data.data
})
//购物车
mock.onPost("/user/Cart/addCart",{params:{"key_code":2,"goods_id":4777}}).reply(200,{
    success:1
})
mock.onPost("/user/Cart/addCart",{params:{"key_code":2,"goods_id":4822}}).reply(200,{
    success:1
})
mock.onPost("/user/Cart/addCart",{params:{"key_code":2,"goods_id":4348}}).reply(200,{
    success:1
})
mock.onPost("/user/Cart/addCart",{params:{"key_code":2,"goods_id":4769}}).reply(200,{
    success:1
})
mock.onPost("/user/Cart/addCart",{params:{"key_code":2,"goods_id":4490}}).reply(200,{
    success:1
})
mock.onPost("/user/Cart/addCart",{params:{"key_code":2,"goods_id":4371}}).reply(200,{
    success:1
})
//热门推荐
mock.onPost("/mall/goods/recommendgoods",{params:{"key_code":2}}).reply(200,{
    success:getGoodsChannel.data.data
})
//分类  /mobile/Category/categorySon
mock.onPost("/mobile/Category/categorySon").reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,getClassify])
        },300)
    })
})
//分类进入详情 //mobile/category/categoryGoods
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":2}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":3}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":4}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":5}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":6}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":7}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":8}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})
mock.onPost("/mobile/category/categoryGoods",{params:{"key_code":2,"cateid":9}}).reply(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([200,categoryclass])
        },300)
    })
})