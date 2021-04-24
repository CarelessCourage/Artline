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
$bg: #3d405b;
$bg2: #f4f1de;
$mg: mix($bg, $bg2, 50%);

.paralax {
  position: absolute;
  top: 500px;
  width: 35vw;
  background: var(--bg);
  padding: 2em;
  pointer-events: none;
  @media only screen and (max-width: 880px) {
    display: none;
  }
  p {
    font-size: clamp(15px, 1.5vw, 2em);
  }
  span {
    font-size: 1.5em;
    text-transform: uppercase;
    margin-right: 0.5em;
    font-weight: 900;
  }
  h2 {
    font-size: 3em;
    color: $mg;
  }
}

//Odd/Even Managment
.artickleContainer {
  //Odd
  &:nth-of-type(odd) {
    .paralax {
      left: 0px;
      padding-left: 2em;
      padding-right: 4em;
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
    .paralax {
      left: auto;
      right: 0px;
      padding-right: 2em;
      padding-left: 4em;
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
    //opacity: 0;
    left: -600px;
  }
  100% {
    //opacity: 1;
    left: -0px;
  }
}

@keyframes enterRight {
  0% {
    //opacity: 0;
    right: -600px;
  }
  100% {
    //opacity: 1;
    right: -0px;
  }
}
</style>
