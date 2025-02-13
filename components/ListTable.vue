<template>
  <div class="table-container">
    <TableFilter @search="onSearch" />

    <p class="total">
      총 <span class="total-num">{{ filteredData.length }}</span
      >곡
    </p>

    <div class="table">
      <div class="row thead">
        <span class="col index">번호</span>
        <span class="col title">곡명</span>
        <span class="col date">공연일</span>
        <span class="col concert">공연명</span>
        <span class="col city">도시</span>
        <span class="col singers">연주자</span>
      </div>

      <template v-if="filteredData.length">
        <div
          class="collapse"
          :class="{ open: item.isOpen }"
          v-for="(item, index) in filteredData"
          :key="item.id"
          @click="onCollapse(item)"
        >
          <div class="row tbody">
            <span class="col index">{{ index + 1 }}</span>
            <span class="col title">{{ displaySongTitle(item) }}</span>
            <span class="col date">{{ DateUtils.getFormattedDateString(item.date) }}</span>
            <span class="col concert">{{ item.concertName }}</span>
            <span class="col city">{{ item.city }}</span>
            <span class="col singers">{{ item.singers }}</span>
          </div>
          <SongDetail :item="item" v-if="item.isOpen" />
        </div>
      </template>
      <template v-else>
        <div class="row no-data">
          <span class="col">결과가 없습니다</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useSetListStore } from '~/stores/setList';
import { displaySongTitle } from '~/utils/utils.display';
import DateUtils from '~/utils/utils.date';

import TableFilter from '~/components/TableFilter.vue';
import SongDetail from '~/components/SongDetail.vue';

const store = useSetListStore();
const filteredData = ref(store.data);

const onSearch = (search) => {
  console.log(search);
  const { filter, keyword, isEncore, member, date } = search;
  filteredData.value = store.data.filter(
    (item) =>
      item[filter]?.toLowerCase().includes(keyword.toLowerCase()) &&
      (isEncore ? (isEncore === 'is' ? item.isEncore : !item.isEncore) : true) &&
      item.singers.includes(member) &&
      (!date || DateUtils.isDateInRange(item.date, date))
  );
};
const onCollapse = (item) => {
  item.isOpen = !item.isOpen;
};

onBeforeUnmount(() => {
  store.resetIsOpen();
});
</script>

<style lang="scss" scoped>
@use '~/assets/styles/base/variables' as *;

.table {
  width: 100%;
  border: 1px solid #aaa;
}

.row {
  display: flex;
  border-bottom: 1px solid #ddd;

  &.no-data {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  &:hover {
    background-color: #fcfae1;
  }
}

.col {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  text-align: center;

  &:not(:first-child) {
    border-left: 1px solid #ddd;
  }

  .thead & {
    background-color: #f2f2f2;
    font-weight: 600;
    padding: 8px;
  }

  &.index {
    flex: 0 0 50px;
  }
  &.date {
    flex: 0 0 100px;
  }
  &.city {
    flex: 0 0 80px;
  }
  &.singers {
    flex: 0 0 260px;
  }
}

.total {
  margin-top: 20px;
  font-size: 14px;
  text-align: right;

  &-num {
    font-weight: 600;
    color: var(--accent-color);
  }
}

.collapse {
  cursor: pointer;
  &.open {
    background-color: #fcfae1;
  }
}
</style>
