import Vue from "vue";
import moment, { Moment } from "moment";

function MomentPlugin(vue: typeof Vue): void {
  moment.locale("ko");
  Vue.prototype.$moment = moment;
}

declare module "vue/types/vue" {
  export interface Vue {
    $moment(format?: any): Moment;
  }
}

Vue.use(MomentPlugin);
