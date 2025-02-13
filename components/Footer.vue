<template>
  <footer>
    <nav>
      <a href="https://www.fortena.kr" target="_blank">포르테나 아카이브</a>
      <a href="https://blog.naver.com/fortena-archive" target="_blank">포르테나 아카이브 블로그</a>
      <a href="https://www.fortena.kr/official-sites" target="_blank">포르테나 공식플랫폼</a>
    </nav>

    <p class="title">
      <span class="motto">포르테나의 모든 순간을 함께</span>
      <span class="text">포르테나 아카이브</span>
    </p>

    <p class="copyright">Copyright ⓒ Forténa Archive</p>

    <div class="contact">
      <p class="notice">
        본 아카이브는 소속사의 허락을 받아 아티스트의 사진과 동영상을 게재하고 있습니다.<br />
        모든 콘셉트와 아이디어는 포르테나 아카이브의 창작물이므로 무단으로 도용하거나 출처를 밝히지 않고 재사용하는
        행위를 금지합니다.
      </p>
      <a class="email" href="mailto:fordays-fortena@naver.com">fordays-fortena@naver.com</a>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  a:hover {
    color: var(--secondary-color);
  }
}

.title {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .motto {
    font-size: 80%;
    color: #b7b7b7;
  }

  .text {
    color: var(--secondary-color);
  }
}

.copyright {
  margin-top: 1rem;
}

.contact {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .notice {
    font-size: 65%;
    color: #d9d9d9;
  }

  .email {
    font-size: 80%;
    color: #999;
  }
}
</style>
