<template>
  <div id="hero" class="titleBox">
    <h1>
      Enter <a href=""><span>Surrealism</span></a>
    </h1>
    <h2>1830-1940</h2>
    <p>{{ lol }}</p>
  </div>
  <img
    src="https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg"
    alt="Smiley face"
    class="parallax"
    data-speed="0.4"
  />
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Home",
  mounted() {
    gsap.to(".parallax", {
      scrollTrigger: {
        trigger: "html",
        start: "top top",
        scrub: true,
      },
      y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
    });
  },
};
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  z-index: -1;
  top: 300px;
  right: 10vw;
  height: 30em;
  opacity: 0.2;
}
</style>
