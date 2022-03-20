<script setup lang="ts">
import {ref,onUpdated,onMounted,defineEmits} from 'vue'

import menuItem from '~/layout/sidebar/menuItem'

/**
 * Default parameter list
 */
const props = withDefaults(defineProps<{
  /* ! Menu settings */
  //! whether to expand
  isMenuOpen?:boolean,
  //! menu title
  menuTitle?:string,
  //! menu logo
  menuLogo?:string,
  //! menu icon
  menuIcon?:string,
  
  /* ! Menu items */
  //! menu items
  menuItems?:Array<menuItem>,
  /* ! Search */
  //! is search
  isSearch?:boolean,
  //! search place holder
  searchPlaceholder?:string,
  //! search tooltip
  searchTooltip?:string,
  /* ! Styles */

  //! background-color
  bgColor?:string,
  //! secondary color
  secondaryColor?:string,
  //! home section color
  homeSectionColor?:string,
  //! logo title color
  logoTitleColor?:string,
  //! icon color
  iconsColor?:string,
  //! items tooltip color
  itemsTooltipColor?:string,
  //! search input text color
  searchInputTextColor?:string,
  //! menu items hover color
  menuItemsHoverColor?:string,
  //! menu items text color
  menuItemsTextColor?:string,
  //! menu footer text color
  menuFooterTextColor?:string
}>(),{
  //! Menu settings
  isMenuOpen:true,
  menuTitle:'Venmo Admin',
  menuLogo:'',
  menuIcon:'bxl-venmo',
  menuClosedPaddingLeftBody:'78px',
  //! Menu items
  menuItems:() =>[
          {
            link: '/home/dashboard',
            name: 'Dashboard',
            tooltip: 'Dashboard',
            icon: 'bx-tachometer',
          },
          {
            link: '/home/system',
            name: 'System',
            tooltip: 'System',
            icon: 'bx-slider',
          },
          {
            link: '/home/table',
            name: 'Table',
            tooltip: 'Table',
            icon: 'bx-grid',
          },
          {
            link: '/home/error',
            name: 'Error',
            tooltip: 'Error',
            icon: 'bx-error-circle',
          },
          {
            link: '/home/form',
            name: 'Form',
            tooltip: 'Form',
            icon: 'bx-spreadsheet',
          },
          {
            link: '/home/result',
            name: 'Result',
            tooltip: 'Result',
            icon: 'bx-check-circle',
          },
          {
            link: '/home/setting',
            name: 'Setting',
            tooltip: 'Setting',
            icon: 'bx-cog',
          },
          {
            link: '/home/components',
            name: 'Components',
            tooltip: 'Components',
            icon: 'bx-wallet-alt',
          },
          {
            link:'/home/frame',
            name:'Frame',
            tooltip:'Frame',
            icon:'bx-desktop'
          },
          {
            link:'/home/documentation',
            name:'Documentation',
            tooltip:'Documentation',
            icon:'bx-file'
          },
          {
            link:'/home/about',
            name:'About',
            tooltip:'About',
            icon:'bx-food-menu'
          },
  ],
  //! Search
  isSearch:true,
  searchPlaceholder:'Search...',
  searchTooltip:'Search',
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

/**
 * The emit method can be replaced by an external method.
 * Here throws "the method of search: search-input" and "whether to expand: is-open"
 */
const emit = defineEmits([
  'search-input',
  'is-open',
])

/**
 * Search value
 */
const search = ref()

/**
 * Search method for departure after carriage return
 */
function searchInput(){
  emit('search-input',search.value)
}

/**
 * whether to expand the sidebar
 */
const isOpened = ref()
function isOpen(){
  emit('is-open',isOpened.value)
}

/**
 * changes when isMenuOpen changes
 */
onUpdated(()=>{
  isOpened.value = props.isMenuOpen
})

/**
 * will be called when the component is created
 */
onMounted(()=>{
  isOpened.value = props.isMenuOpen
})

</script>

<template>
  <div class="sidebar" :class="{'open':isOpened}">
    <div class="logo-details" style="margin: 6px 14px 0 14px;">
      <img v-if="menuLogo && isOpened" :src="menuLogo" alt="menu-log" class="menu-logo icon">
      <i v-else class="bx icon" :class="menuIcon" />
      <div v-if="isOpened" class="logo_name"> {{ menuTitle }} </div>
      <i class="bx" :class="isOpened ? 'bx-left-indent' : 'bx-right-indent'" id="btn" @click="isOpen()" />
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
              <router-link :to="menuItem.link">
                <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                <span class="links_name">{{ menuItem.name }}</span>
              </router-link>
              <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
            </li>
          </span>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>

  /* Google Font Link */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  /* Box Icons Link */
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

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
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
  }
  @media (max-width: 420px) {
    .sidebar li .tooltip {
      display: none;
    }
}
</style>
