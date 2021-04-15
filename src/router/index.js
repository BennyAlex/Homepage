import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kontakt from '../views/Kontakt.vue'
import Projekte from '../views/Projekte.vue'

// import { MDCRipple } from '@material/ripple'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/kontakt',
        component: Kontakt
    },
    {
        path: '/projekte',
        component: Projekte
    },
    // not found
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
