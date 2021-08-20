<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <sidebar></sidebar>
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui';

import { Sidebar } from './components';

export default defineComponent({
  name: 'App',
  components: { NConfigProvider, Sidebar },
  setup() {
    return {
      zhCN,
      dateZhCN,
      darkTheme,
      theme: ref(darkTheme),
    };
  },
});
</script>

<style></style>
