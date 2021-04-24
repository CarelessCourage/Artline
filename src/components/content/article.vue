<template>
  <div class="art">
    <p class="intro">{{ art.intro }}</p>
    <img :src="art.subimg" />
    <div
      class="content"
      :style="getFontStyle(art.font)"
      v-for="(paragraph, index) in art.content"
      :key="index"
    >
      <p>{{ paragraph.source }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "article",
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
.art {
  max-height: 0em;
  width: 45em;
  max-width: 100%;
  margin: auto;
  transition: 1s;
  overflow: hidden;
  box-sizing: border-box;
  p {
    margin-top: 0px;
    overflow: hidden;
  }
  .intro {
    width: 25em;
    max-width: 100%;
    padding-bottom: 2em;
    padding-top: 1em;
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }
  img {
    width: 100%;
    height: 15em;
    background: var(--special);
  }

  .content {
    width: 25em;
    max-width: 100%;
    float: right;
    --font: "Kaoly";
    &:nth-of-type(1) {
      padding-top: 2em;
      p::first-letter {
        color: var(--special);
        float: left;
        font-family: var(--font);
        font-size: 75px;
        line-height: 60px;
        padding-top: 4px;
        padding-right: 8px;
        padding-left: 3px;
      }
    }
    &:nth-last-of-type(1) {
      padding-bottom: 10vw;
    }
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }
}

.expanded .art {
  max-height: 100em;
  padding: 2em;
  padding-bottom: 0.5em;
}
</style>
