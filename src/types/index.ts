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

export type { LayoutMenuOptions, AcceptMessagesType };
