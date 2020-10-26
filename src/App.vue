<template>
  <transition name="nav">
    <navigation v-if="$store.state.nav && $store.state.mode" />
  </transition>
  <intro />
  <gate />
  <box v-if="false" />
  <section class="artickles">
    <artickleVue v-if="true" />
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import navigation from "./components/navigation";
import intro from "./components/intro";
import artickleVue from "./components/artickle";
import box from "./components/box";
import gate from "./components/gate";

//import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

export default {
  name: "app",
  components: {
    navigation,
    intro,
    artickleVue,
    box,
    gate,
  },
  data() {
    return {
      lms: null,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Press+Start+2P&family=Special+Elite&family=Vampiro+One&display=swap");

//font-family: 'Dancing Script', cursive;
//font-family: 'Press Start 2P', cursive;
//font-family: 'Special Elite', cursive;
//font-family: 'Vampiro One', cursive;

@font-face {
  font-family: "psy";
  src: url("assets/fonts/psychedelic/flames-lwzg-webfont.woff2") format("woff2"),
    url("assets/fonts/psychedelic/flames-lwzg-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "swiss";
  src: url("assets/fonts/swiss/swis721_blk_bt_black_italic-webfont.woff2")
      format("woff2"),
    url("assets/fonts/swiss/swis721_blk_bt_black_italic-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Kaoly";
  src: url("assets/fonts/kaoly/kaoly_demo-regular.ttf") format("ttf"),
    url("assets/fonts/kaoly/kaoly_demo-regular-webfont.woff2") format("woff2"),
    url("assets/fonts/kaoly/kaoly_demo-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "victorian";
  src: url("assets/fonts/victorian/victoriandecadedemoversion-2o7ml-webfont.woff2")
      format("woff2"),
    url("assets/fonts/victorian/victoriandecadedemoversion-2o7ml-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "bauhaus";
  src: url("assets/fonts/bauhaus/bauhaussketch-k1j7-webfont.woff2")
      format("woff2"),
    url("assets/fonts/bauhaus/bauhaussketch-k1j7-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "artdeco";
  src: url("assets/fonts/artdeco/dkotago-addr-webfont.woff2") format("woff2"),
    url("assets/fonts/artdeco/dkotago-addr-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.artickles {
  background: var(--bg);
  position: relative;
  z-index: 10;
  padding-bottom: 50em;
}

.sticky {
  position: relative;
  height: 200vh;
  padding-bottom: 100vh;
  //background: var(--bg);
}

:root {
  --details: #3d405b;
  --special: #e07a5f;
  --bg: #f4f1de;

  --level-one: translateZ(3rem);
  --level-two: translateZ(6rem);
  --level-three: translateZ(9rem);

  --fw-normal: 400;
  --fw-bold: 700;

  --clr: #b7c9e5;
}

html {
  background: var(--special);
  max-width: 100vw;
  overflow-x: hidden;
  //padding-bottom: 170vw;
}

body {
  margin: 0px;
}

h1 {
  font-size: clamp(40px, 5vw, 5em);
  margin: 0px;
  line-height: 1.01em;
}

h2 {
  font-family: "Noto Serif", serif, "Roboto", sans-sedrif;
  font-size: clamp(10px, 2vw, 2em);
}

p {
  font-family: "Noto Serif", serif, "Roboto", sans-sedrif;
  font-size: clamp(12px, 2vw, 1em);
}

ul {
  list-style: none;
}

#app {
  font-family: "Kaoly", "Noto Serif", serif, "Roboto", sans-sedrif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--details);
}

.titleBox {
  position: relative;
  span {
    color: var(--special);
  }

  h2 {
    opacity: 0.6;
  }

  p {
    max-width: 100%;
  }
}

section {
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-leave-active {
  animation: nav 0.5s reverse;
}

.nav-enter-active {
  animation: nav 0.5s;
}

@keyframes nav {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
