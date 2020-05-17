import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld'
import Login from './components/Login'
import Signup from './components/signUp'
import flight from './components/flight'
import accommodation from './components/accommodation'
import rent from './components/rent'
import payment from './components/payment'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: HelloWorld,
            name: 'HelloWorld'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/signUp',
            component: Signup,
            name: 'signUp'
        },
        {
            path: '/flight',
            component: flight,
            name: 'flight'
        },

        {
            path: '/accommodation',
            component: accommodation,
            name: 'accommodation'
        },
        {
            path: '/rent',
            component: rent,
            name: 'rent'
        },
        {
            path: '/payment',
            component: payment,
            name: 'payment'
        }
    ]
})