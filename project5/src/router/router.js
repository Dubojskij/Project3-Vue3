import { createRouter, createWebHashHistory } from "vue-router";
import Main from '@/pages/Main';
import PostIdPage from '@/pages/PostIdPage'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    }
]

 const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
 })


 export default router;