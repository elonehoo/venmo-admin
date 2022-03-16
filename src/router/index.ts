import { createRouter, createWebHistory } from "vue-router";

/**
 * define route array
 */
const routes = [
  {
    name:'home',    
    path:'/home',
    redirect:'/home/dashboard',
    component: ()=> import('~/pages/home/index.vue'),
    children:[
      {
        name:'dashboard',
        path:'dashboard',
        component: ()=> import('~/views/dashboard/dashboard.vue')
      },
      {
        name:'system',
        path:'system',
        component: ()=> import('~/views/system/system.vue')
      },
      {
        name:'table',
        path:'table',
        component: ()=> import('~/views/table/table.vue')
      },
      {
        name:'error',
        path:'error',
        component: ()=> import('~/views/error/error.vue')
      },
      {
        name:'form',
        path:'form',
        component: ()=> import('~/views/form/form.vue')
      },
      {
        name:'result',
        path:'result',
        component: ()=> import('~/views/result/result.vue')
      },
      {
        name:'setting',
        path:'setting',
        component: ()=> import('~/views/setting/setting.vue')
      },
      {
        name:'components',
        path:'components',
        component: ()=> import('~/views/components/components.vue')
      },
      {
        name:'frame',
        path:'frame',
        component: ()=> import('~/views/frame/frame.vue')
      },
      {
        name:'documentation',
        path:'documentation',
        component: ()=> import('~/views/documentation/documentation.vue')
      },
      {
        name:'about',
        path:'about',
        component: ()=> import('~/views/about/about.vue')
      },
    ]
  },
  {
    name:'login',
    path:'/login',
    component: ()=> import('~/pages/login/index.vue')
  }
];
 
/**
 * Create route
 */
const router = createRouter({
  // hash mode：createWebHashHistory，
  // history mode: createWebHistory
  history: createWebHistory("/"),
  // history:createWebHashHistory(),
  routes,
});
 
/**
 * 输出对象
 */
export default router;
