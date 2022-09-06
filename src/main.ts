import Vue from "vue";
import App from "./App.vue";
import "@/plugins/AxiosPlugin";
import "@/plugins/MomentPlugin";
import "@/plugins/LodashPlugin";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
