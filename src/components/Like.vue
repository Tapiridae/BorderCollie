<template>
  <div
    :class="['like-animation', { 'like-active': like }]"
    @click="handleClickToLick"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 赞
const like = ref(false);
const handleClickToLick = () => (like.value = !like.value);
</script>

<style lang="less">
.like-animation {
  position: absolute;
  background-image: url('../assets/web_heart_animation_edge.png');
  background-position: left;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -47.5%);
  transform: translate(-50%, -47.5%);
}

.like-active {
  animation-timing-function: steps(28);
  animation-name: heart-burst;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  display: inline-block;
  animation-fill-mode: forwards;
}

@keyframes heart-burst {
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
}
</style>
