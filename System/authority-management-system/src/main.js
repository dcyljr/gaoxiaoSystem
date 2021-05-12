// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import Axios from 'axios'
import './public/public.css'
import i18n from './i18n'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */

Vue.use(ElementUI);
Vue.use(api)
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
});
