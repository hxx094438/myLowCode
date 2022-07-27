/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-26 23:30:47
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-27 23:34:40
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve('src'),
    }
  },
})
