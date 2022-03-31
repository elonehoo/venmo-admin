import { createRouter, createWebHistory } from "vue-router";

/**
 * define route array
 */
const routes = [
  {
    name:'home',    
    path:'/',
    redirect:'/dashboard/console',
    component: ()=> import('~/pages/home/index.vue'),
    children:[
      {
        name:'console',
        path:'dashboard/console',
        component: ()=> import('~/views/dashboard/console/console.vue')
      },
      {
        name:'workplace',
        path:'dashboard/workplace',
        component: ()=> import('~/views/dashboard/workplace/workplace.vue')
      },
      {
        name:'role-admin',
        path:'system/role-admin',
        component: ()=> import('~/views/system/role-admin/role-admin.vue')
      },
      {
        name:'user-admin',
        path:'system/user-admin',
        component: ()=> import('~/views/system/user-admin/user-admin.vue')
      },
      {
        name:'basic-table',
        path:'table/basic-table',
        component: ()=> import('~/views/table/basic-table/basic-table.vue')
      },
      {
        name:'403',
        path:'error/403',
        component: ()=> import('~/views/error/403/403.vue')
      },
      {
        name:'404',
        path:'error/404',
        component: ()=> import('~/views/error/404/404.vue')
      },
      {
        name:'500',
        path:'error/500',
        component: ()=> import('~/views/error/500/500.vue')
      },
      {
        name:'basic-from',
        path:'form/basic-form',
        component: ()=> import('~/views/form/basic-form/basic-form.vue')
      },
      {
        name:'success',
        path:'result/success',
        component: ()=> import('~/views/result/success/success.vue')
      },
      {
        name:'fail',
        path:'result/fail',
        component: ()=> import('~/views/result/fail/fail.vue')
      },
      {
        name:'info',
        path:'result/info',
        component: ()=> import('~/views/result/info/info.vue')
      },
      {
        name:'setting-account',
        path:'setting/account',
        component: ()=> import('~/views/setting/account/account.vue')
      },
      {
        name:'setting-system',
        path:'setting/system',
        component: ()=> import('~/views/setting/system/system.vue')
      },
      {
        name:'compo-table',
        path:'components/compo-table',
        component: ()=> import('~/views/components/table/table.vue')
      },
      {
        name:'compo-form',
        path:'components/compo-form',
        component: ()=> import('~/views/components/form/form.vue')
      },
      {
        name:'compo-upload',
        path:'components/compo-upload',
        component: ()=> import('~/views/components/upload/upload.vue')
      },
      {
        name:'compo-modal',
        path:'components/compo-modal',
        component: ()=> import('~/views/components/modal/modal.vue')
      },
      {
        name:'frame-github',
        path:'frame/github',
        component: ()=> import('~/views/frame/github/github.vue')
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
 * print 
 */
export default router;
