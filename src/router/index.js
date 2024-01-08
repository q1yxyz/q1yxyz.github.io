import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/Home.vue';
import AleBeka from '@/components/AleBeka.vue';




const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/animu', name: 'AleBeka', component: AleBeka},


]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router