<template>
  <div
    class="box"
    @click="
      $store.dispatch('artickleClicked', {
        el: $event.currentTarget,
        toggle: true,
      })
    "
  >
    <div class="text" :class="{ extra: art.title == 'Punk New Wave' }">
      <h1 :style="getFontStyle(art.font)">
        {{ art.title }}
      </h1>
      <h2>{{ art.date }}</h2>
    </div>
    <div class="imgFrame">
      <img :style="art.top" :src="art.image" />
    </div>
  </div>
</template>

<script>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.expanded .imgFrame {
  transition: 0.4s;
  img {
    transition: 0.4s;
    opacity: 1;
    &:hover {
      opacity: 1;
      width: 100%;
    }
  }
  &:hover {
    background: var(--special);
    img {
      opacity: 0.5;
    }
  }
}

.expanded .text {
  transform: translateY(-270px);
  @media only screen and (max-width: 1300px) {
    transform: translateY(-200px);
    &.extra {
      transform: translateY(-220px);
    }
  }
}

.expanded .box {
  height: 20em;
  border-radius: 0px;
  &:hover::after {
    opacity: 1;
    transform: translateX(0px);
  }
}

.titleBox .box {
  transition: 0.4s;
  cursor: pointer;
  border-radius: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30em;
  width: 100%;
  padding: 2em;
  box-sizing: border-box;
  position: relative;
  transition: height opacity 2s;
  &:hover .imgFrame {
    opacity: 0.7;
  }
  &::after {
    transform: translateX(100px);
    transition: 0.4s;
    opacity: 0;
    content: "leave";
    background: var(--details);
    padding: 1em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    border-radius: 1em;
    font-size: 0.8em;
    min-width: 5em;
    text-align: center;
    position: absolute;
    bottom: -20px;
    right: 20px;
    color: var(--bg);
  }
  @media only screen and (max-width: 870px) {
    height: 10em;
    img {
      opacity: 0.1;
    }
  }
}

.titleBox .text {
  transition: transform 1s;
  pointer-events: none;
  p {
    pointer-events: none;
  }
}

.titleBox .imgFrame {
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
</style>
