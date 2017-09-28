import Vue from 'vue'
import App from './App'
import router from './router'
import "./js/setfontsize"
import bus from "./js/bus"
import store from "./store/store"
import setDocumentTitle from "./js/utils"
import axios from "axios"
import "./mock/mock.js"
import ls from "./js/storage"
Vue.config.productionTip = false
Vue.prototype.$http=axios

router.beforeEach((to, from, next) => {
  typeof to.meta.pagetitle !== undefined && setDocumentTitle(to.meta.pagetitle)
  next();
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
