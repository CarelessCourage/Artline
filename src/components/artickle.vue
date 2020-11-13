<template>
  <h2
    v-if="!$store.state.mode"
    style="text-align: left; opacity: 0.5; font-size: 1em"
  >
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
    <div
      class="box"
      @click="
        $store.dispatch('artickleClicked', {
          el: $event.currentTarget,
          toggle: true,
        })
      "
    >
      <div class="text" :class="{ extra: art.title == 'Punk New Wave' }">
        <h1 :style="getFontStyle(art.font)">
          {{ art.title }}
        </h1>
        <h2>{{ art.date }}</h2>
      </div>
      <div class="imgFrame">
        <img :style="art.top" :src="art.image" />
      </div>
    </div>

    <transition name="enterPar">
      <div v-show="!mode" data-speed=".2" class="paralax">
        <h2 style="color: var(--special)">{{ art.title }}</h2>
        <p>{{ art.hook }}</p>
      </div>
    </transition>

    <div class="art" v-if="mode">
      <p class="intro">{{ art.intro }}</p>
      <img :src="art.subimg" />
      <div class="contentWrapper">
        <div
          class="content"
          :style="getFontStyle(art.font)"
          v-for="(paragraph, index) in art.content"
          :key="index"
        >
          <p>{{ paragraph.source }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "intro",
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
<style scoped lang="scss">
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
  width: 100%;
  //temp
  max-height: 20em;
  max-height: 400em;
  //temp
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
  .art {
    width: 45em;
    max-width: 100vw;
    margin: auto;
    padding: 2em;
    padding-bottom: 0.5em;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 15em;
      background: var(--special);
    }
    p {
      margin-top: 0px;
      overflow: hidden;
    }
    .intro {
      width: 25em;
      max-width: 100%;
      //font-weight: bold;
      padding-bottom: 2em;
      padding-top: 1em;
      @media only screen and (max-width: 450px) {
        width: 100%;
      }
    }
    .contentWrapper {
      // this doesnt work for some fucking reason ... no time to fix. look at later...
      //padding-bottom: 20em;

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
  }
  .box {
    height: 20em;
    border-radius: 0px;
    &:hover::after {
      opacity: 1;
      transform: translateX(0px);
    }
    &::after {
      transform: translateX(100px);
      transition: 0.4s;
      opacity: 0;
      content: "leave";
      background: var(--details);
      padding: 1em;
      min-width: 5em;
      text-align: center;
      border-radius: 1em;
      position: absolute;
      bottom: 10px;
      right: 20px;
      color: var(--special);
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
  //max-height: 10em;
  margin: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  transition: 2s;
  &.inView {
    //max-height: 200em;
    background-color: red;
  }
  .box {
    cursor: pointer;
    border-radius: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background: var(--special);
    height: 30em;
    width: 100%;
    padding: 2em;
    box-sizing: border-box;
    position: relative;
    transition: height opacity 2s;
    &:hover .imgFrame {
      opacity: 0.7;
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
        //font-family: "Noto Serif", serif, "Roboto", sans-sedrif !important;
      }
      .imgFrame {
        //opacity: .6;
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
