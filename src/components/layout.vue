<template>
  <n-layout class="layout-container">
    <n-layout-header class="layout-header" bordered>
      Header
      <div class="switch-mode">
        <Icon>
          <DarkModeRound v-show="!mode" @click="handleToggleDarkMode" />
          <LightModeOutlined v-show="mode" @click="handleToggleLightMode" />
        </Icon>
      </div>
    </n-layout-header>
    <n-layout class="layout-side" position="absolute" has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
      >
        <n-h2>Sidebar</n-h2>
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <n-h2>Content</n-h2>
        <slot name="title" :mode="mode"></slot>
      </n-layout>
    </n-layout>
    <n-layout-footer class="layout-footer" position="absolute" bordered>
      Footer
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
export default defineComponent({
  name: 'sidebar',
});
</script>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import Provider from '@/provider';
import { Icon } from '@vicons/utils';
import { DarkModeRound, LightModeOutlined } from '@vicons/material';

const props = defineProps<{ mode: boolean }>();
const emit = defineEmits<{
  (e: 'onToggleMode', mode: boolean): void;
}>();

const mode = Provider.globalThemeMode;

// 深色模式
const handleToggleDarkMode = () => emit('onToggleMode', true);

// 明亮模式
const handleToggleLightMode = () => emit('onToggleMode', false);
</script>

<style lang="less" scoped>
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
