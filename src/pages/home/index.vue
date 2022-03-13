<script setup lang="ts">
function searchInput(value:any){
  console.log('search input')
}
function quit(){
  console.log("quit")
}
</script>

<template>
  <main>
    <sidebar @quit="quit" @search-input-emit="searchInput" :active="false"/>
  </main>
</template>
