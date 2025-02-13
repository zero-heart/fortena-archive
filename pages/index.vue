<template>
  <main>
    <Loading v-if="store.loading" />
    <ListTable v-if="store.data" />
    <Error v-if="store.error" :error="store.error" />
  </main>
</template>

<script setup>
import { useSetListStore } from '~/stores/setList';

import ListTable from '~/components/ListTable.vue';
import Error from '~/components/ErrorDisplay.vue';
import Loading from '~/components/Loading.vue';

const store = useSetListStore();

if (!store.data) {
  await store.fetchData();
}
</script>
