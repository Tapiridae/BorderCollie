import { WebAPI } from '@/constants';

// 包裹一层 塞入Headers失效, 拼接url上
const wrapperAPI = (API: string) =>
  API + `&app_id=${WebAPI.APP_ID}&app_secret=${WebAPI.APP_SECRET}`;

/**
 * @description 历史的今天
 */
export const getHistoryToday: (type: number) => string = (T) => {
  return wrapperAPI(`history/today?type=${T}`);
};
