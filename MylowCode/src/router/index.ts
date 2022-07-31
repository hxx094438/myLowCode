/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-27 22:59:37
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-31 16:25:18
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: '可视化编辑页',
    component: () => import('@/view/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
