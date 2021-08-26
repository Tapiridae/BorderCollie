<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <layout @onToggleMode="onToggleMode" :mode="themeSign" />
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
});
</script>

<script lang="ts" setup>
import { defineComponent, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui';
import { Layout } from '@/components';

onMounted(() => {
  console.log(`onMounted`);
});

onUpdated(() => {
  console.log('onUpdated');
});

onUnmounted(() => {
  console.log('onUnmounted');
});

// 主题
const theme = ref<object | null>(null);
// 主题标记
const themeSign = ref<boolean>(false);
// 切换主题
const onToggleMode = (mode: boolean) => {
  themeSign.value = mode;
  if (mode) theme.value = darkTheme;
  else theme.value = null;
};
</script>
