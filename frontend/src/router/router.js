import main from '@/pages/main.vue'
import books from '@/pages/books.vue'
import book from '@/pages/book.vue'
import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path: '/',
        component: main
    },
    {
        path: '/books',
        component: books
    },
    {
        path: '/books/:id',
        component: book
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;