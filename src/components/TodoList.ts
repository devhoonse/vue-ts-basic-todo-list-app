import { Vue, Component, Watch } from "vue-property-decorator";
import { AxiosResponse } from "axios";
import getConfig from "@/_config";
import TodoListItem from "@/components/TodoListItem";
import WithRender from "./TodoList.html";
// import './TodoList.css';

export interface ITodo {
  id: string;
  deletedAt: number | null; // Date().getTime()
  createdAt: number; // Date().getTime()
  isCompleted: boolean;
  task: string;
}

@WithRender
@Component({
  components: {
    TodoListItem,
  },
})
export default class TodoList extends Vue {
  private task = "";
  private todoItems: Array<ITodo> = [];
  private apiUrl = "";

  private created() {
    this.apiUrl = getConfig().apiUrl;
    this.loadData().then();
  }

  private async addItem() {
    if (!this.task.trim()) {
      alert("할 일을 입력해주세요!");
      return;
    }

    const data = {
      task: this.task,
    };

    try {
      const response = await this.$http.post(this.apiUrl + "/todo", data);
      if (response.data.result) {
        await this.loadData();
        this.clearTask();
      } else {
        throw new Error("(ERROR) Registration New Todo Item");
      }
    } catch (error) {
      console.error("(Registration) New Todo Item : ", error);
    }

    this.clearTask();
    await this.loadData();
  }

  private async removeItem(id: string) {
    const response = await this.$http.delete(this.apiUrl + `/todo/${id}`);
    if (response.data.result) {
      const removedIndex = this.$_.findIndex(this.todoItems, { id });
      this.removeItemLocally(removedIndex);
    }
    await this.loadData();
  }

  private async updateItem(id: string, updates: object) {
    const data = {
      id,
      updates,
    };
    await this.$http.patch(this.apiUrl + "/todo", data);
    await this.loadData();
  }

  private async loadData() {
    const response: AxiosResponse = await this.$http.get(
      this.apiUrl + "/todos"
    );
    this.todoItems = response.data.data.Items;
  }

  private removeItemLocally(index: number) {
    this.todoItems.splice(index, 1);
  }

  private clearTask() {
    this.task = "";
  }

  get todoItemList(): Array<ITodo> {
    return this.$_.sortBy(this.todoItems, ["createdAt"], ["desc"]);
  }

  @Watch("todoItems", { deep: true })
  private onChangeTodoList() {
    localStorage.setItem("TodoList", JSON.stringify(this.todoItems));
  }
}
