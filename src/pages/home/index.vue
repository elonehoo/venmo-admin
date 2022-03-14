<script setup lang="ts">
import Sidebar from '~/layout/sidebar/sidebar.vue';
function searchInput(value:any){
  console.log('search input')
}
</script>

<template>
  <main>
    <Sidebar @search-input-emit="searchInput" :active="false"/>
    <div>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
  </main>
</template>
