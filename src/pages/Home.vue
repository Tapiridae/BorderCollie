<template>
  <Layout @onToggleMode="onToggleMode" :mode="themeSign">
    <template v-slot:title>
      <!-- Home -->
      <div v-show="isHome">
        <n-gradient-text type="info"> Live Forever </n-gradient-text>
        <n-gradient-text type="danger"> Live Forever </n-gradient-text>
        <br />
        <n-gradient-text :size="24" type="warning">
          Married with Children
        </n-gradient-text>
        <br />
        <n-gradient-text :size="24" type="success">
          Back in the USSR
        </n-gradient-text>
      </div>
      <!-- Other -->
      <router-view v-show="!isHome" />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import type { HitoryTodayType } from '@/types';

import { inject, ref, reactive, watchPostEffect } from 'vue';
import { useRoute } from 'vue-router';

import Provider from '@/provider';
import { Layout } from '@/components';
import { useWebSocket } from '@vueuse/core';
import { WebSocketCustomerService } from '@/constants';
import useFetch from '@/requests';
import { getHistoryToday } from '@/requests/messages';
import { uuid } from '@/utils';

// 获取历史今天
const { data: _data } = useFetch(getHistoryToday()).get();
const { name } = useRoute();
// 是否是主页
const isHome = ref<boolean>(name === 'Home');
// 主页数据
const homeData = reactive({
  historyData: {} as Omit<HitoryTodayType, 'msg' | 'code'>,
});

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
