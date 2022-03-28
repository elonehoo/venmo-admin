<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick, provide, onUnmounted } from 'vue'
import { useSidebar } from '../use/useSidebar'

  const { getIsCollapsed: isCollapsed } = useSidebar()

    const scrollRef = ref()
    const scrollBarRef = ref()
    const scrollThumbRef = ref()

    const thumbYPerc = ref(0)
    const thumbHeightPerc = ref(0)

    let cursorY = 0
    let cursorDown = false

    const thumbStyle = computed(() => {
      return {
        height: `${thumbHeightPerc.value}%`,
        transform: `translateY(${thumbYPerc.value}%)`
      }
    })

    const onScrollUpdate = () => {
      if (!scrollRef.value) return
      nextTick(() => {
        updateThumb()
      })
    }

    const onScroll = () => {
      requestAnimationFrame(onScrollUpdate)
    }

    const onClick = (e:any) => {
      const offset = Math.abs(scrollBarRef.value.getBoundingClientRect().y - e.clientY)
      const thumbHalf = scrollThumbRef.value.offsetHeight / 2
      updateScrollTop(offset - thumbHalf)
    }

    const onMouseDown = (e:any) => {
      e.stopImmediatePropagation()
      cursorDown = true
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      cursorY = scrollThumbRef.value.offsetHeight - (e.clientY - scrollThumbRef.value.getBoundingClientRect().y)
    }

    const onMouseMove = (e:any) => {
      if (!cursorDown) return
      const offset = e.clientY - scrollBarRef.value.getBoundingClientRect().y
      const thumbClickPosition = scrollThumbRef.value.offsetHeight - cursorY
      updateScrollTop(offset - thumbClickPosition)
    }

    const onMouseUp = (e:any) => {
      cursorDown = false
      cursorY = 0
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    const updateThumb = () => {
      const heightPerc = scrollRef.value.clientHeight * 100 / scrollRef.value.scrollHeight
      thumbHeightPerc.value = heightPerc < 100 ? heightPerc : 0
      thumbYPerc.value = scrollRef.value.scrollTop * 100 / scrollRef.value.clientHeight
    }

    const updateScrollTop = (y:any) => {
      const scrollPerc = y * 100 / scrollBarRef.value.offsetHeight
      scrollRef.value.scrollTop = scrollPerc * scrollRef.value.scrollHeight / 100
    }

    watch(() => isCollapsed.value, () => {
      onScrollUpdate()
    })

    onMounted(() => {
      onScrollUpdate()
      window.addEventListener('resize', onScrollUpdate)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', onScrollUpdate)
    })

    provide('emitScrollUpdate', onScrollUpdate)
</script>

<template>
<div class="vsm--scroll-wrapper">
  <div class="vsm--scroll-overflow">
    <div
      ref="scrollRef"
      class="vsm--scroll"
      @scroll="onScroll"
    >
      <slot />
    </div>
    <div
      ref="scrollBarRef"
      class="vsm--scroll-bar"
      @mousedown="onClick"
    >
      <div
        ref="scrollThumbRef"
        class="vsm--scroll-thumb"
        :style="thumbStyle"
        @mousedown="onMouseDown"
      />
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
