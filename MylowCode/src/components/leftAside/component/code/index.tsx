/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-08-07 15:49:44
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-11-13 21:10:42
 */

import { defineComponent, ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { Suitcase } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'BaseWidgets',
  label: '组件库',
  order: 2,
  icon: Suitcase,
  setup() {

    

    return () => (
      <>
        <div>哈哈数据啊快点</div>
      </>
    );
  },
});



