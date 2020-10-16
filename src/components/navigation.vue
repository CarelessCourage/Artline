<template>
  <div id="nav">
    <div class="other"></div>
    <router-link to="/"><p>a</p></router-link>
    <router-link to="/about"><p>a</p></router-link>
    <router-link to="/about"><p>a</p></router-link>
    <router-link to="/about"><p>a</p></router-link>
    <router-link to="/about"><p>a</p></router-link>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.svgFilter {
  position: absolute;
  pointer-events: none;
}

#nav {
  height: 4vw;
  width: 100vw;
  left: 0px;
  bottom: 0px;
  background-color: var(--details);
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1;
  filter: url("#goo");
  p {
    //margin: 0px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--bg);
    //height: 4em;
    width: 100%;
    text-decoration: none;
    position: relative;
    z-index: 0;
    &::after {
      z-index: -1;
      transition: 0.4s cubic-bezier(0.71, 0.05, 0.37, 2.2);
      content: "";
      position: absolute;
      top: -0em;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      background: var(--details);
    }

    &.router-link-exact-active {
      color: var(--special);
      &::after {
        top: -1em;
      }
    }
  }
}
</style>
