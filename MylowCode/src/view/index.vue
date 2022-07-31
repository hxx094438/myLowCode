<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-27 23:07:52
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-31 22:36:34
-->

<template>
  <el-container>
    <el-header>
      <Header></Header>
      
    </el-header>

    <el-container>
      <el-aside class="shadow-sm" width="380px">
      </el-aside>
      <el-main>
   
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus";
import Header from "@/components/header/index.vue";
import { ref } from "vue";
// console.log(Header);
</script>


<style scoped>
</style>