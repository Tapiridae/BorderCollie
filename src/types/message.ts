// 接受客服信息类型
interface AcceptMessagesType {
  type: string;
  title: string;
  content: string;
  time: string;
}

// 基础API
interface CommonAPIType {
  code: number;
  msg: string;
}

// 历史上的今天
interface HitoryTodayType extends CommonAPIType {
  data: Array<{
    picUrl?: string;
    title: string;
    year: string;
    month: string;
    day: string;
    details: string;
    key: string;
  }>;
}

// 新闻类型列表
interface NewsTypesType extends CommonAPIType {
  data: Array<{
    typeId: number;
    typeName: string;
  }>;
}

// 指定类型 新闻列表
interface NewsListType extends CommonAPIType {
  data: Array<{
    title: string;
    digest: string;
    imgList: string[] | null;
    newsId: string;
    postTime: Date;
    source: string;
    videoList: string[] | null;
  }>;
}

// 新闻详情图片类型
interface NewsDetailImagesType {
  imgSrc: string;
  position: string;
  size: string;
}

// 新闻详情
interface NewsDetailsType extends CommonAPIType {
  data: {
    content: string;
    cover: string;
    docid: string;
    images: NewsDetailImagesType[];
    ptime: Date;
    source: string;
    title: string;
  };
}

// 节假日，万年历
interface Holiday extends CommonAPIType {
  data: Array<{
    avoid: string;
    chineseZodiac: string;
    constellation: string;
    date: string;
    dayOfYear: number;
    indexWorkDayOfMonth: number;
    lunarCalendar: string;
    solarTerms: string;
    suit: string;
    type: number;
    typeDes: string;
    weekDay: number;
    weekOfYear: number;
    yearTips: string;
  }>;
}

export type {
  AcceptMessagesType,
  HitoryTodayType,
  NewsTypesType,
  NewsListType,
  NewsDetailsType,
  Holiday,
};
