<script setup lang="ts">
import Sidebar from '~/layout/sidebar/sidebar.vue';
import Navbar from '~/layout/navbar/navbar.vue';

/**
 * is menu open
 */
const menuOpen = ref(true)

/**
 * search input method
 * @param value entered value
 */
function searchInput(value:any){
  console.log('search input')
}
</script>

<template>
  <div class="container">

    <div style="background-color: yellow;width: 500px;height: 890px;">
    </div>
    
    <div></div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
@import url('https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  background-color: #000;
  min-height: 100vh;
  overflow: hidden;
}
</style>
