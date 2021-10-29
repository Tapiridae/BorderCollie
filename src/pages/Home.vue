<template>
  <Layout @onToggleMode="onToggleMode" :mode="themeSign">
    <template v-slot:title>
      <router-view />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { inject } from 'vue';
import Provider from '@/provider';
import { Layout } from '@/components';

// 注入 切换主题 主题
const onToggleMode = <() => void>inject(Provider.ToggleThemeMode);
const themeSign = <Ref<boolean>>inject(Provider.ThemeMode);
</script>

<style lang="less" scoped></style>
