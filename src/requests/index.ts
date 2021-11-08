import { createFetch } from '@vueuse/core';
import { WebAPI } from '../constants';

const useFetch = createFetch({
  baseUrl: `${WebAPI.DOMAIN}`,
  options: {
    async beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        app_id: WebAPI.APP_ID,
        app_secret: WebAPI.APP_SECRET,
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      };
      return { options };
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
});

export default useFetch;
