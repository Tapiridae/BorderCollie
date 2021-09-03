<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref, provide, watchPostEffect } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui';
import { useRouter } from 'vue-router';
import Provider from '@/provider';

const router = useRouter();

// 主题
const theme = ref<object | null>(null);

// 全局监听
watchPostEffect(() => {
  // 不在线 退出登录
  if (!Provider.globalOnlineStatus.value) router.push('/login');
  // 依赖缓存主题
  if (Provider.globalThemeMode.value) theme.value = darkTheme;
  else theme.value = null;
});

// 切换主题
const onToggleMode = (mode: boolean) => {
  Provider.globalThemeMode.value = mode;
  if (mode) theme.value = darkTheme;
  else theme.value = null;
};

// 提供 切换主题方法 主题变量
provide(Provider.ToggleThemeMode, onToggleMode);
provide(Provider.ThemeMode, Provider.globalThemeMode);
</script>
