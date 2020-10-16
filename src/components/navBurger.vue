<template>
  <div class="burgerBox" @click="menu = !menu" :class="{cross: menu}">
    <div class="burger">
      <div class="lines"></div>
    </div>
  </div>
  <transition name="menu">
    <div class="container" v-if="menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: "intro",
  props: {
    msg: String,
  },
  data: function () {
    return {
      menu: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    background: var(--special);
    height: 100vh;
    width: 600px;
    max-width: 100vw;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      font-size: clamp(20px, 4vw,80px);
      transition: color .4s;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        color: var(--special);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--details);
      }
    }
}

.burgerBox {
  cursor: pointer;
  padding: 2em;
  position: absolute;
  z-index: 11;
  top: 2em;
  right: 2em;
  border-radius: 50%;
  border: 1px solid var(--details);
  opacity: 0.2;
  animation: textFill 2s cubic-bezier(0.85, 0, 0.15, 1);
  animation-fill-mode: backwards;
  transition: opacity .4s;
  &:hover {
    opacity: 1;
  }
  .burger {
    position: relative;
    border-radius: 0.2em;
    height: 1.5em;
    width: 2em;
    display: flex;
    align-items: center;
    transition: .4s;
    .lines,
    .lines::after,
    .lines::before {
      transition: 1s;
      border-radius: 10px;
      width: 100%;
      height: 0.2em;
      background: var(--details);
    }
    .lines::after {
      content: "";
      position: absolute;
      top: 0px;
    }
    .lines::before {
      content: "";
      position: absolute;
      bottom: 0px;
    }
  }

  &.cross {
    position: fixed;
    border: none;
    .burger {
      //transform: rotate(45deg);
      .lines {
        //transform: rotate(90deg);
        background: transparent;
      }
      .lines::after {
        top: auto;
        transform: rotate(-45deg);
      }
      .lines::before {
        bottom: auto;
        transform: rotate(45deg);
      }
    }
  }
}

.menu-enter-active, .menu-leave-active  {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.menu-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(900px);
  opacity: 0;
}

.menu-enter-active {
  animation: enterMenu 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

@keyframes enterMenu {
  0% {
    transform: translateX(900px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes textFill {
  from {
    transform: translate(200px, -200px);
  }
  to {
    transform: translate(0px, 0px);
  }
}
</style>
