<template>
  <div class="toggle">
    <svg id="eye" viewBox="0 0 232.01 232.01">
      <title>eyeOpen</title>
      <path
        :id="eyeName"
        class="cls-1"
        d="M116,0A116,116,0,1,0,232,116,116,116,0,0,0,116,0ZM29,117.92V116c93.92-96.92,173.66,0,173.66,0v1.92C108.69,211.84,29,117.92,29,117.92Z"
      />
    </svg>
    <div class="eye">
      <div class="iris">
        <div class="pupil"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "toggleEye",
  props: {
    close: {
      type: Boolean,
      default: true,
    },
    triggerClass: {
      type: String,
      default: "gate",
    },
    eyeName: {
      type: String,
      default: "eyePath",
    },
  },
  mounted() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "." + this.triggerClass,
        start: () => {
          if (this.close) {
            return "top top";
          } else {
            return "800% top";
          }
        },
        end: () => {
          if (this.close) {
            return "400% top";
          } else {
            return "1200% top";
          }
        },
        scrub: true,
        id: "eye",
      },
    });

    if (this.close) {
      tl.to("#" + this.eyeName, {
        attr: {
          d:
            "M116,0A116,116,0,1,0,232,116,116,116,0,0,0,116,0ZM29,117.92V116c89.44,89.44,173.66,0,173.66,0v1.92C108.69,211.84,29,117.92,29,117.92Z",
        },
      });
    } else {
      tl.from("#" + this.eyeName, {
        attr: {
          d:
            "M116,0A116,116,0,1,0,232,116,116,116,0,0,0,116,0ZM29,117.92V116c89.44,89.44,173.66,0,173.66,0v1.92C108.69,211.84,29,117.92,29,117.92Z",
        },
      });
    }

    //tl.to(".pupil", {
    //  scale: 2,
    //  ease: "power3.out",
    //});
  },
};
</script>

<style scoped lang="scss">
.toggle {
  border-radius: 50%;
  transform: scale(0.4);
  top: -10px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 100;
  width: 6em;
  height: em;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
}

.eye {
  background: var(--bg);
  height: 75%;
  width: 75%;
  border-radius: 100%;
  position: absolute;
  top: 5px;
  z-index: 100;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  .iris {
    width: 2em;
    height: 2em;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: 1.2em;
    border-radius: 100%;
    border: 2px solid var(--details);
    display: flex;
    justify-content: center;
    align-items: center;
    .pupil {
      width: 20%;
      height: 20%;
      background: var(--details);
      border-radius: 100%;
    }
  }
}

svg#eye {
  //opacity: 0.5;
  position: relative;
  z-index: 101;
  path {
    fill: var(--special);
  }
}
</style>
