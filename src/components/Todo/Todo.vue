<template>
  <div class="container">
    <div class="row animate__animated animate__bounceInUp">
      <div class="col alert alert-warning">
        <h2>A fazer: {{ countTodo }}</h2>
      </div>
      <div class="col">
        <div class="col alert alert-primary">
          <h2>Fazendo: {{ countDoing }}</h2>
        </div>
      </div>
      <div class="col">
        <div class="col alert alert-success">
          <h2>Feito: {{ countDone }}</h2>
        </div>
      </div>
      <div class="col">
        <div class="col alert alert-secondary">
          <h2>Total: {{ countTodo + countDoing + countDone }}</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="progress" style="height: 12px">
          <div
            class="progress-bar"
            role="progressbar"
            :style="`width : ${ progressMeter }%`"
          >{{ progressMeter }}%</div>
        </div>
      </div>
    </div>
    <hr>

    <div class="row">
      <div class="col-md-9 text-start">
        <label class="form-label" for="todo">Nome/Descrição</label>
        <input
          type="text"
          class="form-control"
          v-model="todo.name"
          id="todo"
          @keyup.enter="insert(todo)"
        />
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

    <transition-group tag="div" name="todoitem">
      <!-- enter-active-class="animate__animated animate__fadeInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOutUp animate__faster" -->

      <div
        class="row striped"
        :class="
          item.status === 'todo'
            ? 'alert-warning'
            : item.status === 'doing'
            ? 'alert-primary'
            : 'alert-success'
        "
        v-for="item in todoList"
        :key="item.name"
      >
        <div class="col-md-9">
          <p
            class="text-start"
            :class="item.status === 'done' ? 'item-done' : ''"
          >
            {{ item.name }}
          </p>
        </div>
        <div class="col-md-2">
          <select class="form-select" v-model="item.status">
            <option value="todo">A fazer</option>
            <option value="doing">Fazendo</option>
            <option value="done">Feito</option>
          </select>
        </div>
        <div class="col-md-1">
          <button
            @click="itemToRemove = item"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modal"
          >
            Delete
          </button>
        </div>
      </div>
    </transition-group>

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
      statusClass: "",
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
        //console.log('Item: ', this.itemToRemove);
      }
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
/* ------ animations ---------- */
.todoitem-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.todoitem-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.todoitem-enter-active {
  transition: all 0.3s ease;
}

.todoitem-leave-from {
  opacity: 1;
  transform: scale(100%);
}

.todoitem-leave-to {
  opacity: 0;
  transform: scale(5%);
  animation-delay: 0.5s;
}

.todoitem-leave-active {
  transition: 0.5s;
  /* position: absolute; */
}

.todoitem-move {
  transition: all 0.3s ease;
}

/* --------------------------------------- */

.item-done {
  text-decoration: line-through;
}

div.striped {
  border-bottom: dotted lightgray thin;
  padding: 5px;
}

div.striped:hover {
  /* background-color: rgb(245, 245, 250); */
  /* outline: lightblue thin solid;  */
  opacity: 0.7;
  cursor: pointer;
}

.container {
  width: 75%;
}
</style>