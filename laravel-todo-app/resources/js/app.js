console.log('app.js is called');
require('./bootstrap');
window.Vue = require('vue').default;
const VueRouter = require('vue-router').default;
import { createApp } from 'vue'
import App from './App.vue';
import VueAxios from 'vue-axios';
// import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const apps = createApp(App)
apps.use(VueRouter);
apps.use(VueAxios, axios);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});