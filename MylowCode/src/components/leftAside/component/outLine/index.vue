<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-08-07 14:58:42
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-30 22:09:37
-->
<template>
  <div class="tree-container">
    <el-row class="flex items-center pl-10px pr-10px">
      <el-col :span="6">大纲</el-col>
      <el-col class="flex flex-row items-center" justify="" :span="8" :offset="10">
        <el-tooltip class="item" v-for="(item, index) in iconActions" effect="dark" :content="item.label">
          <el-icon class="w-1/3" :size="18" @click="item.onClick">
            <component :is="item.icon" />
          </el-icon>
        </el-tooltip>

      </el-col>
    </el-row>
    <el-divider />

    <el-input v-model="searchValue" class="w-9/10 m-2" size="large" placeholder="过滤节点" :suffix-icon="Search" />
    <el-tree :data="pageTreeData"></el-tree>
  </div>



</template>

<script setup lang="ts">
import {
  Filter,
  Lock,
  CloseBold,
  Tickets,
  Search
} from '@element-plus/icons-vue';
import {
  ElTree
} from 'element-plus'
import { ref } from "vue"

interface Tree {
  label: string
  children?: Tree[]
}

defineOptions({
  name: 'outline',
  label: '大纲',
  order: 1,
  icon: Tickets,
});

const iconActions = [
  {
    label: '过滤',
    icon: Filter,
    onClick: () => {
      console.log('过滤')
    }
  },
  {
    label: '锁定',
    icon: Lock,
    onClick: () => {
      console.log('锁定')
    }
  },
  {
    label: '关闭',
    icon: CloseBold,
    onClick: () => {
      console.log('关闭')
    }
  },
]

const searchValue = ref('')
const pageTreeData: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]



</script>