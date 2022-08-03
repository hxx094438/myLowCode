/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-28 23:42:37
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-03 22:00:54
 */

import {
  RefreshLeft,
  Position,
  Delete,
  Download,
  DocumentCopy
} from '@element-plus/icons-vue';
import { shallowRef } from 'vue'

export const actionsList = () => {
  
  return [
   
    {
      title: '出码',
      icon: Download,
      onClick: () => {
        console.log('出码',this)
      }
    },
    {
      title: '复制',
      icon: DocumentCopy,
      onClick: () => {
        console.log('出码',this)
      }
    },
    {
      title: '撤销',
      icon: RefreshLeft,
      onClick: () => {
        console.log('撤销',this)
      }
    },
    {
      title: '清空',
      icon: Delete,
      onClick: () => {
        console.log('清空',this)
      }
    },
    {
      title: '预览',
      icon: Position,
      onClick: () => {
        console.log('预览',this)
      }
    },
  ].map( action => {
    return {
      ...action,
      // 解决warn 
      // https://stackoverflow.com/questions/65716637/vue3-performance-warning-using-ref
      icon: shallowRef(action.icon)
    }
  });
};
