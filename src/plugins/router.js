import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import store from '../store/store'


Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'page1',
        component: Page1
    },
    {
        path: '/page2',
        name: 'page2',
        component: Page2
    },
]

const router = new Router({
    mode: 'history',
    routes: routes,
    base: process.env.VUE_APP_ROOT_BASE
})

router.beforeEach((to, from, next) => {
    store.commit('alert/setAlert', { action: false, message: null, detail: null });
    next();
}
)

export default router


