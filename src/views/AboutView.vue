<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"
        ><el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          style="background: rgb(191, 227, 216)"
        >
          <el-menu-item index="0" disabled>
            <el-button
              v-model="isCollapse"
              @click="expand"
              :text="true"
              size="small"
              style="float: left"
              >=》
            </el-button>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
          <el-sub-menu index="5">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator 5</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">item one</el-menu-item>
              <el-menu-item index="5-2">item two</el-menu-item>
              <el-menu-item index="5-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="5-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="5-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator 6</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">item one</el-menu-item>
              <el-menu-item index="6-2">item two</el-menu-item>
              <el-menu-item index="6-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="6-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="6-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu></el-aside
      >
      <el-container>
        <el-header
        style="background: rgb(228, 188, 224)"
          ><div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
                ><setting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div></el-header
        >
        <el-main><el-page-header>
            <template #breadcrumb>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: './page-header.html' }">
                  homepage
                </el-breadcrumb-item>
                <el-breadcrumb-item
                  ><a href="./page-header.html">route 1</a></el-breadcrumb-item
                >
                <el-breadcrumb-item>route 2</el-breadcrumb-item>
              </el-breadcrumb>
            </template>
            <template #content>
              <span class="text-large font-600 mr-3"> Title </span>
            </template>
          </el-page-header></el-main>
      </el-container>
    </el-container>
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
const expand = () => {
  if (isCollapse.value == false) {
    isCollapse.value = true;
  } else {
    isCollapse.value = false;
  }
};
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 780px;
}
.common-layout .toolbar {
  float: right;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>