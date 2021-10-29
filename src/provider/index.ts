import type { InjectionKey, Ref } from 'vue';
import { useStorage } from '@vueuse/core';

/**
 * InjectionKey
 */
const ToggleThemeMode: InjectionKey<(mode: boolean) => void> = Symbol(); // 注入 切换主题方法
const ThemeMode: InjectionKey<Ref<boolean>> = Symbol(); // 注入 主题模式

/**
 * GlobalState
 */
const globalThemeMode = useStorage('theme', false); // 全局主题
const globalOnlineStatus = useStorage('isOnline', false); // 全局在线状态
const globalUserName = useStorage('userName', '用户名'); // 全局用户名
const globalToken = useStorage('token', null);

export default {
  ToggleThemeMode,
  ThemeMode,
  globalThemeMode,
  globalOnlineStatus,
  globalUserName,
  globalToken,
};
