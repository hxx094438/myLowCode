import { defineConfig } from 'vite-plugin-windicss';
import colors from 'windicss/colors';
import typography from 'windicss/plugin/typography';
import formsPlugin from 'windicss/plugin/forms'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  darkMode: 'class',
  plugins: [typography(),formsPlugin],
  //  https://cn.windicss.org/guide/extractions.html 
  //  拼接 变量 样式需要配置白名单，否则样式不生效
  safelist: [
    range(3).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
    range(20).map(i => `w-1/${i}`), // w-1/1 to w-1/20
    range(10).map(i => `h-1/${i}`), // h-1/1 to h-1/10
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
});
