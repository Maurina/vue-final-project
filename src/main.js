import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

Vue.directive('hightlight', {
  bind (el, binding, vnode) {
    el.style.color = 'gold'
  }
})
Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
