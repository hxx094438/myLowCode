<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-27 23:07:52
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-08-30 22:46:23
-->

<template>
  <el-container>
    <el-header>
      <Header></Header>

    </el-header>

    <el-container class="layout-container">
      <el-aside class="shadow-sm" width="380px">
        <left-aside></left-aside>
      </el-aside>
      <el-main>
        <v-editor>

        </v-editor>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus";
import Header from "@/components/header/index.vue";
import LeftAside from "@/components/leftAside/index.vue"
import VEditor from "@/components/editor/vEditor.vue"
import { ref } from "vue";
// console.log(Header);
</script>


<style lang="scss" scoped>
.layout-container {
  height: calc(100vh - 80px);
}
</style>