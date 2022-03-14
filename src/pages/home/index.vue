<script setup lang="ts">
import sidebar from '~/layout/sidebar/sidebar.vue'

const isMenuOpen = ref(false)

function demo(){
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="container" >
      <div class="container-sidebar">
        <sidebar :is-menu-open="isMenuOpen"/>
      </div>
      <div class="nav-main">
        <div class="navbar">
          <button @click="demo">click</button>
        </div>
      </div>
  </div>
</template>

<style scoped>
*{		/* CSS Reset */
	margin : 0;
	padding : 0;
  display: flex;
}
.container{	/* div的CSS样式 */
	position : absolute;
  background-color:black;
	width : 100%;
	height : 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.container-sidebar{
  width: 306px;
  height: 100%;
  background-color: yellow;
}
.nav-main{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: red;
  width: 100%;
  height: 100%;
}
.navbar{
  background-color: blue;
  width: 100%;
  height: 100px;
}
</style>
