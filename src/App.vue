<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <layout @onToggleMode="onToggleMode" :mode="themeSign"></layout>
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui';

import { Layout } from './components';

export default defineComponent({
  name: 'App',
  components: { NConfigProvider, Layout },
  setup() {
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

      
    return {
      zhCN,
      dateZhCN,
      darkTheme,
      theme,
      themeSign,
      onToggleMode,
    };
  },
});
</script>

<style></style>
