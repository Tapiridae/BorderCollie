<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
});
</script>

<script lang="ts" setup>
import { defineComponent, ref, provide } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui';
import Provider from '@/provider';

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

// 提供 切换主题方法 主题变量
provide(Provider.ToggleThemeMode, onToggleMode);
provide(Provider.ThemeMode, themeSign);
</script>
