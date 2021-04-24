<template>
  <div class="artickles">
    <h2 v-if="!mode" style="text-align: center; opacity: 0.5; font-size: 1em">
      Click to Enter an artickle
    </h2>
    <div
      :ref="setItemRef"
      class="artickleContainer"
      :class="{ expanded: mode, classic: !mode }"
      v-for="(art, index) in artickles"
      :key="index"
      :id="art.title"
    >
      <ArtImage :art="art" />
      <HookParalax :art="art" />
      <ArticleContent :art="art" />
    </div>
  </div>
</template>

<script>
import ArticleContent from "./article";
import HookParalax from "./hookParalax";
import ArtImage from "./artImage";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "intro",
  components: {
    ArticleContent,
    HookParalax,
    ArtImage,
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
  width: 100%;
}

.artickleContainer {
  position: relative;
  margin-top: 0em;
  margin-bottom: 0em;
  .text {
    transition: transform 1s;
    pointer-events: none;
    p {
      pointer-events: none;
    }
  }

  img {
    opacity: 0.1;
    transition: 0.8s;
    width: 100%;
    object-fit: cover;
  }

  &.classic img {
    height: 100%;
  }
}

//classic
.artickleContainer.classic {
  &:hover {
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
}

//expanded
.artickleContainer.expanded {
  img {
    opacity: 1;
  }
}

//Some enter thing, who the fuck knows
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
