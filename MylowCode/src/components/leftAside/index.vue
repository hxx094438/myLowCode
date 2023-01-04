<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-08-01 22:42:18
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-07 16:19:58
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
      <component :is="item.component"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {
  Tickets,
  Suitcase,
  DataBoard
} from '@element-plus/icons-vue';
import { ref, defineComponent, DefineComponent } from "vue"
import index from "./component";
import components from './component';

interface AsideComp {
  label: string;
  icon: DefineComponent,
  order: number,
  component: DefineComponent,
  name: string
}

defineOptions({
  name: 'LeftAside',
});


let tabs: Array<AsideComp> = []
for (const comp in components) {
  const { label, icon, name, order } = components[comp]
  tabs.push({
    label, icon, name, order, component: components[comp]
  })
}
tabs.sort((a, b) => a.order - b.order)

const activeName = ref(tabs[0].name);


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