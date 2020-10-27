<template>
  <div class="toggle">
    <svg id="eye" viewBox="0 0 232.01 232.01">
      <title>eyeOpen</title>
      <path
        id="eyePath"
        class="cls-1"
        d="M116,0A116,116,0,1,0,232,116,116,116,0,0,0,116,0ZM29,117.92V116c93.92-96.92,173.66,0,173.66,0v1.92C108.69,211.84,29,117.92,29,117.92Z"
      />
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "toggleEye",
  mounted() {
    var tl = gsap.timeline();

    tl.from("#eyePath", 2, {
      attr: {
        d:
          "M116,0A116,116,0,1,0,232,116,116,116,0,0,0,116,0ZM29,117.92V116c89.44,89.44,173.66,0,173.66,0v1.92C108.69,211.84,29,117.92,29,117.92Z",
      },
      ease: "power3.out",
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.toggle {
  position: fixed;
  z-index: 100;
  width: 5em;
  bottom: 10px;
  right: 10px;
}

svg#eye {
  path {
    fill: var(--details);
  }
}
</style>
