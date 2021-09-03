<template>
  <layout @onToggleMode="onToggleMode" :mode="themeSign">
    <template v-slot:title="{ mode }">
      <h1>Theme：{{ !mode ? 'Light' : 'Dark' }}</h1>
      <div
        :class="['HeartAnimation', { 'like-active': like }]"
        @click="handleClickToLick"
      />
    </template>
  </layout>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Home',
});
</script>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { defineComponent, inject, ref } from 'vue';
import { Layout } from '@/components';
import Provider from '@/provider';

// 注入 切换主题 主题
const onToggleMode = <() => void>inject(Provider.ToggleThemeMode);
const themeSign = <Ref<boolean>>inject(Provider.ThemeMode);

// 赞
const like = ref(false);
const handleClickToLick = () => (like.value = !like.value);
</script>

<style lang="less" scoped>
.HeartAnimation {
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
