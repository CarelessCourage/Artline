<template>
  <transition name="enterPar">
    <div v-show="!mode" data-speed=".2" class="paralax">
      <p>
        <span>{{ art.title }}</span
        >{{ art.hook }}
      </p>
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
  },
  computed: {
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

//&:nth-child(odd) .paralax {
//  left: auto;
//  right: -25vw;
//}

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
</style>
