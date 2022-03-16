<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

import sidebar from '~/layout/sidebar/sidebar.vue'
import navbar from '~/layout/navbar/navbar.vue';

const full = ref(null)
const { toggle, isFullscreen } = useFullscreen(full)

const isMenuOpen = ref(true)

/**
 * Whether the sidebar is expanded
 * @param isOpen is open
 */
function unfold(isOpen:boolean){
  isMenuOpen.value = !isOpen
}

/**
 * search method
 * @param searchValue search value
 */
function search(searchValue:string){
  console.log(searchValue)
}


</script>

<template>
  <div ref="full" class="container" >
      <div class="container-sidebar" :class="{'open':isMenuOpen}">
        <sidebar :is-menu-open="isMenuOpen" @is-open="unfold" @search-input="search"/>
      </div>
      <div class="nav-main">
        <div class="navbar">
          <navbar breadcrumbName="Dashboard" :isFullscreen="isFullscreen" @is-full-screen="toggle" :isImage="true" />
        </div>
        <div>
          <router-view />
        </div>
      </div>
  </div>
</template>

<style scoped>
*{
	margin : 0;
	padding : 0;
  display: flex;
}
.container{
	position : absolute;
	width : 100%;
	height : 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #ddd;
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
  /* background-color: red; */
  width: 100%;
  height: 100%;
}
.navbar{
  /* background-color: #fff; */
  width: 100%;
  height: 64px;
}
</style>
