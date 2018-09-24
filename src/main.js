import Vue from 'vue'
import App from './App.vue'

import './styles/main.scss';

Vue.config.productionTip = false

import apolloProvider from './apollo';
import router from './routes';

new Vue({
  render: h => h(App),
  provide: apolloProvider.provide(),
    router
}).$mount('#app')
