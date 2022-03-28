import { createApp } from 'vue'
import routers from './router/index'
import App from './App.vue'
import './styles/main.scss'

const app = createApp(App)
app.use(routers)
app.mount('#app')
