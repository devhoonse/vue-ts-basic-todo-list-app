import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TodoListItem from "@/components/TodoListItem";
import WithRender from "./TodoList.html";
// import './TodoList.css';

export interface ITodoItem {
  completed: boolean;
  task: string;
  createdAt: number;
}

@WithRender
@Component({
  components: {
    TodoListItem,
  },
})
export default class TodoList extends Vue {
  private task = "";
  private todoItems: Array<ITodoItem> = [];

  private addItem() {
    if (!this.task.trim()) {
      alert("할 일을 입력해주세요!");
      return;
    }

    this.todoItems.push({
      completed: false,
      task: this.task,
      createdAt: new Date().getTime(),
    });

    this.clearTask();
  }

  private removeItem(index: number) {
    this.todoItems.splice(index, 1);
  }

  private clearTask() {
    this.task = "";
  }

  @Watch("todoItems", { deep: true })
  private onChangeTodoList() {
    localStorage.setItem("TodoList", JSON.stringify(this.todoItems));
  }

  private created() {
    this.todoItems = JSON.parse(localStorage.TodoList);
  }
}
