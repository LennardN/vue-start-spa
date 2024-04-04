import {createApp, VueElemen} from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import router from './routes'
import $pages from './data'

const app = createApp(App)
app.use(router)

app.config.globalProperties.$pages = $pages

app.mount('#app')