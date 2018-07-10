// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/public.css'
import Element from 'element-ui'
import cs from './plugin'
import mixin from './mixin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBoxOpen, faUser, faThList, faCog } from '@fortawesome/free-solid-svg-icons'
library.add(faBoxOpen, faUser, faThList, faCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Element, { size: 'small' })

// 加载模拟数据 
// 调用真实API时 注释掉此行即可 
import Mock from './mock/mockApi'

var myPlugin = {}
myPlugin.install = function (Vue, options) {
  Vue.prototype.$cs = cs
}

Vue.use(myPlugin)

// mixin
Vue.mixin(mixin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
