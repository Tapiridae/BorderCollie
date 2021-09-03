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

<script lang="ts" setup>
import { ref } from 'vue';
import { useMessage } from 'naive-ui';
import { isYesterday, addDays } from 'date-fns';

console.log(123)

const message = useMessage();
const value = ref(addDays(Date.now(), 1));
const handleUpdateValue = (_, { year, month, date }) => {
  message.success(`${year}-${month}-${date}`);
};
const isDateDisabled = (timestamp) => {
  if (isYesterday(timestamp)) {
    return true;
  }
  return false;
};
</script>

<style></style>
