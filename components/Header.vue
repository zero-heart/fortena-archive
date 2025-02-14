<template>
  <header>
    <h1 class="logo">
      <NuxtLink to="/">Forténa Archive <span>(repertoire)</span></NuxtLink>
    </h1>
    <nav>
      <div class="nav-title">통계 <span class="-icon -icon--arrow"></span></div>
      <ul>
        <li><NuxtLink to="/stats/date">공연기간</NuxtLink></li>
        <li><NuxtLink to="/stats/author">작곡가</NuxtLink></li>
        <li><NuxtLink to="/stats/work">작품</NuxtLink></li>
        <li><NuxtLink to="/stats/song">연주곡</NuxtLink></li>
        <li><NuxtLink to="/stats/member">멤버</NuxtLink></li>
        <li><NuxtLink to="/stats/collaboration">협연</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '../assets/styles/base/variables' as *;
@use '../assets/styles/helpers/mixins' as *;

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;

  ul {
    @include common-transition;
    display: flex;
    gap: 20px;
    opacity: 0;
    transform: translateX(-10px);
  }

  &:hover {
    ul {
      transform: translateX(0);
      opacity: 1;
    }
    .-icon--arrow {
      transform: rotate(0);
    }
  }
}

.nav-title {
  @include flex-center;
  flex-direction: row-reverse;
  font-weight: 500;
  color: var(--secondary-color);

  .-icon--arrow {
    @include common-transition;
    background-color: var(--secondary-color);
    transform: rotate(180deg);
  }
}

.logo {
  $logo-size: 40px;

  height: $logo-size;
  line-height: $logo-size;
  font-size: 1.2rem;
  font-weight: 400;
  background: url('../assets/images/logo.png') no-repeat left center;
  background-size: contain;
  padding-left: calc($logo-size + 10px);

  span {
    font-size: 80%;
    color: #a5a5a5;
  }
  a {
    text-decoration: none;
  }
}
</style>
