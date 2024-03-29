<script setup lang="ts">
import {onMounted,onUpdated} from 'vue'
import items from './menu'

const isOpen = ref()

const menus = ref()

const props = withDefaults(defineProps<{
  isOpened?: boolean,
  
  title?: string,
  logo?: string,
  icon?: string,

  menu?: Array<items>

  //! background-color
  bgColor?:string,
  //! logo title color
  logoTitleColor?:string,
  hoverColor?:string,
  sidebarLinkColor?:string,
  sidebarFontColor?:string,
}>(),{
  isOpened: false,
  
  title: 'Venmo Admin',
  icon:'bxl-venmo',
  //menu array of items
  menu:()=>[
    {
      title: 'Dashboard',
      icon: 'bx-tachometer',
      unfold:false,
      chiled:[
        {
          link:'/dashboard/console',
          title: 'Console',
        },
        {
          link:'/dashboard/workplace',
          title:'workplace',
        }
      ]
    },
    {
      title: 'System',
      icon: 'bx-slider',
      unfold:false,
      chiled:[
        {
          link:'/system/role-admin',
          title:'Role Admin',
        },
        {
          link:'/system/user-admin',
          title:'User Admin',
        },
      ],
    },
    {
      title: 'Table',
      icon: 'bx-grid',
      unfold:false,
      chiled:[
        {
          link:'/table/basic-table',
          title:'Basic Table',
        },
      ],
    },
    {
      title:'Error',
      icon:'bx-error-circle',
      unfold:false,
      chiled:[
        {
          link:'/error/500',
          title:'500',
        },
        {
          link:'/error/404',
          title:'404',
        },
        {
          link:'/error/403',
          title:'403',
        }
      ]
    },
    {
      title:'From',
      icon:'bx-spreadsheet',
      unfold:false,
      chiled:[
        {
          title:'Basic From',
          link:'/form/basic-form',
        }
      ]
    },
    {
      title:'Result',
      icon: 'bx-check-circle',
      unfold:false,
      chiled:[
        {
          title:'Success',
          link:'/result/success'
        },
        {
          title:'Fail',
          link:'/result/fail'
        },
        {
          title:'Info',
          link:'/result/info'
        }
      ]
    },
    {
      title:'Setting',
      icon:'bx-cog',
      unfold:false,
      chiled:[
        {
          title:'Account',
          link:'/setting/account'
        },
        {
          title:'System',
          link:'/setting/system'
        }
      ]
    },
    {
      title:'compo',
      icon:'bx-wallet-alt',
      unfold:false,
      chiled:[
        {
          title:'Table',
          link:'/components/compo-table'
        },
        {
          title:'Form',
          link:'/components/compo-form'
        },
        {
          title:'Upload',
          link:'/components/compo-upload'
        },
        {
          title:'modal',
          link:'/components/compo-modal'
        },
      ]
    },
    {
      title:'Frame',
      icon:'bx-desktop',
      unfold:false,
      chiled:[
        {
          title:'GitHub',
          link:'/frame/github'
        }
      ]
    },
    {
      link:'/documentation',
      title:'Documentation',
      icon:'bx-file'
    },
    {
      link:'/about',
      title:'About',
      icon:'bx-food-menu'
    }
  ],
  //! Styles
  bgColor:'#11101d',
  logoTitleColor:'#fff',
  hoverColor:'#1d1b31',
  sidebarLinkColor:'#fff',
  sidebarFontColor:'#fff'
})

onMounted(()=>{
  isOpen.value = props.isOpened
  menus.value = props.menu
})

onUpdated(()=>{
  isOpen.value = props.isOpened
  menus.value = props.menu
})

function menuUnfold(index:number){
  for(var i = 0 ;  i < menus.value.length ; i++){
    if(i === index){
      menus.value[i].unfold = !menus.value[i].unfold
    }else{
      menus.value[i].unfold = false;
    }
  }
}

</script>

<template>
<div class="sidebar" :class="isOpen ? 'close' : '' ">
    <div class="logo-details">
      <img v-if="logo" :src="props.logo" alt="menu-log" class="menu-logo icon">
      <i v-else class="bx icon" :class="props.icon" />
      <div v-if="!isOpen" class="logo_name"> {{ props.title }} </div>
    </div>
    <ul class="nav-links" style="overflow: visible;">
      <li v-for="(menu,index) in menus" :key="index" :class="menu.unfold ? 'showMenu':''">
        <div class="icon-link" @click="menu.chiled?.length !== undefined ? menuUnfold(index) : '' ">
          <router-link :to="menu.chiled?.length !== undefined ? '' : menu.link ">
            <i class="bx" :class="menu.icon || 'bx-square-rounded'"></i>
            <span class="link_name">{{menu.title}}</span>
          </router-link >
          <i v-if="menu.chiled?.length !== undefined" class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name">{{menu.title}}</a></li>
          <li v-if="menu.chiled?.length !== undefined" v-for="(subMenu,index) in menu.chiled" :key="index">
            <router-link :to="subMenu.link">{{subMenu.title}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
</div>

</template>

<style scoped>
/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
/* Box Icons Link */
@import url('https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: v-bind('props.bgColor');
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close{
  width: 78px;
}
.sidebar .logo-details{
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i{
  font-size: 30px;
  color: v-bind('props.logoTitleColor');
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name{
  font-size: 22px;
  color: v-bind('props.logoTitleColor');
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.sidebar.close .logo-details .logo_name{
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links{
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links{
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar{
  display: none;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover{
  background: v-bind('props.hoverColor');
}
.sidebar .nav-links li .icon-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .icon-link{
  display: block
}
.sidebar .nav-links li i{
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: v-bind('props.sidebarLinkColor');
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sidebar .nav-links li.showMenu i.arrow{
  transform: rotate(-180deg);
}
.sidebar.close .nav-links i.arrow{
  display: none;
}
.sidebar .nav-links li a{
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sidebar .nav-links li a .link_name{
  font-size: 18px;
  font-weight: 400;
  color: v-bind('props.sidebarFontColor');
  transition: all 0.4s ease;
}
.sidebar.close .nav-links li a .link_name{
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu{
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: v-bind('props.hoverColor');
  display: none;
}
.sidebar .nav-links li.showMenu .sub-menu{
  display: block;
}
.sidebar .nav-links li .sub-menu a{
  color: v-bind('props.sidebarFontColor');
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover{
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu{
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu{
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.sidebar .nav-links li .sub-menu .link_name{
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name{
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank{
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank{
  top: 50%;
  transform: translateY(-50%);
}
.sidebar .profile-details{
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details{
  background: none;
}
.sidebar.close .profile-details{
  width: 78px;
}
.sidebar .profile-details .profile-content{
  display: flex;
  align-items: center;
}
.sidebar .profile-details img{
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details img{
  padding: 10px;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job{
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job{
  display: none;
}
.sidebar .profile-details .job{
  font-size: 12px;
}
.sidebar.close ~ .home-section{
  left: 78px;
  width: calc(100% - 78px);
}
.home-section .home-content{
  height: 60px;
  display: flex;
  align-items: center;
}
.menu-logo {
    width: 30px;
    margin: 0 10px 0 10px;
}

.icon{
    opacity: 0;
    opacity: 1;
    transition: all 0.5s ease;
}

</style>
