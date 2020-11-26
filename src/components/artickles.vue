<template>
  <div class="artickles">
    <h2 v-if="!mode" style="text-align: center; opacity: 0.5; font-size: 1em">
      Click to Enter an artickle
    </h2>
    <div
      :ref="setItemRef"
      class="titleBox"
      :class="{ expanded: mode, classic: !mode }"
      v-for="(art, index) in artickles"
      :key="index"
      :id="art.title"
    >
      <artImage :art="art" />
      <hookParalax :art="art" v-if="false"/>
      <articleX :art="art" />
    </div>
  </div>
</template>

<script>
import articleX from "./article";
import hookParalax from "./hookParalax";
import artImage from "./artImage";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "intro",
  components: {
    articleX,
    hookParalax,
    artImage,
  },
  computed: {
    artickles() {
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
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume none",
    });
    this.startParalax();
    this.$store.dispatch("_resetGSAP");
  },
  methods: {
    getFontStyle(font) {
      let style = "--font: " + font + ";";
      return style;
    },
    createClass(font) {
      var style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = "." + font + "{ --font: " + font + "}";
      document.getElementsByTagName("head")[0].appendChild(style);
      return font;
    },
    startParalax() {
      this.$store.state.itemRefs.forEach((el) => {
        gsap.to(el.querySelector(".paralax"), {
          scrollTrigger: {
            trigger: el,
            id: "paralax",
            scrub: 1,
          },
          y: (i, target) =>
            (-ScrollTrigger.maxScroll(window) * target.dataset.speed) / 2,
          ease: "none",
        });
      });
    },
    setItemRef(el) {
      this.$store.commit("pushRef", el);
    },
  },
  beforeUpdate() {
    this.$store.commit("resetRef");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.artickles {
  position: relative;
  z-index: 50;
  background: var(--bg);
}

.art {
  max-height: 0em;
  width: 45em;
  max-width: 100%;
  margin: auto;
  transition: 1s;
  overflow: hidden;
  box-sizing: border-box;
  p {
    margin-top: 0px;
    overflow: hidden;
  }
  .intro {
    width: 25em;
    max-width: 100%;
    padding-bottom: 2em;
    padding-top: 1em;
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }
  img {
    width: 100%;
    height: 15em;
    background: var(--special);
  }

  .content {
    width: 25em;
    max-width: 100%;
    float: right;
    --font: "Kaoly";
    &:nth-of-type(1) {
      padding-top: 2em;
      p::first-letter {
        color: var(--special);
        float: left;
        font-family: var(--font);
        font-size: 75px;
        line-height: 60px;
        padding-top: 4px;
        padding-right: 8px;
        padding-left: 3px;
      }
    }
    &:nth-last-of-type(1) {
      padding-bottom: 10vw;
    }
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }
}

.expanded .art {
  max-height: 100em;
  padding: 2em;
  padding-bottom: 0.5em;
}

button {
  display: block;
  margin: auto;
  padding: 1em;
  margin: auto;
  font-size: 1em;
  background-color: transparent;
  border-radius: 1em;
  font-family: "Kaoly", "Noto Serif", serif, "Roboto", sans-sedrif;
  color: var(--special);
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}

.titleBox.expanded {
  width: 100vw;
  margin-top: 25vw;
  .imgFrame {
    transition: 0.4s;
    img {
      transition: 0.4s;
      opacity: 1;
      &:hover {
        opacity: 1;
        width: 100%;
      }
    }
    &:hover {
      background: var(--special);
      img {
        opacity: 0.5;
      }
    }
  }
  .text {
    transform: translateY(-270px);
    @media only screen and (max-width: 1300px) {
      transform: translateY(-200px);
      &.extra {
        transform: translateY(-220px);
      }
    }
  }
  .box {
    height: 20em;
    border-radius: 0px;
    &:hover::after {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  img {
    opacity: 1;
  }
  h2 {
    color: var(--details);
  }
}

.titleBox {
  width: 30em;
  max-width: 100vw;
  margin: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  transition: 2s;
  &.inView {
    background-color: red;
  }
  .box {
    transition: 0.4s;
    cursor: pointer;
    border-radius: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30em;
    width: 100%;
    padding: 2em;
    box-sizing: border-box;
    position: relative;
    transition: height opacity 2s;
    &:hover .imgFrame {
      opacity: 0.7;
    }
    &::after {
      transform: translateX(100px);
      transition: 0.4s;
      opacity: 0;
      content: "leave";
      background: var(--details);
      padding: 1em;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
      border-radius: 1em;
      font-size: 0.8em;
      min-width: 5em;
      text-align: center;
      position: absolute;
      bottom: -20px;
      right: 20px;
      color: var(--bg);
    }
    @media only screen and (max-width: 870px) {
      height: 10em;
      img {
        opacity: 0.1;
      }
    }
  }
  .text {
    transition: transform 1s;
    pointer-events: none;
    p {
      pointer-events: none;
    }
  }

  .imgFrame {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 0px;
    cursor: pointer;
    transition: opacity 0.4s ease-in;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background: var(--details);
  }
  &.classic:hover {
    @media only screen and (min-width: 870px) {
      .box .text h1 {
        font-size: 8em;
      }
      .imgFrame {
        img {
          width: 130%;
          height: 130%;
        }
      }
    }
  }
  img {
    opacity: 0.5;
    transition: 0.8s;
    width: 100%;
    object-fit: cover;
  }
  &.classic img {
    height: 100%;
  }
  h1 {
    --font: "Dancing Script";
    color: var(--special);
    font-family: var(--font);
    transition: 0.4s;
  }
  h1,
  h2 {
    text-align: center;
  }
  h2 {
    transition: color 0.4s;
    margin-top: -0.5vw;
    color: var(--bg);
    opacity: 0.8;
  }
  .paralax {
    width: 25em;
    position: absolute;
    left: -25vw;
    bottom: -300px;
    background: var(--bg);
    padding: 2em;
    pointer-events: none;
    @media only screen and (max-width: 880px) {
      display: none;
    }
    p {
      font-size: clamp(15px, 1vw, 2em);
    }
    span {
      font-size: 1.5em;
    }
  }
  &:nth-child(odd) .paralax {
    left: auto;
    right: -25vw;
  }
}

.enterPar-leave-active {
  animation: enterPar 0.5s cubic-bezier(1, 0.5, 0.8, 1) reverse;
}

.enterPar-enter-active {
  animation: enterPar 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

@keyframes enterPar {
  0% {
    opacity: 0;
    //transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    //transform: translateX(0);
  }
}

.enter-leave-active {
  animation: enterMenu 0.5s cubic-bezier(1, 0.5, 0.8, 1) reverse;
}

.enter-enter-active {
  animation: enterMenu 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

@keyframes enterMenu {
  0% {
    max-height: 0px;
    opacity: 0;
  }
  100% {
    max-height: 100px;
    opacity: 1;
  }
}
</style>
