<script setup lang="ts">
  const props = withDefaults(defineProps<{
    value:string,
    theme?:string,
    type?:string,
    size?:string,
    disabled?:boolean
  }>(),{
    value:'button',
    theme:'stock',
    type:'primary',
    disabled:false
  })
  
  const emit = defineEmits([
    'button-click'
  ])

  function button_click(){
    emit('button-click')
  }
</script>

<template>
  <div :class="props.theme">
    <div class="container">
      <button v-if="disabled" class="btn btn-disabled" :class="['btn-'+props.type],props.size?.length === 0 ? '' : 'btn-' + props.size" disabled>{{props.value}}</button>
      <button v-else class="btn" :class="['btn-'+props.type],props.size?.length === 0 ? '' : 'btn-' + props.size" @click="button_click">{{props.value}}</button>
    </div>
  </div>
</template>

<style scoped>
  @import url('./bouton.css');
</style>
