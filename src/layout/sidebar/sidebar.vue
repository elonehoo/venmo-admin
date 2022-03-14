<script setup lang="ts">
import {ref,onMounted,defineEmits} from 'vue'

import menuItem from '~/layout/sidebar/menuItem'

const props = withDefaults(defineProps<{
  //! Menu settings
  isMenuOpen?:boolean,
  menuTitle?:string,
  menuLogo?:string,
  menuIcon?:string,
  isPaddingLeft?:boolean,
  menuOpenedPaddingLeftBody?:string,
  menuClosedPaddingLeftBody?:string,
  //! Menu items
  menuItems?:Array<menuItem>,
  //! Search
  isSearch?:boolean,
  searchPlaceholder?:string,
  searchTooltip?:string,
  profileImg?:string,
  profileName?:string,
  profileRole?:string,
  isExitButton?:boolean,
  //! Styles
  bgColor?:string,
  secondaryColor?:string,
  homeSectionColor?:string,
  logoTitleColor?:string,
  iconsColor?:string,
  itemsTooltipColor?:string,
  searchInputTextColor?:string,
  menuItemsHoverColor?:string,
  menuItemsTextColor?:string,
  menuFooterTextColor?:string
}>(),{
  //! Menu settings
  isMenuOpen:true,
  menuTitle:'Venmo Admin',
  menuLogo:'',
  menuIcon:'bxl-venmo',
  isPaddingLeft:true,
  menuOpenedPaddingLeftBody:'250px',
  menuClosedPaddingLeftBody:'78px',
  //! Menu items
  menuItems:() =>[
          {
            link: '#',
            name: 'Dashboard',
            tooltip: 'Dashboard',
            icon: 'bx-tachometer',
          },
          {
            link: '#',
            name: 'System',
            tooltip: 'System',
            icon: 'bx-slider',
          },
          {
            link: '#',
            name: 'Table',
            tooltip: 'Table',
            icon: 'bx-grid',
          },
          {
            link: '#',
            name: 'Error',
            tooltip: 'Error',
            icon: 'bx-error-circle',
          },
          {
            link: '#',
            name: 'Form',
            tooltip: 'Form',
            icon: 'bx-spreadsheet',
          },
          {
            link: '#',
            name: 'Result',
            tooltip: 'Result',
            icon: 'bx-check-circle',
          },
          {
            link: '#',
            name: 'Setting',
            tooltip: 'Setting',
            icon: 'bx-cog',
          },
          {
            link: '#',
            name: 'Components',
            tooltip: 'Components',
            icon: 'bx-wallet-alt',
          },
          {
            link:'#',
            name:'Frame',
            tooltip:'Frame',
            icon:'bx-desktop'
          },
          {
            link:'#',
            name:'Documentation',
            tooltip:'Documentation',
            icon:'bx-file'
          },
          {
            link:'#',
            name:'About',
            tooltip:'About',
            icon:'bx-food-menu'
          },
  ],
  //! Search
  isSearch:true,
  searchPlaceholder:'Search...',
  searchTooltip:'Search',
  profileImg:'https://github.com/xiaoxunyao.png',
  profileName:'Elone Hoo',
  profileRole:'Frontend vue developer',
  isExitButton:true,
  //! Styles
  bgColor:'#11101d',
  secondaryColor:'#1d1b31',
  homeSectionColor:'#e4e9f7',
  logoTitleColor:'#fff',
  iconsColor:'#fff',
  itemsTooltipColor:'#e4e9f7',
  searchInputTextColor:'#fff',
  menuItemsHoverColor:'#fff',
  menuItemsTextColor:'#fff',
  menuFooterTextColor:'#fff'
})

const emit = defineEmits([
  'search-input-emit',
  'quit'
])

function searchInput(){
  emit('search-input-emit',search)
}

const isOpened = ref(false)

const search = ref()

onMounted(()=>{
  isOpened.value = props.isMenuOpen
})
</script>

<template>
  <div class="sidebar" :class="{'open':isOpened}">
    <div class="logo-details" style="margin: 6px 14px 0 14px;">
      <img v-if="menuLogo" :src="menuLogo" alt="menu-log" class="menu-logo icon">
      <i v-else class="bx icon" :class="menuIcon" />
      <div class="logo_name"> {{ menuTitle }} </div>
      <i class="bx" :class="isOpened ? 'bx-left-indent' : 'bx-right-indent'" id="btn" @click="isOpened = !isOpened" />
    </div>

    <div style="display: flex ; flex-direction:column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 60px); ">
      <div id="my-scroll" style="margin: 6px 14px 0 14px;">
        <ul class="nav-list" style="overflow: visible;">
          <li v-if="isSearch" @click="isOpened = true">
            <i class="bx bx-search" />
            <input type="text" :placeholder="searchPlaceholder" v-model="search" @keyup.enter="searchInput()">
            <span class="tooltip">{{ searchTooltip }}</span>
          </li>
          <span v-for="(menuItem, index) in menuItems" :key="index">
            <li>
              <a :href="menuItem.link">
                <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                <span class="links_name">{{ menuItem.name }}</span>
              </a>
              <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
            </li>
          </span>
        </ul>
      </div>
    </div>

    <div class="profile" >
      <div class="profile-details">
        <img v-if="profileImg" :src="profileImg" alt="profileImg" >
        <i v-else class="bx bxs-user-rectangle" />
        <div class="name_job">
            <div class="name">
              {{ profileName }}
            </div>
            <div class="job">
              {{ profileRole }}
            </div>
        </div>
      </div>
      <i v-if="isExitButton" class="bx bx-log-out" id="log_out" @click="emit('quit')"  />
    </div>
  </div>
</template>

<style scoped>
/* Google Font Link */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  @import url('https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    transition: all 0.5s ease;
  }
  .menu-logo {
    width: 30px;
    margin: 0 10px 0 10px;
  }
  .sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 78px;
    background: v-bind('props.bgColor');
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
  }
  .sidebar.open {
    width: 250px;
  }
  .sidebar .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .sidebar .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar .logo-details .logo_name {
    color: v-bind('props.logoTitleColor');
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details .icon,
  .sidebar.open .logo-details .logo_name {
    opacity: 1;
  }
  .sidebar .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details #btn {
    text-align: right;
  }
  .sidebar i {
    color: v-bind('props.iconsColor');
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }
  .sidebar .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
  }
  .sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
  }
  .sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: v-bind('props.itemsTooltipColor');
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
  }
  .sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
  }
  .sidebar.open li .tooltip {
    display: none;
  }
  .sidebar input {
    font-size: 15px;
    color: v-bind('props.searchInputTextColor');
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: v-bind('props.secondaryColor')
  }
  .sidebar.open input {
    padding: 0 20px 0 50px;
    width: 100%;
  }
  .sidebar .bx-search {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 22px;
    background: v-bind('props.secondaryColor');
    color: v-bind('props.iconsColor');
  }
  .sidebar.open .bx-search:hover {
    background: v-bind('props.secondaryColor');
    color: v-bind('props.iconsColor');
  }
  .sidebar .bx-search:hover {
    background: v-bind('props.menuItemsHoverColor');
    color: v-bind('props.bgColor');
  }
  .sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
  }
  .sidebar li a:hover {
    background: v-bind('props.menuItemsHoverColor');
  }
  .sidebar li a .links_name {
    color: v-bind('props.menuItemsTextColor');
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  .sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li a:hover .links_name,
  .sidebar li a:hover i {
    transition: all 0.5s ease;
    color: v-bind('props.bgColor');
  }
  .sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
  }
  .sidebar div.profile {
    position: relative;
    height: 60px;
    width: 78px;
    /* left: 0;
    bottom: 0; */
    padding: 10px 14px;
    background: v-bind('props.secondaryColor');
    transition: all 0.5s ease;
    overflow: hidden;
  }
  .sidebar.open div.profile {
    width: 250px;
  }
  .sidebar div .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  .sidebar div img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
  .sidebar div.profile .name,
  .sidebar div.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: v-bind('props.menuFooterTextColor');
    white-space: nowrap;
  }
  .sidebar div.profile .job {
    font-size: 12px;
  }
  .sidebar .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: v-bind('props.secondaryColor');
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
  }
  .sidebar.open .profile #log_out {
    width: 50px;
    background: v-bind('props.secondaryColor');
    opacity: 0;
  }
  .sidebar.open .profile:hover #log_out {
    opacity: 1;
  }
  .sidebar.open .profile #log_out:hover {
    opacity: 1;
    color: red;
  }
  .sidebar .profile #log_out:hover {
    color: red;
  }
  .home-section {
    position: relative;
    background: v-bind('props.homeSectionColor');
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }
  .sidebar.open ~ .home-section {
    left: 250px;
    width: calc(100% - 250px);
  }
  .home-section .text {
    display: inline-block;
    color: v-bind('props.bgColor');
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
  .my-scroll-active {
    overflow-y: auto;
  }
  #my-scroll {
    overflow-y: auto;
    height: calc(100% - 60px);
  }
  #my-scroll::-webkit-scrollbar{
    display:none;
    /* background-color: rgba(255, 255, 255, 0.2); 
    width: 10px;
    border-radius:5px  */
  }
  /* #my-scroll::-webkit-scrollbar-thumb{
    background-color: red;
    border-radius:5px 
  }
  #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{
    display:none;
  }
  #my-scroll::-webkit-scrollbar-button:vertical:end:increment{
    display:none;
  } */
  @media (max-width: 420px) {
    .sidebar li .tooltip {
      display: none;
    }
}
</style>
