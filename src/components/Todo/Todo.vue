<template>
  <div class="todo-app">
    <h2>Manage your "to-do list"</h2>
    <input style="width: 320px"
      type="text"
      name=""
      id=""
      v-model="todo.name"
      @keyup.enter="insert(todo)"
    />
    <select name="status" v-model="todo.status">
      <option value="todo">To do</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
    <button @click="insert(todo)">Inserir</button>

    <div class="todo-list" v-for="item in todoList" :key="item.name">
      <div class="todo-item">
        <div :class="item.status == 'todo' ? 'todo' : item.status == 'doing' ? 'doing' : 'done'">
          <p> {{ item.name }} </p>
        </div>
        <div class="todo-command">
          <select v-model="item.status" >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div class="todo-command"><button @click="remove(item)">Delete</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { UseTodo } from "./UseTodo.js";

export default {
  name: "Todo",
  setup() {
    const { todo, todoList, insert, getCurrentIndex, remove, setStatus } =
      UseTodo();
    return { todo, todoList, insert, getCurrentIndex, remove, setStatus };
  },
  methods: {},
};
</script>

<style scoped>
div.todo-app {
  background-color: lightgoldenrodyellow;
  width: 480px;
  margin: 0 auto;
  border: solid darkblue thin;
  border-radius: 5px;
  box-shadow: 2px 2px 2px gray;
}
div > * {
  margin: 3px;
}
p {
  text-align: left;
}

div.todo-list {
  display: inline-flex;
  flex-direction: row;
  justify-content: left;
  
}

.todo-item {
  width: 460px;
  display: flex;
  flex-direction: row;
  background-color: lightgreen;
  border-radius: 5px;
}


.todo {
  flex: 4;
  color: darkblue;
  justify-items: left;
}

.doing {
  color: green;
  flex: 4;
}

.done {
  color: red;
  text-decoration: line-through;
  flex: 4;
}
</style>