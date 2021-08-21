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
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
      >
        <n-h2>Sidebar</n-h2>
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <n-h2>Content</n-h2>
      </n-layout>
    </n-layout>
    <n-layout-footer class="layout-footer" position="absolute" bordered>
      Footer
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@vicons/utils';
import { DarkModeRound, LightModeOutlined } from '@vicons/material';

export default defineComponent({
  name: 'sidebar',
  components: { Icon, DarkModeRound, LightModeOutlined },
  props: {
    mode: Boolean,
  },
  setup(props, ctx) {
    // 深色模式
    const handleToggleDarkMode = () => 
      ctx.emit('onToggleMode', true);

    // 明亮模式
    const handleToggleLightMode = () => 
      ctx.emit('onToggleMode', false);

    return {
      handleToggleDarkMode,
      handleToggleLightMode,
    };
  },
});
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

      svg :hover {
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
