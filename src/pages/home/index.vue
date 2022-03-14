<script setup lang="ts">
import sidebar from '~/layout/sidebar/sidebar.vue'

const isMenuOpen = ref(true)

function demo(isOpen:boolean){
  console.log(isOpen)
  isMenuOpen.value = !isOpen
}
</script>

<template>
  <div class="container" >
      <div class="container-sidebar" :class="{'open':isMenuOpen}">
        <sidebar :is-menu-open="isMenuOpen" @is-open="demo"/>
      </div>
      <div class="nav-main">
        <div class="navbar">
          <button>click</button>
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
	width : 100%;
	height : 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.container-sidebar{
  width: 85px;
  height: 100%;
  transition: all 0.5s ease;
}
.open{
  width: 307px;
}
.nav-main{
  display: flex;
  margin-left: 3px;
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
