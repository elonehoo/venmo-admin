<script setup lang="ts">
  import { ref,onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const $router = useRoute()
  const router = ref(false)

  const props = withDefaults(defineProps<{
    item:any
  }>(),{})

  onMounted(()=>{
    router.value = !!$router
  })

  const isHyperLink = computed(() => {
    return !!(!props.item.href || props.item.external || !router)
  })
</script>

<template>
  <div>
    <a
    v-if="isHyperLink"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <router-link
    v-else
    v-slot="{ href, navigate }"
    custom
    :to="$attrs.href"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
  </div>
</template>

<style scoped>
</style>
