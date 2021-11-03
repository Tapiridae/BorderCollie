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
import { useWebSocket } from '@vueuse/core';
import { WebSocketCustomerService } from '@/constants';

// 通知WS
const { status, data, send, open, close } = useWebSocket(
  WebSocketCustomerService.NOTIFICATION
);

// 获取Token
const Token = Provider.globalToken.value;
const params = {
  action: 'auth',
  token: Token,
};
send(JSON.stringify(params));

// 注入 切换主题 主题
const onToggleMode = <() => void>inject(Provider.ToggleThemeMode);
const themeSign = <Ref<boolean>>inject(Provider.ThemeMode);
</script>

<style lang="less" scoped></style>
