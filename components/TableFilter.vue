<template>
  <div class="filter">
    <!-- 필터: 공연기간 선택 -->
    <div class="filter-item">
      <VueDatePicker
        v-model="date"
        placeholder="공연기간 검색"
        dark
        year-first
        range
        multi-calendars
        auto-apply
        hide-input-icon
        autocomplete="off"
        :locale="userLocale"
        :hide-navigation="['time']"
        :format="dateFormat"
      />
    </div>

    <!-- 필터: 앵콜여부 -->
    <div class="filter-item">
      <select v-model="isEncore" class="-input">
        <option v-for="filter in encoreFilter" :key="filter.id" :value="filter.id">
          {{ filter.label }}
        </option>
      </select>
    </div>

    <!-- 필터: 연주자별 -->
    <div class="filter-item">
      <select v-model="member" class="-input">
        <option v-for="filter in memberFilter" :key="filter.id" :value="filter.id">
          {{ filter.label }}
        </option>
      </select>
    </div>

    <div class="filter-item search">
      <select v-model="selectedFilter" class="-input">
        <option v-for="filter in searchFilter" :key="filter.id" :value="filter.id">
          {{ filter.label }}
        </option>
      </select>

      <div class="search-keyword -input">
        <span class="-icon -icon--search"></span>
        <input type="text" v-model="search" :placeholder="searchPlaceholder" @keydown.enter="onSearch" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, watch } from 'vue';
import DateUtils from '@/utils/utils.date';
import MEMBER from '@/constants/member';
import VueDatePicker from '@vuepic/vue-datepicker';

const emit = defineEmits();

const date = ref('');
const userLocale = computed(() => {
  return navigator?.languages?.[0] || navigator?.language || 'en';
});
const dateFormat = computed(() => {
  if (!date.value || date.value.length < 2) {
    return '';
  }
  const [start, end] = date.value;
  return `${DateUtils.getFormattedDateString(start)} ~ ${DateUtils.getFormattedDateString(end)}`;
});
watch(date, () => {
  onSearch();
});

// 앵콜여부 필터
const encoreFilter = [
  { id: '', label: '연주전체' },
  { id: 'is', label: '앵콜' },
  { id: 'no', label: '앵콜아님' },
];
const isEncore = ref(encoreFilter[0].id);
watch(isEncore, () => {
  onSearch();
});

// 연주자별 필터
const memberFilter = [
  { id: '', label: '연주자전체' },
  { id: MEMBER.CODE.DQ, label: MEMBER.NAME[MEMBER.CODE.DQ].ko },
  { id: MEMBER.CODE.TK, label: MEMBER.NAME[MEMBER.CODE.TK].ko },
  { id: MEMBER.CODE.YK, label: MEMBER.NAME[MEMBER.CODE.YK].ko },
  { id: MEMBER.CODE.SH, label: MEMBER.NAME[MEMBER.CODE.SH].ko },
];
const member = ref(memberFilter[0].id);
watch(member, () => {
  onSearch();
});

// 검색 필터
const searchFilter = [
  { id: 'songTitle', label: '곡명' },
  { id: 'concertName', label: '공연명' },
  { id: 'hall', label: '공연장' },
  { id: 'city', label: '도시' },
  { id: 'country', label: '국가' },
  { id: 'author', label: '작곡가' },
  { id: 'workTitle', label: '작품제목' },
  { id: 'type', label: '작품타입' },
  { id: 'collaboration', label: '협연' },
];
const search = ref('');
const selectedFilter = ref(searchFilter[0].id);
const searchPlaceholder = computed(() => {
  const filter = searchFilter.find((f) => f.id === selectedFilter.value);
  return filter ? `${filter.label} 검색` : '검색어 입력';
});
watch(selectedFilter, () => {
  onSearch();
});

const onSearch = () => {
  emit('search', {
    filter: selectedFilter.value,
    keyword: search.value,
    isEncore: isEncore.value,
    member: member.value ? MEMBER.NAME[member.value].ko : '',
    date: date.value,
  });
};
</script>

<style lang="scss" scoped>
$item-gap: 6px;

.filter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: $item-gap;
}
.filter-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  position: relative;

  .label {
    flex-shrink: 0;
    font-size: 0.875rem;
  }

  &:not(:first-child):before {
    content: 'and';
    display: block;
    font-size: 0.75rem;
    margin-right: $item-gap;
    color: var(--gray-color);
  }
}

.search-keyword {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
.dp__main {
  width: 150px;
}
</style>
