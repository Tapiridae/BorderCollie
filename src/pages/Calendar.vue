<template>
  <n-calendar
    @update:value="handleUpdateValue"
    #="{ year, month, date }"
    v-model:value="value"
    :is-date-disabled="isDateDisabled"
  >
    <n-space vertical>
      <n-space justify="space-between">
        <span class="title">
          {{ getValidState(year, month, date)?.lunarCalendar }}
        </span>
        <span>
          {{ getValidState(year, month, date)?.typeDes }}
        </span>
      </n-space>
      <n-space justify="space-between">
        <span>
          {{ getValidState(year, month, date)?.date }}
        </span>
        <span>
          {{ getValidState(year, month, date)?.solarTerms }}
        </span>
      </n-space>
      <span class="suit-text">
        {{ getValidState(year, month, date)?.suit }}
      </span>
      <span class="avoid-text">
        {{ getValidState(year, month, date)?.avoid }}
      </span>
      <n-space justify="space-between">
        {{
          getValidState(year, month, date)?.yearTips
            ? getValidState(year, month, date)?.yearTips + '年'
            : null
        }}
        {{
          getValidState(year, month, date)?.chineseZodiac
            ? '属' + getValidState(year, month, date)?.chineseZodiac
            : null
        }}
        {{ getValidState(year, month, date)?.constellation }}
      </n-space>
    </n-space>
  </n-calendar>
</template>

<script lang="ts">
type HandleUpdateValue = (
  timestamp: number, // 时间戳
  {}: { year: string; month: string; date: string }
) => void;

type IsDateDisabled = (timestamp: number | Date) => boolean;
</script>

<script lang="ts" setup>
import type { Holiday } from '@/types';
import { ref, reactive, watch } from 'vue';
import { useMessage } from 'naive-ui';
import { isYesterday, addDays } from 'date-fns';
import useFetch from '@/requests';
import { getMonthHoliday } from '@/requests/messages';

/**
 * ------------------------------------------------------------------
 * --------------------------State-----------------------------------
 * ------------------------------------------------------------------
 */
const message = useMessage();
const value = ref(addDays(Date.now(), 1));
const holiday = reactive({ data: [] as Holiday['data'] });
// 获取当前时间
const date = new Date(value.value);
const param = String(date.getFullYear()) + String(date.getMonth() + 1);
const { data } = useFetch(getMonthHoliday(param)).get().json();

// 监听返回的数据
watch(data, () => {
  const { data: _data } = <Pick<Holiday, 'data'>>data.value;
  holiday.data = _data;
});

// 获取对应数据
const getValidState: (
  year: string,
  month: string,
  date: string
) => Holiday['data'][0] = (Y, M, D) =>
  holiday.data?.[
    holiday.data?.findIndex(
      ({ date }) =>
        date === `${Y}-${M}-${String(D).length > 1 ? D : '0' + String(D)}`
    )
  ];

// 更新日期
const handleUpdateValue: HandleUpdateValue = (_, { year, month, date }) => {
  const pastDay = getValidState?.(year, month, date)?.dayOfYear;
  pastDay && message.info(`这是今年的第${pastDay}天`);
};

// 是否禁用
const isDateDisabled: IsDateDisabled = (timestamp) => isYesterday(timestamp);
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
}
.suit-text {
  color: #18a058;
}
.avoid-text {
  color: #e88080;
  text-decoration: line-through;
}
</style>
