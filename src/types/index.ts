// 布局菜单
interface LayoutMenuOptions {
  label: string | (() => void);
  key: string;
  [x: string]: string | (() => void);
}

// 接受客服信息类型
interface AcceptMessagesType {
  type: string;
  title: string;
  content: string;
  time: string;
}

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

// 新闻详情
interface NewsDetailsType extends CommonAPIType {
  data: Array<{
    content: string;
    cover: string;
    docid: string;
    images: string[];
    ptime: Date;
    source: string;
    title: string;
  }>;
}

export type {
  LayoutMenuOptions,
  AcceptMessagesType,
  HitoryTodayType,
  NewsTypesType,
  NewsListType,
  NewsDetailsType,
};
