<template>
  <layout @onToggleMode="onToggleMode" :mode="themeSign">
    <template v-slot:title="{ mode }">
      <h1>Theme：{{ !mode ? 'Light' : 'Dark' }}</h1>
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
import { defineComponent, inject } from 'vue';
import { Layout } from '@/components';
import Provider from '@/provider';

// 注入 切换主题 主题
const onToggleMode = <() => void>inject(Provider.ToggleThemeMode);
const themeSign = <Ref<boolean>>inject(Provider.ThemeMode);
</script>

<style lang="less" scoped></style>
