import Vue from 'vue'
import VueRouter from 'vue-router'
import SeferAra from '../views/SeferAra.vue'
import hataPage from '../components/hataPage.vue'
import KoltukSecimi from '../components/koltukSecimi.vue'
import YolcuBilgileri from '../components/YolcuBilgileri.vue'
import OdemeBilgileri from '../components/OdemeBilgileri.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: 'seferara',
        // component: Home
    },
    {
        path: '/seferara',
        name: 'seferara',
        component: SeferAra

    },
    {
        path: '/KoltukSecimi/:sefer_id?',
        name: 'koltuksecimi',
        component: KoltukSecimi

    },
    {
        path: '/yolcubilgileri',
        name: 'yolcubilgileri',
        component: YolcuBilgileri

    },
    {
        path: '/odemebilgileri',
        name: 'odemebilgileri',
        component: OdemeBilgileri

    },
    {
        path: "*",
        component: hataPage,
    },
    {
        path: '/about',
        name: 'About',

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash',
})

export default router