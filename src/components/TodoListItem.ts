import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { ITodo } from "@/components/TodoList";
import WithRender from "./TodoListItem.html";
import "./TodoListItem.css";

@WithRender
@Component({
  props: {
    index: Number,
  },
})
export default class TodoListItem extends Vue {
  @Prop(Object)
  private item!: ITodo;
  private isEdit = false;
  private task = "";
  private createdAt = "";

  private created() {
    setInterval(this.updateCreatedAt, 1000);
    this.updateCreatedAt();
  }

  private setEdit() {
    this.task = this.item.task;
    this.isEdit = true;
    this.$nextTick(() => {
      (this.$refs.inputEdit as HTMLInputElement).focus();
    });
  }

  private updateTask() {
    this.$emit("update", this.item.id, { task: this.task });
  }

  // get createdAt() {
  //   return this.$moment(this.item.createdAt).fromNow();
  // }
  private updateCreatedAt() {
    this.createdAt = this.$moment(this.item.createdAt).fromNow();
  }

  @Watch("item.isCompleted")
  private onChangeIsCompleted(newVal: boolean) {
    this.$emit("update", this.item.id, { isCompleted: newVal });
  }
}
