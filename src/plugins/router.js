import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/Page1'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/1' },
        {
            path: '/1',
            name: 'page1',
            component: Page1
        },
    ],
})

