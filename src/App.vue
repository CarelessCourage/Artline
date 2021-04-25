<template>
  <intro />

  <gate :enter="true" />

  <section style="position: relative; z-index: 10">
    <artickles />
    <transition name="leaveBtn">
      <leaveBtn v-if="$store.state.mode && false" />
    </transition>
  </section>

  <transition name="nav">
    <navigation v-if="$store.state.nav && $store.state.mode" />
  </transition>

  <gate
    :enter="false"
    triggerClass="gateTwo"
    gateName="svgTwo"
    eyeName="eyePathTwo"
  />
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import navigation from "./components/navigation";
import intro from "./components/intro";
import artickles from "./components/content/artickles";
import gate from "./components/gate";
import leaveBtn from "./components/leaveBtn";

export default {
  name: "app",
  components: {
    navigation,
    intro,
    artickles,
    gate,
    leaveBtn,
  },
  methods: {
    refresh() {
      this.$store.dispatch("_resetGSAP");
    },
  },
  mounted() {
    this.$store.dispatch("_setGSAP_nav");
    /*gsap.to(window, {
      duration: 2,
      scrollTo: { y: 0, offsetY: 0, autoKill: false },
      ease: true,
    });*/
    this.refresh();
    window.addEventListener("resize", () => this.refresh());
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Press+Start+2P&family=Special+Elite&family=Vampiro+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

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

section {
  background: var(--bg);
  position: relative;
  min-height: 600px;
  display: flex;
}

.sticky {
  position: relative;
  height: 200vh;
  padding-bottom: 100vh;
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

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

html {
  background: var(--special);
  max-width: 100vw;
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
  font-size: clamp(10px, 5vw, 4em);
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
  overflow: hidden;
}

span {
  color: var(--special);
}

.nav-leave-active {
  animation: navBottom 0.5s reverse;
  @media only screen and (min-width: 900px) {
    animation: navSide 0.5s reverse;
  }
}

.nav-enter-active {
  animation: navBottom 0.5s;
  @media only screen and (min-width: 900px) {
    animation: navSide 0.5s;
  }
}

@keyframes navSide {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes navBottom {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

.leaveBtn-leave-active {
  animation: leaveBtn 1s reverse;
}

.leaveBtn-enter-active {
  animation: leaveBtn 1s;
}

@keyframes leaveBtn {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
