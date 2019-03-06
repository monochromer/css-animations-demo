import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import routesConfig from './routesConfig'
import './styles/base.scss'

Vue.config.productionTip = false
Vue.use(Router)

new Vue({
  router: new Router(routesConfig),
  render: h => h(App),
}).$mount('#app')
