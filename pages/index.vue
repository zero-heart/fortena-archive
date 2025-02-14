<template>
  <main>
    <PageTitle :title="title" :description="description" />

    <Loading v-if="store.loading" />
    <ListTable v-if="store.data" />
    <Error v-if="store.error" :error="store.error" />
  </main>
</template>

<script setup>
import { useSetListStore } from '~/stores/setList';

import PageTitle from '~/components/PageTitle.vue';
import ListTable from '~/components/ListTable.vue';
import Error from '~/components/ErrorDisplay.vue';
import Loading from '~/components/Loading.vue';

const store = useSetListStore();

if (!store.data) {
  await store.fetchData();
}

const title = '포르테나 연주곡 아카이브';
const description =
  '포르테나의 모든 연주곡을 제공합니다. 포르테나의 음악이 담긴 시간의 기록, 당신을 감동시킨 그 순간을 다시 만날 수 있습니다.\n검색 필터를 이용해서 원하는 정보를 찾아보세요.';
</script>

<style lang="scss" scoped></style>
