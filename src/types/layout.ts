// 布局菜单
interface LayoutMenuOptions {
  label: string | (() => void);
  key: string;
  [x: string]: string | (() => void);
}

// Header dropdown
interface HeaderDropDownOptionsType {
  key: 'SignOut' | 'Hurry';
  label: string;
}

export type { LayoutMenuOptions, HeaderDropDownOptionsType };
