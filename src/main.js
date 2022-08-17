import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import store from './store'

import './components/globalComponent'

//引用elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './permission.js'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
