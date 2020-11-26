<template>
  <div id="nav">
    <svg id="menu" viewBox="0 0 51.79 331.65">
      <title>start</title>
      <path
        id="start"
        class="cls-1"
        d="M0,0H25.87c70.3,127.56-27.77,168.94,0,331.65H0Z"
      />
    </svg>

    <div
      id="letters"
      v-for="(letter, index) in letters"
      class="letter"
      :class="{ active: active == letter.title }"
      @click="letterClicked(letter.title)"
      :key="index"
    >
      <p :style="'font-family: ' + letter.font + ';'">
        {{ index + 1 }}
      </p>
    </div>

    <svg class="svgFilter" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "navigation",
  methods: {
    getFirstLetter(word) {
      var res = word.charAt(0);
      return res;
    },
    letterClicked(title) {
      //this.$store.commit("titleChange", title);
      let el = document.getElementById(title);
      this.$store.dispatch("artickleClicked", { el: el, toggle: false });
    },
  },
  computed: {
    letters() {
      return this.$store.state.artickles;
    },
    active() {
      return this.$store.state.active;
    },
    mode() {
      return this.$store.state.mode;
    },
  },
  mounted() {
    this.$store.dispatch("_setGSAP_highlight");

    var tl = gsap.timeline();

    tl.to("#start", 3, {
      attr: {
        d: "M0,0H25.87c-27.77,91.28,45.93,192.76,0,331.65H0Z",
      },
      ease: "elastic.out(1, 0.3)",
    }).to(
      "path#start",
      3,
      {
        attr: {
          d: "M0,0H25.87c0,1.31.09,331.13,0,331.65H0Z",
        },
        ease: "elastic.out(1, 0.3)",
      },
      "-=3"
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
svg#menu {
  height: 100%;
  position: absolute;
  height: 100vh;
  min-width: 8.8em;
  //background: blue;
  transform: scaleX(0.69);
  transform-origin: left;
  //width: 3em;
  path {
    fill: var(--details);
  }
}

.svgFilter {
  position: absolute;
  pointer-events: none;
}

#nav {
  --thickness: 3em;
  height: 4vw;
  width: 100vw;
  background-color: var(--details);
  left: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 100;
  filter: url("#goo");
  @media only screen and (min-width: 900px) {
    height: 100vh;
    max-width: 5vw;
    width: 3em;
    background-color: transparent;
    flex-direction: column;
    &:after {
      content: "";
      background: var(--details);
      height: 100%;
      width: 50%;
      position: absolute;
      z-index: -1;
    }
    &.letter:after {
      top: 0em;
      right: 0em;
      left: 0em;
      bottom: 0em;
    }
    .letter.active {
      color: var(--special);
      &::after {
        top: 0em;
        transform: translateX(1em);
      }
    }
  }
  @media only screen and (max-width: 901px) {
    min-height: var(--thickness);
    &.letter:after {
      top: 0em;
    }
    .letter.active {
      color: var(--special);
      &::after {
        transform: translateY(-1em);
      }
    }
  }
  .letter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--bg);
    width: 100%;
    text-decoration: none;
    position: relative;
    z-index: 0;
    cursor: pointer;
    &::after {
      z-index: -1;
      //z-index: 500;
      transition: 0.8s cubic-bezier(0.71, 0.05, 0.37, 2.2);
      content: "";
      position: absolute;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      background: var(--details);
      //background: blue;
    }
  }
}
</style>
