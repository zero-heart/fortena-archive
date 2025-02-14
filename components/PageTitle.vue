<template>
  <div class="page-title">
    <h2 class="title">{{ title }}</h2>
    <p v-if="description" class="description">{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.page-title {
  padding: 45px var(--page-padding) 50px;
  background-color: var(--tertiary-color);

  .title {
    font-size: 44px;
    font-weight: 700;
  }

  .description {
    font-size: 13px;
    margin-top: 40px;
    font-weight: 400;
    white-space: pre-line;
  }
}
</style>
