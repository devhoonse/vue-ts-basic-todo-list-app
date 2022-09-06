<template>
  <div id="app">
    <v-app id="inspire">
      <v-card min-width="400" max-width="800" class="mx-auto">
        <v-system-bar color="indigo">
          <v-spacer />
          <v-icon>mdi-wifi</v-icon>
          <v-icon>mdi-signal_cellular_off</v-icon>
          <v-icon>mdi-battery_full</v-icon>
          <span>12:30</span>
        </v-system-bar>
        <v-toolbar color="indigo" dark>
          <v-app-bar-nav-icon />
          <v-toolbar-title>Todo List</v-toolbar-title>
        </v-toolbar>
        <!--    <h1>{{ title }}</h1>-->
        <!--    <TitleLabel :title.sync="title" />-->
        <TodoList />
      </v-card>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/TodoList";
import TitleLabel from "@/components/TitleLabel";

@Component({
  components: {
    TodoList,
    TitleLabel,
  },
})
export default class App extends Vue {
  private title = "";
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
