<script setup lang="ts">
import sidebar from '~/layout/sidebar/sidebar.vue'

const open = ref(false)

function isopen(){
  open.value = !open.value
  console.log(open.value)
}
</script>

<template>
  <div class="container">
      <div class="sidebar">
      </div>
      <div class="nav-main">
        <div class="navbar">
          <button @click="isopen()">click</button>
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
  background-color: black;
	width : 100%;
	height : 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}


.sidebar{
  background-color: yellow;
  width: 250px;
  height: 100%;
}
.nav-main{
  display: flex;
  flex-direction: column;
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
