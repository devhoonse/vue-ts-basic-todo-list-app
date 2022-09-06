import Vue from "vue";
import "babel-polyfill";

import App from "./App.vue";
import "@/plugins/AxiosPlugin";
import "@/plugins/MomentPlugin";
import "@/plugins/LodashPlugin";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount("#app");
