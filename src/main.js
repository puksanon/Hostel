import Vue            from 'vue'
import App            from './App.vue'
import vuetify        from './plugins/vuetify';
import router         from "./router";
import VueSweetalert2 from 'vue-sweetalert2';
import VueAxios       from 'vue-axios'
import Axios          from 'axios'
import store          from "./store";


Vue.use(VueAxios, Axios)
Vue.use(VueSweetalert2);
Vue.use(router)

Vue.config.productionTip = false
// import { auth } from './firebase/firebaseInit'

// let app
// auth.onAuthStateChanged(() => {
//   if (!app) {
//app = 
    new Vue({
        store,
        router,
        vuetify,
        render: h => h(App)
      }).$mount('#app')
//     }
// })
