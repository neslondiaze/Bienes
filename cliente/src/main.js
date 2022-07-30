import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/_themer.scss'
import { popper } from '@popperjs/core'
import "bootstrap/dist/js/bootstrap.min";

createApp(App).use(router).mount('#app')
