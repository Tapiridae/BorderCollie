import type { InjectionKey, Ref } from 'vue';

const ToggleThemeMode: InjectionKey<(mode: boolean) => void> = Symbol();
const ThemeMode: InjectionKey<Ref<boolean>> = Symbol();

export default { ToggleThemeMode, ThemeMode };
