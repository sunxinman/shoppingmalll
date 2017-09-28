import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import classify from '../components/classify/classify.vue'
import community from '../components/community/community.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import my from '../components/my/my.vue'
import search from '../components/search/search.vue'
import myshop from '../components/myshop/myshop.vue'
import entry from '../components/entry/entry.vue'
import login from '../components/login/login.vue'
import goods_detail from '../components/goods_detail/goods_detail.vue'
import categoryclass from '../components/categoryclass/categoryclass.vue'
import address from '../components/address/address.vue'
import myorder from '../components/myorder/myorder.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/entry/home"
    },
    {
      path: '/entry',
      name: 'entry',
      component: entry,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home,
          meta: {
            pagetitle: "717安全商城"
          }
        },
        {
          path: 'classify/:index?',
          name: 'classify',
          component: classify,
          meta: {
            pagetitle: "分类"
          }
        },
        {
          path: 'community',
          name: 'community',
          component: community,
          meta: {
            pagetitle: "社区"
          }
        },
        {
          path: 'shopcar',
          name: 'shopcar',
          component: shopcar,
          meta: {
            pagetitle: "购物车"
          }
        },
        {
          path: 'categoryclass/:id?',
          name: 'categoryclass',
          component: categoryclass,
          meta: {
            pagetitle: "分类详情"
          }
        },
        {
          path: 'my',
          name: 'my',
          component: my,
          meta: {
            pagetitle: "我的717商城"
          },
          beforeEnter: (to, from, next) => {
            window.sessionStorage.getItem('personInfo') ? next() : next({ path: '/login' })
            next()
          }
        }]
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        pagetitle: "搜索"
      }
    },
    {
      path: '/myshop',
      name: 'myshop',
      component: myshop,
      meta: {
        pagetitle: "我的店铺"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        pagetitle: "登陆"
      }
    },
    {
      path: '/goods_detail',
      name: 'goods_detail',
      component: goods_detail,
      meta: {
        pagetitle: "商品详情页面"
      }
    },
    {
      path: '/address',
      name: 'address',
      component: address,
      meta: {
        pagetitle: "收货地址"
      }
    },
    {
      path: '/myorder/:id?',
      name: 'myorder',
      component: myorder,
      meta: {
        pagetitle: "我的订单"
      }
    }
  ]
})
