import type { LayoutMenuOptions } from '@/types';
import { h } from 'vue';
import { RouterLink } from 'vue-router';

const menuOptions: LayoutMenuOptions[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/home/calendar',
        },
        { default: () => '日历' }
      ),
    key: 'calendar',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/home/news',
        },
        { default: () => '新鲜事儿' }
      ),
    key: 'news',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/home/customerService',
        },
        { default: () => '客服' }
      ),
    key: 'customerService',
  },
];

const routeProps = {
  ...(<any>RouterLink).props,
};

export { menuOptions, routeProps };
