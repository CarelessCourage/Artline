<template>
  <navBurger />
  <div>
    <intro />
    <artickleVue />
  </div>
</template>

<script setup>
export { default as navBurger } from "./components/navBurger";
export { default as intro } from "./components/intro";
export { default as artickleVue } from "./components/artickle";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

export default {
  name: "app",
  data() {
    return {
      lms: null,
    };
  },
  mounted() {
    this.lms = new LocomotiveScroll({
      el: document.querySelector("#smoothscroll"),
      smooth: true,
    });
    console.log("lmS", this.lmS);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");

@font-face {
  font-family: "Kaoly";
  src: url("assets/kaoly/kaoly_demo-regular.ttf") format("ttf"),
    url("assets/kaoly/kaoly_demo-regular-webfont.woff2") format("woff2"),
    url("assets/kaoly/kaoly_demo-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
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
}

html {
  background: var(--bg);
  padding-bottom: 170vw;
}

body {
  margin: 0px;
}

h1 {
  font-size: clamp(40px, 5vw, 8em);
  margin: 0px;
}

h2 {
  font-family: "Noto Serif", serif, "Roboto", sans-sedrif;
  font-size: clamp(30px, 3vw, 8em);
}

p {
  font-family: "Noto Serif", serif, "Roboto", sans-sedrif;
  font-size: clamp(12px, 2vw, 3em);
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
</style>
