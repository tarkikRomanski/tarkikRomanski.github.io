import Vue from 'vue';
import VueRouter from 'vue-router';

// custom components
import Posts from './components/Posts';
import Post from './components/Post';
//

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts
        },
        {
            path: '/:slug',
            name: 'post',
            component: Post,
            props: true
        },
    ],


});

export default router;