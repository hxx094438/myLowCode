/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-26 23:30:47
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-31 19:22:04
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router/index';
import { setupElementPlus } from '@/plugin/element-plus';
import 'normalize.css';
import "virtual:windi.css";

const app = createApp(App)

setupElementPlus(app);

setupRouter(app);

app.mount('#app')
