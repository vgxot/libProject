import main from '@/pages/main.vue'
import books from '@/pages/books.vue'
import book from '@/pages/book.vue'
import news from '@/pages/news.vue'
import account from '@/pages/account.vue'
import test from '@/pages/test.vue'
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
        name: 'book',
        component: book
    },
    {
        path: '/news',
        component: news
    },
    {
        path: '/account',
        component: account
    },
    {
        path: '/test',
        component: test
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;