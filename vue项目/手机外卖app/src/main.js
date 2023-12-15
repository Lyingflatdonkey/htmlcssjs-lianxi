
import {createPinia} from "pinia" //引入pinia

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
const pinia = createPinia()//创建pinia实例

const app = createApp(App)
app.use(pinia)//配置pinia
app.mount('#app')
