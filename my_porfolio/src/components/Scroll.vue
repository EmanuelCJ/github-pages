<template>
  <div class="wrapper">
    <div class="item item1"><img class="logo" src="@/assets/exterior.webp" alt=""></div>
    <div class="item item2"><img class="logo" src="@/assets/CAFE-TURISTICO.webp" alt=""></div>
    <div class="item item3"><img class="logo" src="@/assets/social.webp" alt=""></div>
    <!-- <div class="item item4"><img class="logo" src="../../public/PHP.png" alt=""></div>
    <div class="item item5"><img class="logo" src="../../public/mySQL.png" alt=""></div>
    <div class="item item6"><img class="logo" src="../../public/LARAVEL.png" alt=""></div>
    <div class="item item7"><img class="logo" src="../../public/docker.png" alt=""></div>
    <div class="item item8"><img class="logo" src="../../public/nodejs.png" alt=""></div> -->
  </div>
</template>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

.wrapper {
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  margin-top: 5rem;
  overflow: hidden;
  mask-image: linear-gradient(to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0));
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

.item {
  width: 200px;
  height: 100px;
  background-color: transparent;
  border-radius: 6px;
  position: absolute;
  left: max(calc(200px * 3), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item .logo {
  object-fit: cover;
  width: 50%;
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
</style>