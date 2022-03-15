<script setup lang="ts">
const isRefresh = ref(false)

function refresh(){
  isRefresh.value = !isRefresh.value
}
</script>

<template>
  <div class="layout-navbar">
    <div class="layout-header-left">
      <div class="refresh">
        <i class='bx bx-refresh bx-md' :class="{'bx-spin': isRefresh}" @click="refresh"/>
      </div>
      <div>
        abc/def
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css');
  .layout-navbar{
    background: #fff;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .layout-header-left{
    background:blueviolet;
    width: 254px;
    height: 100%;
  }
  .refresh{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 100%;
  }
</style>
