import { createApp } from 'vue';
import { createPinia } from 'pinia';
import naive from 'naive-ui';

// 通用字体
import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';

import App from './App.vue';
import Router from './router';

createApp(App).use(Router).use(createPinia()).use(naive).mount('#app');
