import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// @ts-ignore
const RemoteButton = defineAsyncComponent(() => import('remote_app/Button'))
app.component('RemoteButton', RemoteButton)
