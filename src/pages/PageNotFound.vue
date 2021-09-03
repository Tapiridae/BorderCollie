<template>
  <div class="result-container">
    <n-result
      status="404"
      title="404 资源不存在"
      size="huge"
      description="生活总归带点荒谬"
    >
      <template #footer>
        <n-button @click="handleClickToHome">回家吧，别再乱跑了</n-button>
      </template>
    </n-result>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const handleClickToHome = () => router.push('/home');
</script>

<style lang="less" scoped>
.result-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
