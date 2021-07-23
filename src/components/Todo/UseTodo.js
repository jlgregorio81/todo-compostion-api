import { reactive, ref } from 'vue'

export function UseTodo() {

    const todo = reactive({
        name: '', status: 'todo'
    })

    const todoList = ref([])

    function insert(todo) {
        let newTodo = JSON.parse(JSON.stringify(todo))
        todoList.value.push(newTodo)
        todo.name = ''
    }

    function getCurrentIndex(todo) {
        let index = todoList.value.findIndex( (item) => {
            return item.name === todo.name;
        });
        return index
    }

    function remove(todo) {
        let index = getCurrentIndex(todo);
        todoList.value.splice(index, 1);
    }

    function setStatus(todo, status){
        todo.status = status
        console.log('status: ', status)
    }

    return {
        todo, todoList, insert, getCurrentIndex, remove, setStatus
    }

}

