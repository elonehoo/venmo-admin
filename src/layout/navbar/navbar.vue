<script setup lang="ts">
import {ref,onUpdated,onMounted,defineEmits} from 'vue'

import avatar from '~/components/avatar/avatar.vue'

const props = withDefaults(defineProps<{
  isFullscreen?:boolean,
  breadcrumbName:string,
  username?:string,
  isImage:boolean,
  isRadius?:boolean,
  src?:string,
  size?:number
}>(),{
  isFullscreen:false,
  breadcrumbName:'Dashboard',
  username:'a t',
  isImage:true,
  isRadius:true,
  src:'https://github.com/xiaoxunyao.png',
  size:50
})

const isFull = ref()

onMounted(()=>{
  isFull.value = props.isFullscreen
})

onUpdated(()=>{
  isFull.value = props.isFullscreen
})

const emit = defineEmits([
  'is-full-screen'
])

const isRefresh = ref(false)

function refresh(){
  isRefresh.value = !isRefresh.value
}
function isFullScreen(){
  emit('is-full-screen')
}
</script>

<template>
  <div class="layout-navbar">
    
    <div class="layout-header-left">
      <div class="layout-refresh">
        <i class='bx bx-loader-alt bx-sm' :class="{'bx-spin': isRefresh}" @click="refresh"/>
      </div>
      <div class="layout-breadcrumb">
        {{props.breadcrumbName}}
      </div>
    </div>

    <div class="layout-header-right">
      <div>
        <a class="icon-i" href="https://github.com/xiaoxunyao/naive-admin">
          <i class='bx bxl-github bx-sm' />
        </a>
      </div>
      <div style="margin-left: 20px;">
        <a @click="isFullScreen" class="icon-i" href="#">
          <i class='bx bx-sm' :class="isFull ? 'bx-collapse-alt':'bx-expand-alt'" />
        </a>
      </div>
      <div style="margin-left: 20px;">
        <avatar :username="props.username" :isImage="props.isImage" :isRadius="props.isRadius" />
      </div>
    </div>

  </div>
</template>

<style scoped>
  @import url('https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css');
  .layout-navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: #fff;
    height: 64px;
    box-shadow: 0 1px 4px #00152914;
    transition: all .2s ease-in-out;
    width: 100%;
    z-index: 11;
  }
  .layout-header-left{
    display: flex;
    align-items: center;
  }
  .layout-refresh{
    display: flex;
    align-items: center;
    /* background: yellow; */
    justify-content: center;
    width: 42px;
    height: 100%;
  }
  .bx-spin{
    -webkit-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite
  }
  .bx-spin-hover:hover{
    -webkit-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite
  }
  .layout-breadcrumb{
    margin-left: 20px;
    width: 150px;
    height: 100%;

    display: flex;
    align-items: center;
  }
  .layout-header-right{
    /* width: 265px; */
    /* background: blue; */
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .icon-i{
    color: #000; 
  }
  .icon-i:link{
    color: #000; 
  }
  .icon-i:visited{
    color: #000; 
  }
  .icon-i:hover{
    color: #000; 
  }
  .icon-i:active{
    color: #000; 
  }
</style>
