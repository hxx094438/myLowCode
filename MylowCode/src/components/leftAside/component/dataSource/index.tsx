/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-08-04 22:55:56
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-07 16:04:26
 */
import { defineComponent, PropType} from 'vue';
import { DataBoard } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'dataSource',
  label: '数据源',
  icon: DataBoard,
  order: 3,
  props: {
   
  },
 setup() {
    return () => (
      <>
        <div>数据源</div>
      </>
    );
  },

})