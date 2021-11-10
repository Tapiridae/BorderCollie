<template>
  <Layout @onToggleMode="onToggleMode" :mode="themeSign">
    <template v-slot:title>
      <!-- Home -->
      <div v-if="isHome">
        <n-space vertical>
          <div v-for="i in homeData.historyData" :key="uuid()">
            <n-gradient-text :size="24" type="warning">
              <n-text depth="3" strong type="success">
                {{ `“ ${i.title} ”` }}
              </n-text>
            </n-gradient-text>
            <n-collapse-transition :show="true" appear>
              <n-blockquote>
                {{ i.details }}
              </n-blockquote>
            </n-collapse-transition>
            <n-divider></n-divider>
          </div>
        </n-space>
      </div>
      <!-- Other -->
      <router-view v-if="!isHome" />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import type { HitoryTodayType } from '@/types';

import { inject, ref, reactive, watchPostEffect, watch } from 'vue';
import { useRoute } from 'vue-router';

import Provider from '@/provider';
import { Layout } from '@/components';
import { useWebSocket } from '@vueuse/core';
import { WebSocketCustomerService } from '@/constants';
import useFetch from '@/requests';
import { getHistoryToday } from '@/requests/messages';
import { uuid } from '@/utils';

/**
 * ------------------------------------------------------------------
 * --------------------------State-----------------------------------
 * ------------------------------------------------------------------
 */
const { data: _data } = useFetch(getHistoryToday(1)).get(); // 获取历史今天
const Route = useRoute(); // 路由实列
const isHome = ref<boolean>(true); // 是否是主页
// 主页数据
const homeData = reactive({
  historyData: [] as HitoryTodayType['data'],
});

// 监听获取历史今天数据
watchPostEffect(() => {
  if (!_data?.value) return;
  const { data } = <Pick<HitoryTodayType, 'data'>>(
    JSON.parse(<string>_data?.value)
  );
  data.forEach((_) => (_['key'] = uuid()));
  homeData.historyData = data;
});

// 监听路由
watchPostEffect(() => {
  const { name } = Route;
  isHome.value = name === 'Home';
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
