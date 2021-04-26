<template>
  <div class="art">
    <p class="intro">
      <span
        class="beat"
        v-for="(beat, index) in art.hook"
        :key="index"
        :class="{ highlight: beat.highlight }"
        >{{ beat.tekst }}
      </span>
    </p>
    <img :src="art.img.sub.image" />
    <div class="author">
      <div class="tekst">
        <p>image by</p>
        <p>{{art.img.sub.authorName}}</p>
      </div>
      <img :src="art.img.sub.author" alt="">
    </div>
    <p class="content">
      <span
        class="paragraph"
        :style="getFontStyle(art.font)"
        v-for="(paragraph, index) in art.content"
        :key="index"
        >{{ paragraph.source }}
        <hr />
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "article",
  props: {
    art: Object,
    mode: Boolean,
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
.art .author {
 background: var(--details);
 color: var(--bg);
 border-radius: .5em;
 height: 3em;
 min-width: 12em;
 padding: .5em;
 padding-right: 1em;
 padding-left: 3em;
 padding-bottom: 1em;
 float: right;
 display: flex;
 //justify-content: flex-end;
 align-items: center;
 position: relative;
 z-index: 5;
 top: -2em;
 img {
   width: 5em;
   height: 5em;
   border-radius: 100%;
   border: solid 3px var(--special);
   overflow: hidden;
 }
 .tekst {
   margin-right: 1.5em;
   p {
     margin: 0px;
   }
    p:nth-of-type(1) {
      opacity: .4;
    }
 }
}

.art {
  max-height: 0em;
  max-width: 100%;
  width: 75em;
  margin: auto;
  overflow: hidden;
  box-sizing: border-box;
  transition: 1s;
  p {
    margin-top: 0px;
  }
  .intro {
    width: 25em;
    font-size: 5em;
    font-size: clamp(35px, 5vw, 4em);
    line-height: 1em;
    font-weight: 900;
    max-width: 100%;
    margin: 0px;
    padding-top: 2em;
    padding-bottom: 3em;
    transform: translateY(-80%);
    transition: transform 0.4s ease-in-out;
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
    @media only screen and (max-width: 1000px) {
      width: 70vw !important;
      margin: auto;
    }
    @media only screen and (max-width: 600px) {
      width: 85vw !important;
    }
  }
  img {
    width: 100%;
    height: 15em;
    background: var(--special);
  }

  .content {
    margin-top: 5em;
    column-count: 2;
    width: 0%;
    height: 0%;
    overflow: hidden;
    span {
      color: var(--details);
    }
    hr {
      opacity: 0;
    }
    @media only screen and (max-width: 1000px) {
      column-count: 1;
      width: 70vw !important;
      margin: auto;
      margin-top: 2em;
    }
    @media only screen and (max-width: 600px) {
      width: 85vw !important;
    }
  }
  .beat {
    color: var(--details);
    &.highlight {
      color: var(--special);
    }
  }

  .content::first-letter {
    color: var(--special);
    float: left;
    font-family: var(--font);
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 20px;
    padding-left: 3px;
  }

  .paragraph {
    font-size: 1.4em;
    max-width: 100%;
    letter-spacing: 0.5px;
    line-height: 1.4em;
    --font: "Kaoly";
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }
}

.expanded .art {
  max-height: 200em;
  padding: 2em;
  padding-bottom: 0.5em;
  .intro {
    transform: translateY(-0%);
  }
  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
