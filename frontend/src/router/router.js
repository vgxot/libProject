import main from '@/pages/main.vue'
import books from '@/pages/books.vue'
import book from '@/pages/book.vue'
import news from '@/pages/news.vue'
import account from '@/pages/account.vue'
import test from '@/pages/test.vue'
import {createRouter, createWebHistory} from "vue-router";
import map from "@/pages/map.vue";
import statistics from "@/pages/statistics.vue";
import help from "@/pages/help.vue";
import auth from "@/pages/auth.vue";
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
      path: '/statistics',
      component: statistics
    },
    {
        path: '/map',
        component: map
    },
    {
        path: '/help',
        component: help
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
        path: '/auth',
        component: auth
    },
    // {
    //     path: '',
    //     component:
    // },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;