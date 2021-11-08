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
  }>;
}

export type { LayoutMenuOptions, AcceptMessagesType, HitoryTodayType };
