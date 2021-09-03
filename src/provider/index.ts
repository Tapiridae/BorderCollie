import type { InjectionKey, Ref } from 'vue';
import { useStorage } from '@vueuse/core';

/**
 * InjectionKey
 */
const ToggleThemeMode: InjectionKey<(mode: boolean) => void> = Symbol();
const ThemeMode: InjectionKey<Ref<boolean>> = Symbol();

/**
 * GlobalState
 */
const globalThemeMode = useStorage('theme', false);
const globalOnlineStatus = useStorage('isOnline', false);
const globalUserName = useStorage('userName', '赵嘉伟');

export default {
  ToggleThemeMode,
  ThemeMode,
  globalThemeMode,
  globalOnlineStatus,
  globalUserName,
};
