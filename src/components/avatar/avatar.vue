<script setup lang="ts">

const props = withDefaults(defineProps<{
  username:string,
  isRadius?:boolean,
  isImage:boolean
  src?:string,
  size?:number
}>(),{
  isRadius:true,
  isImage:true,
  src:'https://github.com/xiaoxunyao.png',
  size:50
})

const backgroundColors = ref([
  '#F44336', '#FF4081', '#9C27B0', '#673AB7',
  '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', 
  '#009688', '#4CAF50', '#8BC34A', '#CDDC39', 
  '#FFC107', '#FF9800', '#FF5722', '#795548', 
  '#9E9E9E', '#607D8B'
])

function randomBackgroundColor (seed:number) {
      return backgroundColors.value[seed % (backgroundColors.value.length)]
}

function getInitials(username?:string):string{
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
  /* color: #fff; */
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

