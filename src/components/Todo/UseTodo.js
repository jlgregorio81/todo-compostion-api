import { computed, reactive, ref, watch } from 'vue'

export function UseTodo() {

    //..define a rective array
    const todo = reactive({
        name: '', status: 'todo'
    })

    //..define a list
    //const todoList = reactive({value : [
        //{name : 'Estudar Vue Js', status : 'todo'}
   // ]})

    const todoList = ref([
        {name : 'Estudar HTML', status : 'done'},
        {name : 'Estudar CSS', status : 'doing'},
        {name : 'Estudar Javascript', status : 'todo'},
        {name : 'Estudar Vue Js', status : 'doing'},
        {name : 'Verificar E-mail', status : 'todo'},
    ])

    const countTodo = computed(() => {
        let total = 0
        todoList.value.forEach(element => {
            if(element.status === 'todo'){
                total++
            }
        });
        return parseInt(total)
    })

    const countDoing = computed(() => {
        let total = 0
        todoList.value.forEach(element => {
            if(element.status === 'doing'){
                total++
            }
        });
        return parseInt(total)
    })

    const countDone = computed(() => {
        let total = 0
        todoList.value.forEach(element => {
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
        todoList.value.push(newTodo)
        todo.name = ''
    }

    //..get the current inde of todo in list
    function getCurrentIndex(todo) {
        let index = todoList.value.findIndex( (item) => {
            return item.name === todo.name;
        });
        return index
    }

    //..removing a todo
    function remove(todo) {
        let index = getCurrentIndex(todo);
        todoList.value.splice(index, 1);
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

