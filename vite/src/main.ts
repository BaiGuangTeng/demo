import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'
// import WujieVue from "wujie-vue3";

const app = createApp(App)

app.use(router)
app.mount('#app')

// app.use(WujieVue);

microApp.start()
