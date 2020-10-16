<template>
  <div id="hero" class="titleBox" :class="count">
    <h1>{{title}}</h1>
    <h2>{{date}}</h2>
    <p data-speed=".2" :class="{parallax}">this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho</p>
    <img :src="image">
  </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "intro",
  props: {
    right: Boolean,
    image: String,
    title: String,
    date: String,
    count: String
  },
  mounted() {
    gsap.to(("." + this.title), {
      scrollTrigger: {
        trigger: this.count,
        start: "0px bottom",
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.titleBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--special);
  width: 30em;
  max-width: 100vw;
  min-height: 15em;
  padding: 2em;
  margin: auto;
  margin-top: 5em;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    opacity: .2;
    top: 0px;
    left: 0px;
    background-attachment: fixed;
    background-position: center;
    background-size: 200%;
  }
  h2 {
    margin-top: -20px;
  }
  p {
    position: absolute;
    left: -150px;
    bottom:-300px;
    background: var(--bg);
    padding: 2em;
    &.right {
      left: auto;
      right: -150px;
    }
  }
}
</style>
