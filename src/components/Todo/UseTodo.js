import { computed, reactive, watch } from 'vue'
import todos from "../../store/todos.json"

export function UseTodo() {

    //..define a rective array
    const todo = reactive({
        name: '', status: 'todo'
    })

    const todoList = reactive(todos.content)

    const countTodo = computed(() => {
        let total = 0
        todoList.forEach(element => {
            if(element.status === 'todo'){
                total++
            }
        });
        return parseInt(total)
    })

    const countDoing = computed(() => {
        let total = 0
        todoList.forEach(element => {
            if(element.status === 'doing'){
                total++
            }
        });
        return parseInt(total)
    })

    const countDone = computed(() => {
        let total = 0
        todoList.forEach(element => {
            if(element.status === 'done'){
                total++
            }
        });
        return parseInt(total)
    })

    const progressMeter = computed (() => {
        let total = countTodo.value + countDoing.value + countDone.value
        return parseInt((countDone.value / total) * 100)
    })


    //..a watcher 
    watch([countTodo, countDoing, countDone, progressMeter], () => {
        return countTodo, countDoing, countDone, progressMeter
    })

    //..inserting a new todo in the list
    function insert(todo) {
        let newTodo = JSON.parse(JSON.stringify(todo))
        todoList.push(newTodo)
        todo.name = ''
    }

    //..get the current inde of todo in list
    function getCurrentIndex(todo) {
        let index = todoList.findIndex( (item) => {
            return item.name === todo.name;
        });
        return index
    }

    //..removing a todo
    function remove(todo) {
        let index = getCurrentIndex(todo);
        todoList.splice(index, 1);
    }

    //..set the status os the todo
    function setStatus(todo, status){
        todo.status = status
        console.log('status: ', status)
    }


    //..return the elements to integrate in .vue file
    return {
        todo, todoList, insert, getCurrentIndex, remove, setStatus, 
        countTodo, countDoing, countDone, progressMeter
    }

}

