<template>
  <n-layout class="layout-container">
    <n-layout-header class="layout-header" bordered>Header</n-layout-header>
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

export default defineComponent({
  name: 'sidebar',
  setup() {
    console.log(`this is fuckin sidebar`);
  },
});
</script>

<style lang="less" scoped>
.layout-container {
  height: 100vh;

  .layout-header {
    height: 64px;
    padding: 24px;
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
