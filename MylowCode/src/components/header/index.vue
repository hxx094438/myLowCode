<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-28 23:42:37
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-31 23:49:07
-->
<template>
  <el-row class="header">
    <el-col :span="6" class="flex items-center">
      <div class="logo"></div>
      <h3 class="font-semibold">MylowCode</h3>
    </el-col>

    <el-col class="flex items-center" justify="flex-start" :span="12">
      <template v-for="(action, i) in actions" :key="i">
        <div :class="[`w-1/${actions.length}`]" >
          <div class="tool-item flex flex-col items-center">
            <el-icon>
              <component :is="action.icon" />
            </el-icon>
       
            <div class="title">
              {{action.title}}
            </div>
          </div>
        </div>
      </template>
  
    </el-col>

    <el-col class="flex items-center "  :span="6">
      <el-tooltip class="item" effect="dark" content="PC">
        <el-button 
          type="primary" 
          :icon="Monitor"
          color="#fff"
        >
        </el-button>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" content="手机">
        <el-button 
          type="primary" 
          :icon="Iphone"
          color="#fff"
        ></el-button>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" content="平板">
        <el-button 
          type="primary" 
          :icon="Tickets"
          color="#fff"
        ></el-button>
      </el-tooltip>
      
    </el-col>
   
  </el-row>
</template>

<script lang="ts" setup>

import { Iphone, Monitor , Tickets} from '@element-plus/icons-vue';

import { ref } from "vue"
import { ElCard, ElTooltip } from 'element-plus';
import { actionsList } from "./actionsList.tsx";


const actions = ref(actionsList());

</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  .logo {
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .tool-item {
    .title {
      margin-top: 4px;
      font-size: 12px;
    }
  }

  .el-button {
    font-size: 22px;
  }

  .right-tools > * {
    margin-left: 8px;
  }
}
</style>
