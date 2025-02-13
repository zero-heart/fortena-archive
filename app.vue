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
  '포르테나는 클래식과 크로스오버 음악을 선보이는 남성 4중창 그룹입니다. 포르테나 아카이브는 팬들의 열정으로 만들어졌고, 누구나 자유롭게 이용할 수 있어요.';
const host = 'https://fortena.info';

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
