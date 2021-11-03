<template>
  <n-scrollbar style="max-height: 400px">
    <n-timeline>
      <template v-for="item in messages" :key="item.time">
        <n-timeline-item
          :type="item.type"
          :title="item.title"
          :content="item.content"
          :time="item.time"
        />
      </template>
    </n-timeline>
  </n-scrollbar>
  <n-space style="margin-top: 30px">
    <n-input
      style="width: 500px"
      type="textarea"
      size="large"
      round
      :autosize="{
        minRows: 3,
      }"
      v-model:value="inputValue"
      placeholder="试着聊聊天"
    />
    <n-button type="primary" @click="onSend" :disabled="buttonDisabled"
      >发送</n-button
    >
    <n-button type="primary" @click="onClose" :disabled="buttonDisabled"
      >离开</n-button
    >
  </n-space>
</template>

<script lang="ts" setup>
import { useWebSocket, useDebounceFn } from '@vueuse/core';
import { ref, watch, reactive } from 'vue';
import { WebSocketCustomerService } from '@/constants';
import { format, fromUnixTime } from 'date-fns';
import Provider from '@/provider';
import type { AcceptMessagesType } from '@/types';

// 聊天室WS
const { data, send, close } = useWebSocket(
  WebSocketCustomerService.CHAT_ROOM + WebSocketCustomerService.UUID
);

// 获取Token
const Token = Provider.globalToken.value;
const params = {
  action: 'auth',
  token: Token,
};
send(JSON.stringify(params));

/**
 * ------------------------------------------------------------------
 * --------------------------State-----------------------------------
 * ------------------------------------------------------------------
 */
const inputValue = ref<string>(''); // 输入框值
const isSended = ref<boolean>(false); // 是否发送
const buttonDisabled = ref<boolean>(false); // 按钮是否禁用
const messages = reactive<AcceptMessagesType[]>([]); // 聊天记录

/**
 * Function
 * @description 发送事件 300ms 防抖
 */
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

/**
 * Function
 * @description 关闭WS
 */
const onClose = useDebounceFn(() => {
  close();
  // 按钮禁用
  buttonDisabled.value = true;
}, 300);

// 监听收到的数据
watch(data, (value) => {
  if (!value) return;
  const {
    text,
    createTimestamp,
    // author: { userName },
  } = JSON.parse(value);

  if (!createTimestamp || !text) return;
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

<style lang="less" scoped></style>
