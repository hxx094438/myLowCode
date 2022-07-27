/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-26 23:30:47
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-27 23:39:53
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from '@/router/index';

const app = createApp(App)
setupRouter(app);

app.mount('#app')
