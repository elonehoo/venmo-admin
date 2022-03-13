<script setup lang="ts">
import Sidebar from '~/layout/sidebar/sidebar.vue';
function searchInput(value:any){
  console.log('search input')
}
function quit(){
  console.log("quit")
}
</script>

<template>
  <main>
    <Sidebar @quit="quit" @search-input-emit="searchInput" :active="false"/>
    <div>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
  </main>
</template>
