import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import '@/assets/css/_styles.scss'
import 'animate.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBVsA_1q7s6M2Grt4317N6MxBm-Ap5dxhs'
  },
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
