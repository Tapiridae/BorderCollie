<template>
  <n-layout class="layout-container">
    <n-layout-header class="layout-header" bordered>
      <n-h5>Header</n-h5>
      <div class="switch-mode">
        <span v-show="!mode" @click="handleToggleDarkMode"
          ><icon><DarkModeRound /></icon
        ></span>
        <span v-show="mode" @click="handleToggleLightMode"
          ><icon><LightModeOutlined /></icon
        ></span>
      </div>
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
import Provider from '@/provider';
import { menuOptions, routeProps } from './sidebar';
import LightModeOutlined from '@vicons/material/LightModeOutlined';
import DarkModeRound from '@vicons/material/DarkModeRound';
import { Icon } from '@vicons/utils';

const props = defineProps<{ mode: boolean }>();
const emit = defineEmits<{
  (e: 'onToggleMode', mode: boolean): void;
}>();

// 全局主题模式
const mode = Provider.globalThemeMode;

// 深色模式
const handleToggleDarkMode = () => emit('onToggleMode', true);

// 明亮模式
const handleToggleLightMode = () => emit('onToggleMode', false);
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}

.layout-container {
  height: 100vh;

  .layout-header {
    height: 64px;
    padding: 24px;

    .switch-mode {
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 24px;
      line-height: 64px;

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
