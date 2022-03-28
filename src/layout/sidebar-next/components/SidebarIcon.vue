<script setup lang="ts">
withDefaults(defineProps<{
  icon:any
}>(),{
  icon: ''
})
</script>

<template>
  <div>
    <component
      :is="icon.element ? icon.element : 'i'"
      class="vsm--icon"
      :class="typeof icon === 'string' || (icon instanceof String) ? icon : icon.class"
      aria-hidden="true"
      v-bind="icon.attributes"
    >
      {{ icon.text }}
    </component>
  </div>
</template>

<style scoped>
</style>
