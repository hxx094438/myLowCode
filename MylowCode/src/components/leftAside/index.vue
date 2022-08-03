<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-08-01 22:42:18
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-03 23:21:21
-->
<template>
  <el-tabs tab-position="left" class="left-aside" v-model="activeName">

    <el-tab-pane v-for="(item, index) in tabs" :name="item.name" :key="item.name">
      <template #label>
        <div class="tab-item">
          <el-icon :size="26">
            <component :is="item.icon" />
          </el-icon>
          {{ item.label }}
        </div>
      </template>
      <component :is="item.component" v-bind="$attrs" />



      <!-- <template #label>
          <div class="tab-item">
            <el-icon :size="26">
              <component :is="tabItem.icon" />
            </el-icon>
            {{ tabItem.label }}
          </div>
        </template> -->

      <!-- <component :is="tabItem.comp" v-bind="$attrs" /> -->
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {
  Tickets,
  Suitcase,
  DataBoard
} from '@element-plus/icons-vue';
import { ref, defineComponent } from "vue"
import c from "./component/c";
defineOptions({
  name: 'LeftAside',
});

const activeName = '侧边导航'
const tabs = [
  {
    label: '页面',
    icon: Tickets,
    component: c,
    name: 'page1'
  },

  {
    label: '组件库',
    icon: Suitcase,
    component: c,
    name: 'page2'
  },
  {
    label: '数据源',
    icon: DataBoard,
    component: c,
    name: 'page3'

  },
]


</script>

<style lang="scss" scoped>
.left-aside {
  height: 100%;
  contain: layout;

  > :deep(.el-tabs__header) {
    margin-right: 0;

    .el-tabs__item {
      height: 80px;
      padding: 20px 16px;

      .tab-item {
        @apply flex flex-col items-center justify-center;

        [class^='el-icon-'] {
          font-size: 20px;
        }
      }
    }
  }

  > :deep(.el-tabs__content) {
    height: 100%;
    overflow-y: auto;
  }
}
</style>