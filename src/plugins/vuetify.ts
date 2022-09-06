import Vue from "vue";
import Vuetify, { UserVuetifyPreset } from "vuetify";
import colors from "vuetify/es5/util/colors";

import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import "@/sass/main.scss";

const opts: UserVuetifyPreset = {
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.green.base,
      },
      dark: {
        primary: colors.blue.lighten1,
      },
    },
  },
};
Vue.use(Vuetify);

export default new Vuetify(opts);
