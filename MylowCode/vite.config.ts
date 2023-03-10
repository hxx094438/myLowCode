/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-26 23:30:47
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-07 15:57:36
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import WindiCSS from 'vite-plugin-windicss'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx';

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    DefineOptions()
  ],
  resolve: {
    alias: {
      "@": resolve('src'),
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase', 
    },
    preprocessorOptions: {
      scss: {
        charset: false,
      },
      less: {
        charset: false,
      },
    },

    postcss: {
      plugins: [
        
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
})
