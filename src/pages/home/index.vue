<script setup lang="ts">
import { ref,onMounted,onUpdated } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { useRoute } from 'vue-router'

import sidebar from '~/layout/sidebar/sidebar.vue'
// import sidebar from '~/layout/sidebar-next/sidebar.vue'
import navbar from '~/layout/navbar/navbar.vue'

const full = ref(null)
const routeName = ref()
const { toggle, isFullscreen } = useFullscreen(full)

const isMenuOpen = ref(false)

const route = useRoute()

function getRouterName(){
  routeName.value = route.name
}

onMounted(()=>{
  getRouterName()
})

onUpdated(()=>{
  getRouterName()
})

/**
 * Whether the sidebar is expanded
 * @param isOpen is open
 */
function unfold(isOpen:boolean){
  isMenuOpen.value = !isOpen
}

</script>

<template>
  <div ref="full" class="container">
    <sidebar :is-opened="isMenuOpen"/>
    <section class="home-section" :class="isMenuOpen? 'home-close' : '' ">
      <navbar @is-sidebar-open="unfold(isMenuOpen)" :isSidebarOpen="isMenuOpen" :breadcrumbName="routeName" :isFullscreen="isFullscreen" @is-full-screen="toggle" :isImage="true"/>
      <div>
        <router-view/>
      </div>
    </section>
  </div>
</template>

<style scoped>
*{
	margin : 0;
	padding : 0;
  /* display: flex; */
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
.home-section{
  position: relative;
  height: 100vh;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
}
.home-close{
  left: 78px;
  width: calc(100% - 78px);
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
