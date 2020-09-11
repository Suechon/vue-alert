import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/Page1'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'page1',
            component: Page1
        },
    ],
})

