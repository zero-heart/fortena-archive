<!-- components/Error.vue -->
<template>
  <div class="error-container">
    <h2>Error Occurred</h2>
    <p>{{ error?.message || 'An unknown error occurred.' }}</p>
  </div>
</template>

<script setup>
defineProps({
  error: Object, // error 객체를 부모로부터 받음
});
</script>

<style scoped>
.error-container {
  color: red;
  background: #ffeeee;
  padding: 15px;
  border-radius: 5px;
}
</style>
