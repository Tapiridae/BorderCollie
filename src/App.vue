<template lang="pug">
n-config-provider(:locale="zhCN" :date-locale="dateZhCN" :theme="theme")
  layout(@onToggleMode="onToggleMode" :mode="themeSign")
  n-global-style
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
});
</script>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui';
import { Layout } from '@/components';

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
