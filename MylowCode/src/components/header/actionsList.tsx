/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-28 23:42:37
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-31 23:25:18
 */

import {
  RefreshLeft,
  Position,
  Delete,
  Download,
} from '@element-plus/icons-vue';

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
  ];
};
