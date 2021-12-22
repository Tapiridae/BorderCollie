<template>
  <div v-if="jokes">
    <div>
      {{ counter }}
    </div>
    <div>
      {{ name }}
    </div>
    {{ isAdmin }}
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/store';
import { onMounted, watch, watchPostEffect } from 'vue';

const store = useStore();
const { counter, isAdmin, name, addCount, jokes } = storeToRefs(store);

store.$patch({
  // counter: store.counter + 1,
  counter: counter.value + 1,
  name: `${name.value} is cool`,
  isAdmin: !isAdmin.value,
});

store.fetchRandomJokes();

watch(jokes, (v, p) => {
  console.log(v, p);
});

onMounted(() => {
  console.log(jokes.value);

  watchPostEffect(() => {
    console.log(jokes.value);
  });
});
</script>
