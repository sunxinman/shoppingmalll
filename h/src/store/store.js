import Vue from "vue"
import Vuex from "vuex"
import ls from "../js/storage"
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        num: 0,
        carlist: {

        }
    },
    mutations: {
        setStore(state, {item,selected}) {
            let cart = state.carlist;
            // items.goods_name
            // items.discount_price
            // items.obj_data
            // items.goods_id
            if (typeof item.goods_num == "number") {
                item.goods_num += 1;
            }
            let shop = cart[item.goods_id] = (cart[item.goods_id] || {});
            shop["goods_num"] = item.goods_num;
            shop["goods_name"] = item.goods_name || {};
            shop["goods_url"] = item.obj_data || {};
            shop["goods_price"] = item.discount_price || {};
            shop["selected"]=selected;
            state.carlist = { ...cart };
            return state.carlist;
            //ls.setItem("goodslist", JSON.stringify(state.carlist))
        },
        selected_item(state,goods_id){
            Object.keys(state.carlist).forEach((ele,index)=>{
                if(ele==goods_id){
                    state.carlist[ele].selected=!state.carlist[ele].selected
                }
            });
        },
        chageselect_all(state){
            Object.keys(state.carlist).forEach((ele,index)=>{
                state.carlist[ele].selected=true
            })
        }
    },
    actions: {

    },
    getters:{
        get_select:function(state){
            let count=0;
            Object.values(state.carlist).forEach((ele,index)=>{
                if(ele.selected){
                    count+=ele.goods_num*ele.goods_price;
                }
            });
            //console.log(count)
            return count.toFixed(2);
        }
    }
})
export default store;