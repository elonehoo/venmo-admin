<script setup lang="ts">

const props = withDefaults(defineProps<{
  //! user name
  username:string,
  //! is radius
  isRadius?:boolean,
  //! is image
  isImage:boolean
  //! src
  src?:string,
  //! size
  size?:number,
  //! background color
  backgroundColor?:string,
  //! lighten
  lighten?:number,
  //! font color
  fontColor?:string
}>(),{
  isRadius:true,
  isImage:true,
  src:'https://github.com/xiaoxunyao.png',
  size:50,
  lighten:80
})

const backgroundColors = ref([
  '#F44336', '#FF4081', '#9C27B0', '#673AB7',
  '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', 
  '#009688', '#4CAF50', '#8BC34A', '#CDDC39', 
  '#FFC107', '#FF9800', '#FF5722', '#795548', 
  '#9E9E9E', '#607D8B'
])

/**
 * Judging background color based on username
 * @param seed user name length
 */
function randomBackgroundColor (seed:number) {
  if(!props.isImage){
    return props.backgroundColor || backgroundColors.value[seed % (backgroundColors.value.length)]
  }else{
    return ''
  }
}

/**
 * Generate font color based on background color
 */
function radnomFontColor(){
  if (!props.isImage) {
    return props.fontColor || lightenColor(randomBackgroundColor(props.username.length), props.lighten)
  }
}

function lightenColor(hex:any,amt:any){
  // From https://css-tricks.com/snippets/javascript/lighten-darken-color/
  var usePound = false

  if (hex[0] === '#') {
    hex = hex.slice(1)
    usePound = true
  }

  var num = parseInt(hex, 16)
  var r = (num >> 16) + amt

  if (r > 255) {
    r = 255
  }else if (r < 0) {
    r = 0
  }

  var b = ((num >> 8) & 0x00FF) + amt

  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }

  var g = (num & 0x0000FF) + amt

  if (g > 255) {
    g = 255
  }else if (g < 0) {
    g = 0
  }

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

function getInitials(username:string):string{
  if(props.isImage){
    return ''
  }else{
    let parts = username.split(/[ -]/)
    let initials = ''

    for (var i = 0; i < parts.length; i++) {
      initials += parts[i].charAt(0)
    }

    if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
      initials = initials.replace(/[a-z]+/g, '')
    }

    initials = initials.substring(0, 3).toUpperCase()
    console.log("initials" + initials)
    return initials
  }
}

</script>

<template>
  <div class="avatar-round">
    <img v-if="isImage" :src="props.src" :style="{'display':'inline','width':props.size + 'px','height':props.size+'px'}" alt="" />
    <span v-else class="text-avatar" :style="{'width':props.size + 'px','height':props.size+'px'}">{{getInitials(props.username)}}</span>
  </div>
</template>

<style scoped>
.avatar-round{
  background: v-bind('randomBackgroundColor(props.username.length)');
  width: v-bind('props.size')px;
  height: v-bind('props.size')px;
  border-radius: v-bind('props.isRadius ? "50%":"0%"');
  
  font-weight: bold;
  line-height: v-bind('props.size + Math.floor(props.size / 20)')px;

  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.text-avatar{
  color: v-bind('radnomFontColor()');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

