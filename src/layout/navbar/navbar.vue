<script setup lang="ts">
const isRefresh = ref(false)

function refresh(){
  isRefresh.value = !isRefresh.value
}
</script>

<template>
  <div class="layout-navbar">
    
    <div class="layout-header-left">
      <div class="layout-refresh">
        <i class='bx bx-refresh bx-sm' :class="{'bx-spin': isRefresh}" @click="refresh"/>
      </div>
      <div class="layout-breadcrumb">
        abc
      </div>
    </div>

    <div class="layout-header-right">

    </div>

  </div>
</template>

<style scoped>
  @import url('https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css');
  .layout-navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: #fff;
    height: 64px;
    box-shadow: 0 1px 4px #00152914;
    transition: all .2s ease-in-out;
    width: 100%;
    z-index: 11;
  }
  .layout-header-left{
    display: flex;
    align-items: center;
  }
  .layout-refresh{
    display: flex;
    align-items: center;
    /* background: yellow; */
    justify-content: center;
    width: 42px;
    height: 100%;
  }
  .layout-breadcrumb{
    margin-left: 5px;
    width: 150px;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .layout-header-right{
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
</style>
