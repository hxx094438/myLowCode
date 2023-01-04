import { path } from 'path';
/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-08-03 22:59:20
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-07 15:31:11
 */

import { DefineComponent } from 'vue';

const modules = import.meta.globEager('./*/index.(tsx|vue)') as Record<string, any> ;
console.log(modules)
const components: Record<string, DefineComponent> = {};

for(const path in modules) {
  const comp = modules[path].default;
  // components
  components[comp.name] = comp
}

export default components;
