import {createRouter, createWebHistory} from "vue-router";
import main from '@/views/main.vue'
import books from '@/views/books.vue'
import book from '@/views/book.vue'
import news from '@/views/news.vue'
import account from '@/views/account.vue'
import map from "@/views/map.vue";
import statistics from "@/views/statistics.vue";
import help from "@/views/help.vue";
import auth from "@/views/auth.vue";
import architecture from "@/views/architecture.vue";
import users from "@/views/users.vue";
import user from "@/views/user.vue";
import art from "@/views/art.vue";
import floors from "@/views/floors.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
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
        {
            path: '/architecture',
            component: architecture
        },
        {
            path: '/users',
            component: users
        },
        {
            path: '/users/:id',
            name: 'user',
            component: user
        },
        {
            path: '/art',
            component: art
        },
        {
            path: '/floors',
            component: floors
        },
        //{
        //    path: '',
        //    component:
        //},
        //{
        //    path: '',
        //    component:
        //},
        //{
        //    path: '',
        //    component:
        //},
    ]
})
export default router