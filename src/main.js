import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-free/js/all"
import "normalize.css"
import "./assets/css/rtl.css"
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

