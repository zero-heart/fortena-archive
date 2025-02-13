<template>
  <div class="loading">
    <span class="loading-spin"></span>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/base/variables' as *;

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.loading-spin {
  position: relative;
  width: 40px;
  height: 60px;
  animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.loading-spin:before,
.loading-spin:after {
  content: '';
  background: var(--secondary-color);
  width: 40px;
  height: 60px;
  border-radius: 50px 50px 0 0;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(45deg);
  transform-origin: 50% 68%;
  box-shadow: 5px 4px 5px #0004 inset;
}
.loading-spin:after {
  transform: rotate(-45deg);
}
@keyframes heartBeat {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
