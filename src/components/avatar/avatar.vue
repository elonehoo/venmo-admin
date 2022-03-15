<script setup lang="ts">
import {ref,onMounted,defineEmits,computed} from 'vue'

const props = withDefaults(defineProps<{
  username:string,
  initials?:string,
  backgroundColor?:string,
  color?:string,
  customStyle?:string,
  inline?:string,
  size?:number,
  src?:string,
  rounded?:boolean,
  lighten?:number,
}>(),{
  initials:'',
  backgroundColor:'',
  color:'',
  customStyle:'',
  inline:'',
  size:50,
  rounded:true,
  lighten:80
})

const emit = defineEmits([
  'avatar-initials'
])

const backgroundColors = ref(
  [
    '#F44336', '#FF4081', '#9C27B0', '#673AB7',
    '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', 
    '#009688', '#4CAF50', '#8BC34A', '#CDDC39', 
    '#FFC107', '#FF9800', '#FF5722', '#795548', 
    '#9E9E9E', '#607D8B'
  ]
)

const imgError = ref(false)

onMounted(()=>{
  if (!isImage) {
      emit('avatar-initials', props.username, userInitial)
    }
})

const background = computed(()=>{
  if (!isImage) {
        return props.backgroundColor || randomBackgroundColor(props.username?.length, backgroundColors)
  }
})

const fontColor = computed(()=>{
  if (!isImage) {
    return props.color || lightenColor(background, props.lighten)
  }
})

const isImage = computed(()=>{
  return !imgError && Boolean(props.src)
})

const style = computed(()=>{
      const style = {
        display: props.inline ? 'inline-flex' : 'flex',
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: props.rounded ? '50%' : 0,
        lineHeight: `${(props.size + Math.floor(props.size / 20))}px`,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        userSelect: 'none'
      }

      const imgBackgroundAndFontStyle = {
        background: `transparent url('${props.src}') no-repeat scroll 0% 0% / ${props.size}px ${props.size}px content-box border-box`
      }

      const initialBackgroundAndFontStyle = {
        backgroundColor: background,
        font: `${Math.floor(props.size / 2.5)}px/${props.size}px Helvetica, Arial, sans-serif`,
        color: fontColor
      }

      const backgroundAndFontStyle = (isImage)
        ? imgBackgroundAndFontStyle
        : initialBackgroundAndFontStyle

      Object.assign(style, backgroundAndFontStyle)

      return style
})

const userInitial = computed(()=>{
  if (!isImage) {
    const initials = props.initials || getInitials(props.username)
    return initials
  }
  return ''
})

const getInitials = (username?:string) => {
  let parts = username.split(/[ -]/)
  let initials = ''

  for (var i = 0; i < parts.length; i++) {
    initials += parts[i].charAt(0)
  }

  if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '')
  }

  initials = initials.substring(0, 3).toUpperCase()

  return initials
}

function randomBackgroundColor (seed:any, colors:any) {
  return colors[seed % (colors.length)]
}

function lightenColor(hex:any, amt:any){
      // From https://css-tricks.com/snippets/javascript/lighten-darken-color/
      var usePound = false

      if (hex[0] === '#') {
        hex = hex.slice(1)
        usePound = true
      }

      var num = parseInt(hex, 16)
      var r = (num >> 16) + amt

      if (r > 255) r = 255
      else if (r < 0) r = 0

      var b = ((num >> 8) & 0x00FF) + amt

      if (b > 255) b = 255
      else if (b < 0) b = 0

      var g = (num & 0x0000FF) + amt

      if (g > 255) g = 255
      else if (g < 0) g = 0

      return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

function onImgError (evt:any) {
  imgError.value = true
}

</script>

<template>
<div class="vue-avatar--wrapper" :style="[style, customStyle]" aria-hidden="true">
  <img v-if="isImage" style="display: none" :src="src" @error="onImgError"/>
  <span v-else>{{ userInitial }}</span>
</div>
</template>

