import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import New from '../components/New.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/consociatecup/',
            component: Home,
        },
        {
            path: '/new',
            component: New,
        }
    ]
})

export default router