<template>
  <div id="nav">
    <div class="other"></div>

    <div v-for="(letter, index) in letters" class="letter" :class="{active: active == letter.title}" @click="$store.commit('activeChange', letter.title)" :key="index">
      <p :style="letter.font">A</p>
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
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    letters () {
      return this.$store.state.artickles
    },
    active () {
      return this.$store.state.active
    },
    mode () {
      return this.$store.state.mode
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.svgFilter {
  position: absolute;
  pointer-events: none;
}

#nav {
  --thickness: 3em;
  height: 4vw;
  width: 100vw;
  left: 0px;
  bottom: 0px;
  background-color: var(--details);
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 100;
  filter: url("#goo");
  @media only screen and (min-width: 900px) {
    height: 100vh;
    width: 4vw;
    min-width: var(--thickness);
    flex-direction: column;
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
      transition: .8s cubic-bezier(0.71, 0.05, 0.37, 2.2);
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
