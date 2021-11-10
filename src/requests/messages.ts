import { WebAPI } from '@/constants';

// 包裹一层 塞入Headers失效, 拼接url上
const wrapperAPI: (url: string) => string = (U) => {
  if (U.includes('?'))
    return U + `&app_id=${WebAPI.APP_ID}&app_secret=${WebAPI.APP_SECRET}`;
  return U + `?app_id=${WebAPI.APP_ID}&app_secret=${WebAPI.APP_SECRET}`;
};

/**
 * @description 历史的今天
 */
export const getHistoryToday: (type?: number) => string = (T = 0) =>
  wrapperAPI(`history/today?type=${T}`);

/**
 * @description 每日最新新闻 所有新闻类型
 */
export const getNewsTypes: () => string = () => wrapperAPI('news/types');

/**
 * @description 每日最新新闻 根据新闻类型获取新闻列表
 */
export const getDailyNews: (
  typeId: string | number,
  page: string | number
) => string = (T, P) => wrapperAPI(`news/list?typeId=${T}&page=${P}`);

/**
 * @description 每日最新新闻 获取新闻详情
 */
export const getDailyNewsDetails: (newsId: string) => string = (N) =>
  wrapperAPI(`news/details?newsId=${N}`);
