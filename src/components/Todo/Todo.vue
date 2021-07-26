<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 text-start">
        <label class="form-label" for="todo">Nome/Descrição</label>
        <input type="text" class="form-control" v-model="todo.name" id="todo" />
      </div>
      <div class="col-md-2 text-start">
        <label class="form-label" for="status">Status</label>
        <select id="status" v-model="todo.status" class="form-select">
          <option value="todo">A fazer</option>
          <option value="doing">Fazendo</option>
          <option value="done">Feito</option>
        </select>
      </div>
      <div class="col-md-1 align-self-end text-start">
        <button
          id="btn-insert"
          type="button"
          class="btn btn-primary"
          @click="insert(todo)"
        >
          Inserir
        </button>
      </div>
    </div>
    <hr />
    <div class="row striped" v-for="item in todoList" :key="item.name">
      <div class="col-md-9" >
        <p class="text-start text-primary">{{ item.name }}</p>
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model="item.status">
          <option value="todo">A fazer</option>
          <option value="doing">Fazendo</option>
          <option value="done">Feito</option>
        </select>
      </div>
      <div class="col-md-1">
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>

    <teleport to="body">
      <Popup
        title="Confirme"
        msg="Tem certeza que deseja excluir?"
        @closePopup="deleteItem"
      />
    </teleport>
  </div>
</template>

<script>
import { UseTodo } from "./UseTodo.js";
import Popup from "../Popup.vue";

export default {
  name: "Todo",
  data() {
    return {
      showPopup: false,
      itemToRemove: "", //to delete
    };
  },
  components: {
    Popup,
  },
  setup() {
    return UseTodo();
  },
  methods: {
    deleteItem(event) {
      if (event) {
        this.remove(this.itemToRemove);
      }
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
div.striped {
  border-bottom: dotted lightgray thin;
  padding: 5px;
}

div.striped:hover {
  background-color: rgb(245, 245, 250);
  cursor: pointer;
}

.container {
  width: 75%;
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