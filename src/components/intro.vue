<template>
  <div class="con">
    <div class="bg" :class="{ reduce: reduce }" @click="reduce = !reduce">
      <div class="card">
        <div class="card__content">
          <div class="card__front">
            <div
              v-if="true"
              id="hero"
              class="titleBox"
              :class="{ triggered: trigger }"
            >
              <h1
                @mouseover="trigger = true"
                @mouseleave="trigger = false"
                class="classic levelThree"
              >
                Enter <span>Design</span> History
              </h1>
              <h1 class="shadow levelTwo">Enter <span>Design</span> History</h1>
            </div>
          </div>

          <div class="card__back">
            <p style="font-weight: bold; line-height: 1em" class="card__body">
              this timeline lists <br />
              10 movements of
              <span style="color: var(--special)">graphic design</span> <br />
              throughout history
            </p>
            <p class="card__body">
              check out my <span class="plug">Instagram</span>
            </p>
            <p style="margin-top: -1.21em" class="card__body">
              and my <span class="plug">Behance</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tooltips" @click="reduce = !reduce">
      <svg
        class="bounce"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 164.09 246"
      >
        <rect
          class="cls-1"
          x="5.5"
          y="5.5"
          width="153.09"
          height="235"
          rx="76.54"
        />
        <rect
          class="cls-2"
          x="69.96"
          y="62.29"
          width="24.17"
          height="50.04"
          rx="10.46"
          transform="translate(164.09 174.61) rotate(-180)"
        />
      </svg>

      <p style="color: white">Click for info</p>
      <p style="color: white">Scroll for content</p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "intro",
  props: {
    msg: String,
  },
  data: function () {
    return {
      reduce: false,
      trigger: false,
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      gsap.to(".tooltips", {
        scrollTrigger: {
          trigger: ".tooltips",
          toggleActions: "restart none reverse",
          start: "top center",
          end: "top 20%",
        },
        opacity: "0",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.plug {
  color: var(--special);
  font-weight: bold;
  position: relative;
  &:after {
    transition: width 0.4s;
    content: "";
    width: 100%;
    height: 100%;

    background-image: radial-gradient(
      circle farthest-corner at -0.1% 1.8%,
      rgba(255, 77, 77, 1) 0%,
      rgba(255, 184, 129, 1) 100.2%
    );

    position: absolute;
    top: 0px;
    right: 0px;
  }
  &:hover:after {
    content: "";
    width: 0%;
  }
}

.cls-1 {
  fill: none;
  stroke: var(--bg);
  stroke-width: 11px;
}

.cls-2 {
  fill: var(--bg);
}

.tooltips {
  //background: red;
  opacity: 0.3;
  position: absolute;
  z-index: 20;
  bottom: 50px;
  left: 0px;
  right: 0px;
  width: 9em;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: opacity 0.4s;
  cursor: pointer;
  &:hover {
    opacity: 1 !important;
  }
  svg {
    width: 2em;
    margin: auto;
    margin-bottom: 1em;
  }
  p {
    margin: 0px;
    opacity: 0.5;
    font-size: 1em;
    text-align: center;
  }
}

.card {
  width: 100vw;
  height: 100vh;
  margin: auto;
  cursor: pointer;
}

.card__content {
  text-align: center;
  position: relative;
  height: 100%;
  transition: transform 3s;
  transform-style: preserve-3d;
}

.bg.reduce .card .card__content {
  transform: rotateY(0.5turn);
}

.card__front,
.card__back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
}

.card__front {
  background-color: var(--details);
  //background-color: var(--bg);
  //background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg);
  background-size: cover;
  background-blend-mode: overlay;
  transform: translateZ(5rem);
}

.levelThree {
  transform: var(--level-three);
  order: 2;
}

.levelTwo {
  transform: var(--level-two);
}

.card__body {
  transform: var(--level-two);
  font-weight: var(fw-normal);
  //font-size: 1.5rem;
  line-height: 1.6;
}

.card__back {
  transform: rotateY(0.5turn);
  color: var(--bg);
  background: var(--details);
  p {
    font-size: clamp(10px, 3vw, 1.4em);
    &:nth-last-of-type(3) {
      font-size: clamp(10px, 3vw, 2em);
    }
  }
}

.con {
  height: 100vh;
  margin: auto;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    opacity: 0.4;
    background-image: url("https://static3.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg");
  }
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    z-index: 0;
    height: 100vh;
    width: 100vw;
    -webkit-box-shadow: inset -1px -221px 90px -106px var(--details);
    -moz-box-shadow: inset -1px -221px 90px -106px var(--details);
    box-shadow: inset -1px -221px 90px -106px var(--details);
    opacity: 1;
  }
  .bg {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: var(--details);
    height: 100%;
    //padding-top: 40vh;
    box-sizing: border-box;
    clip-path: polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%);
    transition: 0.4s;
    &.reduce {
      clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 10% 80%);
      animation: bgReveal 2s cubic-bezier(0.85, 0, 0.15, 1);
      //padding-top: 30vh;
    }
  }
}

.titleBox {
  min-height: 10em;
  animation: textAppear 2s cubic-bezier(0.85, 0, 0.15, 1);
  animation-fill-mode: backwards;
  margin-top: -10em;
  &:hover h1.shadow {
    //clip-path: polygon(0 120%, 100% 120%, 100% 120%, 0% 120%);
    transform: scale(1.05);
  }
}

h1 {
  cursor: pointer;
  transition: 0.4s;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  position: absolute;
  top: 0px;
  width: 8em;
  margin: auto;
  font-size: clamp(30px, 10vw, 7em);
  transform: scale(1);
  line-height: 1.1em;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--bg);
  -webkit-text-fill-color: var(--bg);
  clip-path: polygon(0 0%, 100% 0%, 100% 120%, 0% 120%);
  &:hover {
    //transform: scale(1.1);
  }
  &.classic {
    animation: textFill 1s cubic-bezier(0, 0.55, 0.45, 1);
    animation-delay: 2.5s;
    animation-fill-mode: backwards;
  }
  &.classic span {
    -webkit-text-stroke-color: var(--special);
    -webkit-text-fill-color: var(--special);
  }
}
h1.shadow {
  position: absolute;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--bg);
  -webkit-text-fill-color: transparent;
  span {
    -webkit-text-stroke-color: var(--special);
  }
}

.reduce-enter-active,
.reduce-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.reduce-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(900px);
  opacity: 0;
}

.reduce-enter-active {
  animation: bgReveal 0.5s cubic-bezier(1, 0.5, 0.8, 1) reduce;
}

@keyframes textFill {
  from {
    clip-path: polygon(0 120%, 100% 120%, 100% 120%, 0% 120%);
  }
  to {
    clip-path: polygon(0 0%, 100% 0%, 100% 120%, 0% 120%);
  }
}

@keyframes textAppear {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bgReveal {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%);
  }
  25% {
    clip-path: polygon(20% 20%, 100% 0%, 100% 120%, 0% 120%);
  }
  50% {
    clip-path: polygon(20% 20%, 80% 20%, 100% 120%, 0% 120%);
  }
  75% {
    clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 0% 120%);
  }
  100% {
    clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 10% 80%);
  }
}

.bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(10px);
  }
  20% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
