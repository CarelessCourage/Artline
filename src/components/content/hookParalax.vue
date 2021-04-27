<template>
  <transition name="enterPar">
    <div
      data-speed=".2"
      class="paralax"
      :class="{
        hoverOffBox: !hoverOnBox,
        hoverOnBox: hoverOnBox,
        overview: mode,
      }"
    >
      <div class="bg">
        <h2>{{ art.date }}</h2>
        <p>
          <span class="title">{{ art.title }}</span>
          <span
            class="beat"
            v-for="(beat, index) in art.hook"
            :key="index"
            :class="{ highlight: beat.highlight }"
            >{{ beat.tekst }}
          </span>
        </p>
      </div>

      <div class="line" v-if="false"></div>
    </div>
  </transition>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "hookParalax",
  props: {
    art: Object,
    hoverOnBox: Boolean,
    mode: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$bg: #3d405b;
$bg2: #f4f1de;
$mg: mix($bg, $bg2, 50%);

.line {
  background: var(--details);
  opacity: 0.2;
  height: 0.5em;
  width: 50em;
  position: absolute;
  top: 10vw;
  z-index: -200;
  transition: 0.4s ease-in-out;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
}

.bg {
  width: 35vw;
  background: var(--bg);
  padding: 2em;
}

.paralax {
  --offset: -4em;
  position: absolute;
  top: 450px;
  pointer-events: none;
  transition: 0.2s;
  @media only screen and (max-width: 880px) {
    display: none;
  }
  p {
    font-size: clamp(15px, 1.5vw, 2em);
  }
  .title {
    font-size: 1.5em;
    text-transform: uppercase;
    margin-right: 0.5em;
    font-weight: 900;
  }
  .beat {
    color: var(--details);
  }
  .highlight {
    opacity: 0.4;
    font-weight: 900;
  }
  h2 {
    font-size: 3em;
    color: $mg;
    margin: 0px;
    position: absolute;
    top: 8vw;
    transform: rotate(90deg);
    transition: 0.4s ease-in-out;
  }
  &.hoverOnBox .line {
    opacity: 0;
  }
}

//Odd/Even Managment
.artickleContainer {
  //Odd
  &:nth-of-type(odd) {
    .bg {
      padding-left: 2em;
      padding-right: 4em;
    }
    .line {
      right: -10vw;
    }
    .paralax {
      left: 0px;
      h2 {
        right: var(--offset);
      }
      &.hoverOffBox {
        left: -20%;
        h2 {
          opacity: 0;
        }
      }
      &.overview {
        opacity: 0;
        left: -40%;
      }
    }
    .enterPar-leave-active {
      animation: enterLeft 0.5s cubic-bezier(1, 0.5, 0.8, 1) reverse;
    }
    .enterPar-enter-active {
      animation: enterLeft 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }
  }

  //Even
  &:nth-of-type(even) {
    .bg {
      padding-right: 2em;
      padding-left: 4em;
    }
    .line {
      left: -10vw;
    }
    .paralax {
      left: auto;
      right: 0px;
      h2 {
        left: var(--offset);
      }
      &.hoverOffBox {
        right: -20%;
        h2 {
          opacity: 0;
        }
      }
      &.overview {
        opacity: 0;
        right: -40%;
      }
    }
    .enterPar-leave-active {
      animation: enterRight 0.5s cubic-bezier(1, 0.5, 0.8, 1) reverse;
    }
    .enterPar-enter-active {
      animation: enterRight 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }
  }
}

@keyframes enterLeft {
  0% {
    left: -600px;
  }
  100% {
    left: -20%;
  }
}

@keyframes enterRight {
  0% {
    right: -600px;
  }
  100% {
    right: -20%;
  }
}
</style>
