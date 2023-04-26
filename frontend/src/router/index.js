import notFound from "@/views/notFound.vue";
import services from "@/views/services.vue";
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
import test from "@/views/test.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: main,
            meta: {
                footer: true,
                whiteFooter: true
            }
        },
        {
            path: '/books',
            component: books,
            meta: {
                footer: false,
            }
        },
        {
            path: '/books/:id',
            name: 'book',
            component: book,
        },
        {
            path: '/statistics',
            component: statistics,
            meta: {
                footer: true
            }
        },
        {
            path: '/map',
            component: map,
            meta: {
                footer: true
            }
        },
        {
            path: '/help',
            component: help,
            meta: {
                footer: true
            }
        },
        {
            path: '/news',
            component: news
        },
        {
            path: '/account',
            component: account,
            meta: {
                footer: true
            }
        },
        {
            path: '/auth',
            component: auth,
            meta: {
                footer: true
            }
        },
        {
            path: '/architecture',
            component: architecture,
            meta: {
                footer: true,
                whiteFooter: true
            }
        },
        {
            path: '/art',
            component: art,
            meta: {
                footer: true,
                whiteFooter: true
            }
        },
        {
            path: '/services',
            component: services,
            meta: {
                footer: true,
                whiteFooter: true
            }
        },
        {
            path: '/users',
            component: users,
            meta: {
                transition: 'search'
            }
        },
        {
            path: '/users/:id',
            name: 'user',
            component: user,
            meta: {
                footer: true
            }
        },
        {
            path: '/floors',
            component: floors
        },
        {
            path: '/test',
            component: test
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: notFound,
            meta: {
                footer: true
            }
        },
        {
            path: '/news',
            component: news,
            meta: {
                footer: true
            }
        }
    ],
    scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({el: '#appheader', behavior: 'smooth' })
                    }, 200)
                })

            }
    }
})
export default router