<template>
  <div class="login-layout" v-if="isMounted">
    <div class="login-svg">
      <svg viewBox="0 0 800 600">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="35%" class="text--line">
            嗨 👋
          </text>
          <text text-anchor="middle" x="50%" y="68%" class="text--line2">
            {{ userName }}
          </text>
        </symbol>
        <g class="g-ants">
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
        </g>
      </svg>
    </div>
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
import { useRouter } from 'vue-router';
import { useMessage } from 'naive-ui';

const message = useMessage();
const router = useRouter();

const userName = ref('赵嘉伟');
const password = ref('');
const loading = ref(false);
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});

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
      // 跳转首页
      router.push('/home');
    }, 1500);
  } else {
    message.warning('注意填写完整哦');
  }
};
</script>

<style lang="less" scoped>
.login-layout {
  position: relative;
  widows: 100vw;
  height: 100vh;

  .login-svg {
    background: #000;
    background-size: 0.12em 100%;
    font: 16em/1 Arial;

    .text--line {
      font-size: 0.5em;
    }

    svg {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .text-copy {
      fill: none;
      stroke: white;
      stroke-dasharray: 7% 28%;
      stroke-width: 3px;
      -webkit-animation: stroke-offset 9s infinite linear;
      animation: stroke-offset 9s infinite linear;

      &:nth-child(1) {
        stroke: #360745;
        stroke-dashoffset: 7%;
      }

      &:nth-child(2) {
        stroke: #d61c59;
        stroke-dashoffset: 14%;
      }

      &:nth-child(3) {
        stroke: #e7d84b;
        stroke-dashoffset: 21%;
      }

      &:nth-child(4) {
        stroke: #efeac5;
        stroke-dashoffset: 28%;
      }

      &:nth-child(5) {
        stroke: #1b8798;
        stroke-dashoffset: 35%;
      }
    }

    @-webkit-keyframes stroke-offset {
      50% {
        stroke-dashoffset: 35%;
        stroke-dasharray: 0 87.5%;
      }
    }

    @keyframes stroke-offset {
      50% {
        stroke-dashoffset: 35%;
        stroke-dasharray: 0 87.5%;
      }
    }
  }

  .login-card-container {
    position: absolute;
    top: 45%;
    left: 20%;
    transform: translate(-25%, -45%);
    text-align: center;
    width: 450px;
  }
}
</style>
