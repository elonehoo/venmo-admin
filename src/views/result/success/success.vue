<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  function goHome() {
    router.push('/home');
  }
</script>

<template>
  <div class="view-container">
    <div class="view-text-center">
    <img class="image" src="../../../assert/result/success.svg" alt="" />
    </div>
    <div class="view-text-center">
      <h1 class="view-text-base">success.</h1>
      <Bouton theme="phi" type="secondary" value="Go Home" @button-click="goHome()" />
    </div>
  </div>
</template>

<style scoped>
.view-container{
  width: 100%;
  border-radius: 4px;
  padding: 50px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image {
  width: 100px;
  margin: 0 auto;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}
.view-text-center{
  text-align: center;
}
.view-text-base {
  color: #666;
  padding: 20px 0;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  color: rgba(107, 114, 128,1)
}
</style>
