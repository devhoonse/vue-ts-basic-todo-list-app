import { Vue, Component, PropSync } from "vue-property-decorator";
import WithRender from "./TitleLabel.html";

@WithRender
@Component({
  props: {
    title: String,
  },
})
export default class TitleLabel extends Vue {
  @PropSync("title", String)
  private titleSync!: string;
}
