<template>
  <n-layout class="layout-container">
    <n-layout-header class="layout-header" bordered>
      <n-page-header subtitle="weishaodaren is so cool">
        <template #avatar>
          <n-avatar
            src="https://avatars.githubusercontent.com/u/45391716?v=4"
          />
        </template>
        <template #extra>
          <n-space>
            <div class="switch-mode">
              <icon div v-if="!mode" @click="handleToggleDarkMode"
                ><DarkModeRound
              /></icon>
              <icon v-else @click="handleToggleLightMode"
                ><LightModeOutlined
              /></icon>
            </div>
            <n-dropdown
              :options="HeaderDropDownOptions"
              placement="bottom-start"
              :show-arrow="true"
              @select="(key: HeaderDropDownOptionsType['key']) => onSelect(key)"
            >
              <n-button :bordered="false" style="padding: 0 4px">
                <n-avatar round>{{
                  userName.slice(userName.length - 2)
                }}</n-avatar>
              </n-button>
            </n-dropdown>
          </n-space>
        </template>
      </n-page-header>
    </n-layout-header>
    <n-layout class="layout-side" position="absolute" has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="0"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        :native-scrollbar="false"
        :show-collapsed-content="false"
        bordered
      >
        <n-menu
          :inverted="true"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <slot name="title"></slot>
      </n-layout>
    </n-layout>
    <n-layout-footer class="layout-footer" position="absolute" bordered>
      <n-h5>Footer</n-h5>
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts" setup>
import type { HeaderDropDownOptionsType } from '@/types';
import { useMessage } from 'naive-ui';
import Provider from '@/provider';
import { menuOptions } from './sidebar';
import LightModeOutlined from '@vicons/material/LightModeOutlined';
import DarkModeRound from '@vicons/material/DarkModeRound';
import { Icon } from '@vicons/utils';
import { HeaderDropDownOptions } from '@/constants';

const props = defineProps<{ mode: boolean }>();
const emit = defineEmits<{
  (e: 'onToggleMode', mode: boolean): void;
}>();

const message = useMessage();
// 全局主题模式
const mode = Provider.globalThemeMode;
// 用户名
const userName = Provider.globalUserName;

// 深色模式
const handleToggleDarkMode: () => void = () => emit('onToggleMode', true);

// 浅色模式
const handleToggleLightMode: () => void = () => emit('onToggleMode', false);

// 菜单操作
const onSelect: (key: HeaderDropDownOptionsType['key']) => void = (K) => {
  switch (K) {
    // 退出登录
    case 'SignOut': {
      Provider.globalOnlineStatus.value = false;
      break;
    }
    case 'Hurry': {
      message.info('催你个头 !');
      break;
    }
    default:
      break;
  }
};
</script>

<style lang="less" scoped>
.layout-container {
  height: 100vh;

  .layout-header {
    height: 64px;
    line-height: 64px;
    padding: 12px;

    .switch-mode {
      font-size: 30px;

      :hover {
        cursor: pointer;
      }
    }
  }

  .layout-side {
    top: 64px;
    bottom: 64px;
  }

  .layout-footer {
    height: 64px;
    padding: 24px;
  }
}
</style>
