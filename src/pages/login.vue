<template>
  <div class="login-layout">
    <div class="login-card-container">
      <n-card hoverable>
        <n-space vertical size="large">
          <n-avatar round :size="88">{{ userName }}</n-avatar>
          <n-input
            v-model:value="userName"
            type="text"
            placeholder="请输入用户名"
            round
          />
          <n-input
            v-model:value="password"
            type="password"
            placeholder="请输入密码"
            show-password-toggle
            :maxlength="16"
            round
          />
          <n-button
            round
            type="primary"
            ghost
            :loading="loading"
            @click="handleClick2Login"
          >
            登录
          </n-button>
        </n-space>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Login',
});
</script>

<script lang="ts" setup>
import type { MessageReactive } from 'naive-ui';
import { defineComponent, onMounted, ref } from 'vue';
import { useMessage } from 'naive-ui';

const color = ref('');
const message = useMessage();
const userName = ref('WEISHAODAREN');
const password = ref('');
const loading = ref(false);

/**
 * @description 点击登录
 */
const handleClick2Login = () => {
  if (userName.value.trim() && password.value.trim()) {
    let _message: MessageReactive;
    loading.value = true;
    _message = message.loading('加载中...');

    setTimeout(() => {
      loading.value = false;
      (<any>_message).type = 'success';
      _message.content = '登录成功';
    }, 1500);
  } else {
    message.warning('注意填写完整哦');
  }
};

onMounted(() => {
  setInterval(() => {
    color.value = `rgba(${parseInt(String(Math.random() * 256))},${parseInt(
      String(Math.random() * 256)
    )}, ${parseInt(String(Math.random() * 256))} )`;
  }, 500);
});
</script>

<style lang="less" scoped>
.login-layout {
  position: relative;
  widows: 100vw;
  height: 100vh;
  background-color: v-bind(color);
  .login-card-container {
    position: absolute;
    top: 45%;
    left: 20%;
    transform: translate(-25%, -45%);
    text-align: center;
    width: 400px;
  }
}
</style>
