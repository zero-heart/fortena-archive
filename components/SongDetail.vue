<template>
  <div class="song-detail">
    <dl>
      <dt>
        <span class="label">{{ displaySongTitle(item) }}</span>
        <span class="value">{{ displayAuthor(item) }}</span>
      </dt>
      <dd>
        <span class="label">공연명</span>
        <span class="value">{{ item.concertName }}</span>
      </dd>
      <dd>
        <span class="label">공연장</span>
        <span class="value">{{ displayConcertPlace(item) }}</span>
      </dd>
      <dd>
        <span class="label">공연일</span>
        <span class="value">{{ DateUtils.getFormattedDateString(item.date, '.', false) }}</span>
      </dd>
      <dd>
        <span class="label">연주자</span>
        <span class="value">{{ item.singers }}</span>
      </dd>
      <dd v-if="item.collaboration">
        <span class="label">협연</span>
        <span class="value">{{ item.collaboration }}</span>
      </dd>
      <dd v-if="item.description || item.isEncore">
        <span class="label">설명</span>
        <span class="value">{{ displayDescription(item) }}</span>
      </dd>
    </dl>
  </div>
</template>

<script setup>
import { displaySongTitle, displayAuthor, displayConcertPlace, displayDescription } from '~/utils/utils.display';
import DateUtils from '~/utils/utils.date';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.song-detail {
  padding: 24px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;

  dt {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    .label {
      font-size: 1.2em;
      font-weight: 600;
    }
    .value {
      font-size: 0.95em;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  dd {
    display: flex;
    gap: 1em;
    margin-bottom: 0.3em;

    .label {
      width: 40px;
      font-weight: 600;
      flex-shrink: 0;
    }
  }
}
</style>
