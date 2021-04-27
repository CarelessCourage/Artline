<template>
  <div class="art" :class="{ overview: !mode }">
    <div class="mainAuthor">
      <authorComp
        :compact="true"
        :imageX="art.img.main.author"
        :authorX="art.img.main.authorName"
      />
    </div>
    <div class="overflow">
      <p class="intro">
        <span
          class="beat"
          v-for="(beat, index) in art.hook"
          :key="index"
          :class="{ highlight: beat.highlight }"
          >{{ beat.tekst }}
        </span>
      </p>
      <div class="subBanner" @click="temp = !temp">
        <img :src="art.img.sub.image" />
        <authorComp
          :imageX="art.img.sub.author"
          :authorX="art.img.sub.authorName"
        />
      </div>
      <p class="content" :class="{ on: temp }">
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
  </div>
</template>

<script>
import authorComp from "../authorComp";
export default {
  name: "article",
  props: {
    art: Object,
    mode: Boolean,
  },
  components: {
    authorComp,
  },
  data: function () {
    return {
      temp: false,
    };
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
.art .mainAuthor .author {
  bottom: auto;
  right: auto;
  top: -0em;
  left: 0em;
  transform: translateX(-0%);
  transition: 0.4s ease-in-out;
}

.mainAuthor {
  transition: 0.4s ease-in-out;
}

.overview .mainAuthor {
  transform: translateX(-50%);
  .author {
    height: 0px;
    padding: 0px;
  }
}

.overflow {
  overflow: hidden;
}

.art .subBanner {
  position: relative;
  overflow: hidden;
  max-height: 100%;
  transition: 0.4s ease-in-out;
  .author {
    bottom: 0em;
    right: 0em;
    top: auto;
    left: auto;
  }
}

.art {
  max-height: 0em;
  max-width: 100%;
  width: 75em;
  margin: auto;
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
    max-height: 100%;
    overflow: hidden;
    margin: 0px;
    transform: translateY(0);
    transition: 1s ease-in-out;

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
    overflow: hidden;
    transition: 0.4s ease-in-out;
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
  padding-top: 0em;
  padding-bottom: 0.5em;
  .intro {
    padding-top: 2em;
    padding-bottom: 3em;
    overflow: hidden;
    opacity: 1;
  }
  .subBanner {
    img {
      height: 15em;
    }
  }
  .content {
    height: auto;
    max-height: 100%;
  }
}

.classic .art {
  .intro {
    transform: translateY(-10em);
    max-height: 0px;
    padding: 0px;
    opacity: 0;
  }
  .subBanner {
    max-height: 0%;
    opacity: 0;
    img {
      height: 0px;
    }
  }
  .content {
    opacity: 0;
    margin: 0px;
    height: 0px !important;
    max-height: 0% !important;
  }
}

.content {
  height: 45em !important;
  max-height: 15em;
  span {
    transition: 0.4s;
  }
}

.on.content {
  margin: 0px;
  height: 0px !important;
  max-height: 0% !important;
  span {
    margin: 0px;
    height: 0px !important;
    max-height: 0% !important;
  }
}
</style>
