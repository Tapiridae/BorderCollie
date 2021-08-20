<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <layout></layout>
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
    return {
      zhCN,
      dateZhCN,
      darkTheme,
      theme: ref(null),
    };
  },
});
</script>

<style></style>
