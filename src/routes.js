import Vue from 'vue';
import VueRouter from 'vue-router';

// custom components
import Main from './components/Main';
import Post from './components/posts/Post';
import PostsPage from './components/pages/PostsPage';
import PortfolioPage from './components/pages/PortfolioPage';
import Portfolio from './components/portfolio/Portfolio';
//

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/post/:slug',
            name: 'post',
            component: Post,
            props: true
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsPage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '/portfolio/:slug',
            name: 'portfolio.one',
            component: Portfolio,
            props: true
        }
    ],


});

export default router;