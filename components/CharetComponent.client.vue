<script setup>
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const series = ref([{ name: 'Data', data: [10, 0, 30, 50, 20, 10, 90] }]);
const chartOptions = ref({
  chart: { type: 'line' },
  xaxis: { categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
});
</script>

<template>
  <ClientOnly>
    <VueApexCharts type="line" height="350" :options="chartOptions" :series="series" />
  </ClientOnly>
</template>
