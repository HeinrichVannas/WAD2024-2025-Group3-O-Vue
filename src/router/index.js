import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from '../views/PostsView.vue'
import Signup from '../views/SignupView.vue'

const routes =
    [{
        path: '/',
        name: 'posts',
        component: Posts
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router