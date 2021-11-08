<template>
  <Layout @onToggleMode="onToggleMode" :mode="themeSign">
    <template v-slot:title>
      <router-view />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import type { HitoryTodayType } from '@/types';
import { inject, reactive, watchPostEffect } from 'vue';
import Provider from '@/provider';
import { Layout } from '@/components';
import { useWebSocket } from '@vueuse/core';
import { WebSocketCustomerService } from '@/constants';
import useFetch from '@/requests';
import { getHistoryToday } from '@/requests/messages';

// 获取历史今天
const { data: _data } = useFetch(getHistoryToday()).get();

const homeData = reactive({ historyData: <HitoryTodayType>{} });

// 监听获取历史今天数据
watchPostEffect(() => {
  if (!_data?.value) return;
  const { data } = JSON.parse(<string>_data?.value);
  homeData.historyData = data;
  console.log(data);
});

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
