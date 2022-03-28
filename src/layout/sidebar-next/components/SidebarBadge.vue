<script setup lang="ts">
withDefaults(defineProps<{
  badge:any
}>(),{
  badge:() => {}
})

</script>

<template>
  <div>
    <component
      :is="badge.element ? badge.element : 'span'"
      class="vsm--badge"
      :class="badge.class"
      v-bind="badge.attributes"
    >
      {{ badge.text }}
    </component>
  </div>
</template>

<style scoped>
</style>
