import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld'
import Login from './components/Login'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:HelloWorld,
            name:'HelloWorld'
        },
        {
            path:'/login',
            component:Login,
            name:'Login'
        }
    ]
})