<template>
  <div>
    <!-- 新闻类型 -->
    <n-space>
      <template v-for="i in news.newsTypes" :key="i.typeId">
        <n-button :type="color" @click="getNews(i.typeId)">{{
          i.typeName
        }}</n-button>
      </template>
    </n-space>
    <!-- 新闻列表 -->
    <div class="masonry">
      <template
        v-for="i in news.newsList"
        :key="i.newsId"
        v-show="news.newsList"
      >
        <n-card :title="i.title" embedded class="item">
          <template #cover>
            <img
              :src="
                Array.isArray(i.imgList) && i.imgList.length > 0
                  ? i.imgList[0]
                  : ''
              "
            />
          </template>
          <template #footer>
            <div class="news-bottom">
              <span>{{ i.source }}</span>
              <span>{{ i.postTime }}</span>
            </div>
          </template>
          <template #action>
            <div class="preview" @click="getNewsDetail(i.newsId)">查看详情</div>
          </template>
        </n-card>
      </template>
    </div>
    <!-- 抽屉 -->
    <n-drawer
      v-model:show="drawerEnabled"
      :width="502"
      placement="right"
      :mask-closable="false"
      v-if="news.details"
    >
      <n-drawer-content
        :title="news.details.title"
        style="overflow: hidden"
        closable
      >
        <n-scrollbar style="max-height: 100vh">
          <!-- 封面 -->
          <n-space>
            <n-image width="500" :src="news.details.cover" />
          </n-space>
          <!-- 报社 日期 -->
          <n-space justify="space-between">
            <n-tag :type="color">{{ news.details.source }}</n-tag>
            <n-tag :type="color">{{ news.details.ptime }}</n-tag>
          </n-space>
          <!-- 内容 -->
          <div v-html="news.details?.content"></div>
          <n-image-group>
            <n-space>
              <n-image
                v-for="i in news.details.images"
                width="100"
                :src="i?.imgSrc"
              />
            </n-space>
          </n-image-group>
        </n-scrollbar>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts" setup>
import useFetch from '@/requests';
import {
  getNewsTypes,
  getDailyNews,
  getDailyNewsDetails,
} from '@/requests/messages';
import { reactive, onMounted, watchPostEffect, ref } from 'vue';
import { randomType } from '@/utils';

import type { NewsTypesType, NewsListType, NewsDetailsType } from '@/types';

/**
 * ------------------------------------------------------------------
 * --------------------------State-----------------------------------
 * ------------------------------------------------------------------
 */
const fetchNewsTypes = useFetch(getNewsTypes()).get().json(); // 获取新闻类型列表
const news = reactive({
  newsTypes: [] as NewsTypesType['data'], // 新闻类型列表
  newsList: [] as NewsListType['data'], // 新闻列表
  details: {} as NewsDetailsType['data'], // 新闻详情
});
const color = ref<string>(''); // 随机颜色
const typeId = ref<string | number>(''); // 新闻类型
const page = ref<number>(1); // 当前分页
const newsId = ref<string>(''); // 新闻id
const drawerEnabled = ref<boolean>(false); // 抽屉状态

// 监听新闻类型数据
watchPostEffect(() => {
  const { data } = fetchNewsTypes;
  if (!data.value) return;
  const { data: _data } = <NewsTypesType>data.value;
  news.newsTypes = _data;
});

// 获取新闻列表
const getNews: (typeId: number) => void = async (T) => {
  typeId.value = T;
  const { execute, data } = useFetch(getDailyNews(T, page.value), {
    immediate: false,
  })
    .get()
    .json();
  await execute();
  const { data: _newsList } = <Pick<NewsListType, 'data'>>data.value;
  news.newsList = _newsList;
};

// 获取新闻详情
const getNewsDetail: (newsId: string) => void = async (N) => {
  newsId.value = N;
  const { execute, data } = useFetch(getDailyNewsDetails(N), {
    immediate: false,
  })
    .get()
    .json();
  await execute();
  const { data: _details } = <Pick<NewsDetailsType, 'data'>>data.value;
  news.details = _details;
  drawerEnabled.value = true;
};

onMounted(() => {
  color.value = randomType();
});
</script>

<style lang="less" scoped>
.n-card {
  max-width: 300px;
}
.masonry {
  width: 100%;
  margin: 20px 0;
  columns: 5;
  column-gap: 30px;

  .item {
    width: 100%;
    break-inside: avoid;
    margin-bottom: 20px;
    &:hover {
      transform: scale(1.01);
      opacity: 0.8;
    }

    .preview {
      cursor: pointer;
    }
  }
  .news-bottom {
    display: flex;
    justify-content: space-between;
  }
}
</style>
