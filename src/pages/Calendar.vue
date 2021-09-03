<template>
  <n-calendar
    @update:value="handleUpdateValue"
    #="{ year, month, date }"
    v-model:value="value"
    :is-date-disabled="isDateDisabled"
  >
    {{ year }}-{{ month }}-{{ date }}
  </n-calendar>
</template>

<script lang="ts">
type HandleUpdateValue = (
  timestamp: number, // 时间戳
  {}: { year: number; month: number; date: number }
) => void;

type IsDateDisabled = (timestamp: number | Date) => boolean;
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import { useMessage } from 'naive-ui';
import { isYesterday, addDays } from 'date-fns';

const message = useMessage();
const value = ref(addDays(Date.now(), 1));

// 更新日期
const handleUpdateValue: HandleUpdateValue = (_, { year, month, date }) =>
  message.success(`${year}-${month}-${date}`);

// 是否禁用
const isDateDisabled: IsDateDisabled = (timestamp) => isYesterday(timestamp);
</script>

<style></style>
