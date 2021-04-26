<template>
  <div class="box" @click="toggleExpanded($event.currentTarget)">
    <div class="text" :class="{ extra: art.title == 'Punk New Wave' }">
      <h1 :style="getFontStyle(art.font)">
        {{ art.title }}
      </h1>
      <h2>{{ art.date }}</h2>
    </div>
    <div class="imgFrame">
      <img id="banner" :style="art.top" :src="art.img.main.image" />
    </div>
  </div>
</template>

<script>
import disableScroll from "disable-scroll";
export default {
  name: "artImage",
  props: {
    art: Object,
  },
  methods: {
    getFontStyle(font) {
      let style = "--font: " + font + ";";
      return style;
    },
    toggleExpanded(el) {
      disableScroll.on();
      this.$store.dispatch("artickleClicked", {
        el: el,
        toggle: true,
      });
      setTimeout(() => {
        disableScroll.off();
      }, 2000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$bg: #3d405b;
$bg2: #f4f1de;
$mg: mix($bg, $bg2, 50%);


.author {
  position: absolute;
}

h1 {
  --font: "Dancing Script";
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
  color: $mg;
}

.artickleContainer .box {
  cursor: pointer;
  border-radius: 4em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 30em;
  width: 30em;
  max-width: 100vw;
  margin: auto;

  padding: 2em;
  box-sizing: border-box;
  position: relative;

  transition: 2s;

  &:hover .imgFrame {
    opacity: 0.7;
  }
  &::after {
    transform: translateX(100px);
    transition: 0.4s;
    opacity: 0;
    content: "🠈";
    text-align: center;
    font-size: 3em !important;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--details);
    padding: 1em;
    padding-top: 0em;
    padding-bottom: 0em;
    //border-radius: 1em;
    font-size: 0.8em;
    height: 100%;
    text-align: center;
    position: absolute;
    //bottom: -20px;
    right: 0px;
    color: var(--bg);
  }
  @media only screen and (max-width: 870px) {
    height: 10em;
    img#banner {
      opacity: 0.1;
    }
    h1 {
      color: var(--special) !important;
      opacity: 1 !important;
    }
    h2 {
      opacity: 1 !important;
    }
  }
}

.artickleContainer .text {
  transition: transform 1s;
  pointer-events: none;
  p {
    pointer-events: none;
  }
  &.extra {
    width: 40em;
  }
}

.artickleContainer .imgFrame {
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

//Classic
.classic .box {
  h1,
  h2 {
    opacity: 0;
    transition: 0.4s ease-in-out;
  }
  &:hover {
    h1,
    h2 {
      opacity: 1;
    }
  }
}

//Expanded
.expanded .box {
  height: 20em;
  border-radius: 0px;
  width: 100vw;
  margin-top: 25vw;
  h1 {
    //font-size: 9em;
    font-size: clamp(40px, 10vw, 15em);
    color: var(--special);
    opacity: 1;
  }
  &:hover::after {
    opacity: 1;
    transform: translateX(0px);
  }
}

.expanded .imgFrame {
  transition: 0.4s;
  img#banner {
    transition: 0.4s;
    opacity: 1;
    &:hover {
      opacity: 1;
      width: 100%;
    }
  }
  &:hover {
    background: var(--special);
    img#banner {
      opacity: 0.5;
    }
  }
}

.expanded .text {
  transform: translateY(-320px);
  &.extra {
    width: auto;
  }
  @media only screen and (max-width: 1300px) {
    transform: translateY(calc(-150px - 10vw));
    &.extra {
      transform: translateY(-220px);
    }
  }
}
</style>
