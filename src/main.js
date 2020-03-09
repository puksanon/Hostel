import Vue            from 'vue'
import App            from './App.vue'
import vuetify        from './plugins/vuetify';
import router         from "./router";
import VueSweetalert2 from 'vue-sweetalert2';
import VueAxios       from 'vue-axios'
import Axios          from 'axios'
import { store }      from './store'
const fb = require ('./firebase/firebaseInit')

Vue.use(VueAxios, Axios)
Vue.use(VueSweetalert2);
Vue.use(router)

Vue.config.productionTip = false

let app
 // eslint-disable-next-line
fb.auth.onAuthStateChanged(user => {
   if (!app) {
     app =new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
      }).$mount('#app')
    }
})
