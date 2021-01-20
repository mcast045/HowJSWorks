import Vue from 'vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faGlobe)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
