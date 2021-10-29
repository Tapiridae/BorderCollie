<template>
  <n-layout class="layout-container">
    <n-layout-header class="layout-header" bordered>
      <n-h5>Header</n-h5>
      <div class="switch-mode">
        <span v-show="!mode" @click="handleToggleDarkMode">Dark</span>
        <span v-show="mode" @click="handleToggleLightMode">Light</span>
      </div>
    </n-layout-header>
    <n-layout class="layout-side" position="absolute" has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        :native-scrollbar="false"
        :show-collapsed-content="false"
        bordered
      >
        <router-link active-class="active-link" to="/home"
          ><n-h2>Home</n-h2></router-link
        >
        <router-link active-class="active-link" to="/home/calendar"
          ><n-h2>Calendar</n-h2></router-link
        >
        <router-link active-class="active-link" to="/home/customerService"
          ><n-h2>CustomerServices</n-h2></router-link
        >
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

<script lang="ts">
const routeProps = {
  ...(<any>RouterLink).props,
};
</script>

<script lang="ts" setup>
import { RouterLink, useLink } from 'vue-router';
import Provider from '@/provider';

const props = defineProps<{ mode: boolean }>();
const emit = defineEmits<{
  (e: 'onToggleMode', mode: boolean): void;
}>();

const Link = useLink(routeProps);

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

  .active-link {
    color: red;
    text-emphasis: red;
  }

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
