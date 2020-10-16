<template>
  <div class="lol">
    <div class="screen" id="fold-effect">
      <div class="wrapper-3d">
        <div class="fold fold-top">
          <div class="fold-align">
            <div class="fold-content">
              <page class="parallax" data-speed="1" />
            </div>
          </div>
        </div>
        <div class="fold fold-center" id="center-fold">
          <div class="fold-align">
            <div class="fold-content" id="center-content">
              <page class="parallax" data-speed="1" />
            </div>
          </div>
        </div>
        <div class="fold fold-bottom">
          <div class="fold-align">
            <div class="fold-content">
              <page class="parallax" data-speed="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export { default as page } from "./page";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "box",
  mounted() {
    gsap.to(".parallax", {
      scrollTrigger: {
        trigger: ".lol",
        start: "0px top",
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
.lol {
  //margin-top: 10em;
  padding-top: 20em;
  position: sticky;
  top: 0px;
}
.screen {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  //border: solid 1px;
}

.wrapper-3d {
  position: relative;
  perspective: 20vw;
  transform-style: preserve-3d;
}

.fold {
  overflow: hidden;
  width: 60vw;
  height: 80vh;
  background: rgba(25, 25, 25, 0.144);
}
.fold-top {
  position: absolute;
  transform-origin: bottom center;
  left: 0;
  right: 0;
  bottom: 100%;
  background: rgba(25, 25, 25, 0.192);
}

.fold-bottom {
  position: absolute;
  transform-origin: top center;
  right: 0;
  left: 0;
  top: 100%;
  background: rgba(25, 25, 25, 0.192);
}
.fold-align {
  width: 100%;
  height: 100%;
}
.fold-bottom .fold-align {
  transform: translateY(-100%);
}
.fold-top .fold-align {
  transform: translateY(100%);
}

.fold-bottom {
  transform-origin: top center;
  transform: rotateX(120deg);
}

.fold-top {
  transform-origin: bottom center;
  transform: rotateX(-120deg);
}
</style>
