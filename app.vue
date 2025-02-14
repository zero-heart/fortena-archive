<template>
  <div class="wrapper">
    <Header></Header>
    <NuxtPage></NuxtPage>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';

const title = '포르테나 연주곡 아카이브-Forténa Archive';
const description =
  '클래식과 크로스오버 음악을 선보이는 네 명의 테너 그룹 포르테나의 모든 연주곡을 제공합니다. 포르테나의 음악이 담긴 시간의 기록, 당신을 감동시킨 그 순간을 다시 만날 수 있습니다. ';
const host = 'https://www.fortena.info';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: '포르테나, 크로스오버, 남성 4중창, 성악, 클래식, 콘서트' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: `${host}/seo.png` },
    { property: 'og:url', content: host },
  ],
});
</script>

<style lang="scss" scoped></style>
