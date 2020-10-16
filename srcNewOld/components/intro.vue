<template>
  <div class="con">
    <div class="bg" :class="{reduce: reduce}" @click="reduce = !reduce">
      <div id="hero" class="titleBox">
        <h1 class="classic">Enter <span>Art</span> History</h1>
        <h1 class="shadow">Enter <span>Art</span> History</h1>
        <h2 v-if="false">1830-1940</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "intro",
  props: {
    msg: String,
  },
  data: function () {
    return {
      reduce: false,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.con {
  height: 100vh;
  margin: auto;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    background-image: url("https://static3.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg");
  }
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    z-index: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--special);
    opacity: .8;
    }
  .bg {
    background: var(--bg);
    height: 100%;
    padding-top: 40vh;
    box-sizing: border-box;
    clip-path: polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%);
    transition: .4s;
    &.reduce {
      clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 10% 80%);
      animation: bgReveal 2s cubic-bezier(0.85, 0, 0.15, 1);
    }
  }
}

.titleBox {
  min-height: 10em;
  animation: textAppear 2s cubic-bezier(0.85, 0, 0.15, 1);
  animation-fill-mode: backwards;
  &:hover h1.classic {
    //clip-path: polygon(0 120%, 100% 120%, 100% 120%, 0% 120%);
  }
}

h1 {
  cursor: pointer;
  transition: 0.4s;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  position: absolute;
  top: 0px;
  width: 8em;
  margin: auto;
  font-size: clamp(30px, 10vw, 7em);
  transform: scale(1);
  line-height: 1.1em;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--details);
  -webkit-text-fill-color: var(--details);
  clip-path: polygon(0 0%, 100% 0%, 100% 120%, 0% 120%);
  &:hover {
    transform: scale(1.1);
  }
  &.classic {
    animation: textFill 1s cubic-bezier(0, 0.55, 0.45, 1);
    animation-delay: 2.5s;
    animation-fill-mode: backwards;
  }
  &.classic span {
    -webkit-text-stroke-color: var(--special);
    -webkit-text-fill-color: var(--special);
  }
}
h1.shadow {
  position: absolute;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--details);
  -webkit-text-fill-color: transparent;
  span {
    -webkit-text-stroke-color: var(--special);
  }
}


.reduce-enter-active, .reduce-leave-active  {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.reduce-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(900px);
  opacity: 0;
}

.reduce-enter-active {
  animation: bgReveal 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0) reduce;
}

@keyframes textFill {
  from {
    clip-path: polygon(0 120%, 100% 120%, 100% 120%, 0% 120%);
  }
  to {
    clip-path: polygon(0 0%, 100% 0%, 100% 120%, 0% 120%);
  }
}

@keyframes textAppear {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bgReveal {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%);
  }
  25% {
    clip-path: polygon(20% 20%, 100% 0%, 100% 120%, 0% 120%);
  }
  50% {
    clip-path: polygon(20% 20%, 80% 20%, 100% 120%, 0% 120%);
  }
  75% {
    clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 0% 120%);
  }
  100% {
    clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 10% 80%);
  }
}
</style>
