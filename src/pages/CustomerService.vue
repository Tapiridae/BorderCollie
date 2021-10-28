<template>
  <n-timeline class="time-line-container">
    <template v-for="item in messages" :key="item.time">
      <n-timeline-item
        :type="item.type"
        :title="item.title"
        :content="item.content"
        :time="item.time"
        format="yyyy-MM-dd hh:mm:ss"
      />
    </template>
  </n-timeline>
  <n-space>
    <n-input
      style="width: 500px"
      type="textarea"
      size="large"
      round
      :autosize="{
        minRows: 3,
      }"
      :value="inputValue"
      @input="onChange"
      placeholder="试着聊聊天"
    />
    <n-button type="primary" @click="onSend">发送</n-button>
  </n-space>
</template>

<script lang="ts" setup>
import { useWebSocket, useDebounceFn } from '@vueuse/core';
import { ref, watch, reactive } from 'vue';
import { WebSocketCustomerService } from '@/constants';
import { format, fromUnixTime } from 'date-fns';

import type { AcceptMessagesType } from '@/types';

const { status, data, send, open, close } = useWebSocket(
  WebSocketCustomerService.WSS + '535fe8a3d9fb44e0bfc50ebbdb6b4b32'
);

const params = {
  action: 'auth',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrZXl1IiwiaWF0IjoxNjM1NDEwNTI3LCJleHAiOjE2MzU0OTY5MjcsInVpZCI6NDV9.YGG-Yy4mbh1ncIoiF77CkSI8sQIWzo0oGxzk-WANomw',
};
send(JSON.stringify(params));

// 输入框值
const inputValue = ref('');
const isSended = ref(false);

// 聊天记录
const messages = reactive<AcceptMessagesType[]>([]);

// 输入框变化
const onChange = (data: string) => (inputValue.value = data);

// 发送事件 300ms 防抖
const onSend = useDebounceFn(() => {
  if (!inputValue.value) return;

  const sendMessages = {
    action: 'sendMessage',
    text: inputValue.value,
  };
  send(JSON.stringify(sendMessages));
  isSended.value = true;

  setTimeout(() => {
    // 重置状态
    isSended.value = false;
    inputValue.value = '';
  }, 200);
}, 300);

// 监听收到的数据
watch(data, (value) => {
  if (!value) return;
  const { text, createTimestamp } = JSON.parse(value);
  const message = {
    type: 'success',
    title: 'Ta',
    content: text,
    time: format(fromUnixTime(createTimestamp), 'yyyy-MM-dd hh:mm:ss'),
  };

  // 推送消息
  messages.push(message);
});

// 监听发送的数据
watch(isSended, (value) => {
  if (!value) return;
  const message = {
    type: 'info',
    title: '我',
    content: inputValue.value,
    time: format(Date.now(), 'yyyy-MM-dd hh:mm:ss'),
  };

  // 推送消息
  messages.push(message);
});
</script>

<style lang="less" scoped>
.time-line-container {
  max-height: 400px;
  overflow: auto;
}
</style>
