<template>H</template>

<script lang="ts" setup>
import { useWebSocket } from '@vueuse/core';
import { onMounted } from 'vue';
import { WebSocketCustomerService } from '@/constants.js';

const { status, data, send, close } = useWebSocket(
  WebSocketCustomerService.wss('')
);
onMounted(() => {});
</script>

<style lang="less" scoped></style>
