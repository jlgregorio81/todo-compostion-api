import { createWebHistory, createRouter } from "vue-router";
import App from '../App.vue';
import Todo from '../components/Todo/Todo.vue';
import About from '../components/About.vue' ;
import Home from '../components/Home.vue';

const routes = [
    {
        path : '/app',
        name : 'App',
        component : App
    },
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/todo',
        name : 'Todo',
        component : Todo
    },
    {
        path : '/about',
        name : 'About',
        component : About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
