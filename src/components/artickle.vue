<template>
  <div
    :ref="setItemRef"
    class="titleBox"
    :class="{ expanded: mode, classic: !mode }"
    v-for="(art, index) in artickles"
    :key="index"
  >
    <div class="box">
      <div class="text">
        <h1>{{ art.title }}</h1>
        <h2>{{ art.date }}</h2>
      </div>
      <div class="imgFrame">
        <img :src="art.image" @click="changeMode($event.currentTarget)" />
      </div>
    </div>
    <transition name="enterPar">
      <p v-if="false" class="paralax" v-show="!mode" data-speed=".2">
        {{ art.content }}
      </p>
    </transition>
    <div class="art">
      <transition name="enter">
        <p v-if="mode">{{ art.content }}{{ art.content }}{{ art.content }}{{ art.content }}</p>
      </transition>
      <button v-if="false">Read More</button>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
require('../assets/psy.png')

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "intro",
  computed: {
     assetsPath: function(file) {

         return 'assets/' + file +'.png';
     }
  },
  data: function () {
    return {
      mode: false,
      syncScroll: {
        timer: 0,
        el: null,
      },
      itemRefs: [],
      artickles: [
        {
          image:
            "https://aliseckin.com/wp-content/uploads/2017/02/Rimmels_toilet_vinegar-1.jpg",
          title: "Victorian",
          date: "1837-1901",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://thewalters.org/wp-content/uploads/Mucha_page-header2.jpg",
          title: "Art Nouveau",
          date: "1890-1920",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://previews.dropbox.com/p/thumb/AA_0QcCPc99azRgS5UnlIXl_1UGWpFN4RsJ0xwjy6VPasyOTbS7QmyVaoAj-s1H7IVB9jfzW3qmg0CcaOahCHNEhyzgwQ3f7rnAUkBBfCjWPWh-IEtQdfQ3IUXyXh5pIRrecU77maLrleTWBVTjjnVuVnHJN16CGHrMSHSgqg56lXHbv77qaLYY-QBytvWmimfNosOcNcOC0DmJ0cPZ2TagF5HAwcqmRwhCQ_J4KsPCMltFDCO7bzLTopmiNOgT2ru0Wyix0O0-glW6QE2OIxjqLY3dACFav3bJcI0sXzMu13ggXEp9UniQ-6vlcSy6ga_IMt-QYlFPChe5ygSNhHpU0RG45wnelvcRKXgc0PR0E8Q/p.png?fv_content=true&size_mode=5",
          title: "Bauhaus",
          date: "1900-1930",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://previews.dropbox.com/p/thumb/AA9_gDaD_qi0zLPL5XNZFvGFGv3bFv1ztAUirnzhQtETg3zsyF32WR6d8nVklm5mRwRaZ_afZ0qsOiVK4EDJXAzHiB-PhyzzpPYKtr-2FGmSp9dJ659skgbz_Wt63AJE_qFhGud8Lcb5NZod3EvJKPxvt3z8g8x_frbo4Qn3uhscGu7FN1cMn2xScEXLzu5I_mmfXvG7SY3lIO1T3Kg1L5umiohUBdsLhNs1S4nwER6EThC8HcSxXHJTJ5jK1Asivy9_IXwyKyNlNCDCEPoHGPoK18a3ZSY6aIS-tkaYsvErQ5Tg5W15iBGvjvW1e0lLal1L60jMbOj1FXVMtCflKsJ9MPbXzGL65mtGdUPRHZOOqw/p.png?fv_content=true&size_mode=5",
          title: "Art Deco",
          date: "1920-1940",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://cdn.britannica.com/79/91479-050-24F98E12/Guernica-canvas-Pablo-Picasso-Madrid-Museo-Nacional-1937.jpg",
          title: "Surrealism",
          date: "1920-1950",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://fahrenheitmagazine.com/sites/default/files/wp-content/uploads/2019/05/portada-pop-art.jpg",
          title: "Pop Art",
          date: "1940-1970",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://previews.dropbox.com/p/thumb/AA8MJyu4YjIYjpOPK-xfc9FBaj-328Im7ikZ4g5Kckgah-QKKVnYilU3S_Jh6ohasmbJIPKJVHzf4L0sk6u3pTdJZa2Dn4--rETJRO_ZDHKm-hoCkuIzsH_9CCRM7nScfjrzAQ69TxAvYJQm5l3EkLBW8TyhWdZo2I64tUsokwbVrXchGBilHRtx6Y4f3LDomBJlh6tQz3SOy3qpocXmgpxmqp46oBCCGzko0DUl3N9vmt8N4NloptQZM2qaTwwY6otU04WVf0gf-PpRVG4ceS66tMpc4sZ6JHKAmNQC-Z77qRApd2XS3h7t3XXtNy1_bcYetH4iN6U_ThgF0GLsYN3m2os2QjXvG5NtxQ5-c4xp-Q/p.png?fv_content=true&size_mode=5",
          title: "Psychedelia",
          date: "1960s",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://graphicdesignhistory.akidesign.no/wp-content/uploads/2018/08/swiss-cover.jpg",
          title: "Swiss",
          date: "1940-1980",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://i.ytimg.com/vi/BNdCMOJualM/maxresdefault.jpg",
          title: "Punk New Wave",
          date: "1970-1980",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
        {
          image:
            "https://thumbs-prod.si-cdn.com/n-21IFTRkKZGMZVz-sXxo2lLeI0=/fit-in/1072x0/https://public-media.si-cdn.com/filer/91/bf/91bf79d7-1edf-4c76-b434-0c20a4210e47/susankare01_apple_macintosh_computer_icons_examples.jpg",
          title: "Flat",
          date: "2010 - Now",
          content:
            "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho",
        },
      ],
    };
  },
  mounted() {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume none",
    });
    this.startAnimation();
  },
  methods: {
    changeMode(el) {
      this.mode = !this.mode;
      let target = el.parentElement.parentElement;
      var interval = setInterval(function () {
        console.log("hfjhdsjhsdf");
        gsap.to(window, {
          duration: 0.01,
          scrollTo: { y: target, offsetY: 200, autoKill: false },
        });
      }, 0.1);
      setTimeout(() => {
        clearInterval(interval);
      }, 2000);
    },
    startAnimation() {
      this.itemRefs.forEach((el) => {
        gsap.from(el.querySelector(".box"), {
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
          },
          x: "0px",
          ease: "none",
        });
        gsap.to(el.querySelector(".paralax"), {
          scrollTrigger: {
            trigger: el,
            scrub: 1,
          },
          y: (i, target) =>
            (-ScrollTrigger.maxScroll(window) * target.dataset.speed) / 2,
          ease: "none",
        });
      });
    },
    setItemRef(el) {
      this.itemRefs.push(el);
    },
  },
  beforeUpdate() {
    this.itemRefs = [];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  display: block;
  margin: auto;
  padding: 1em;
  margin: auto;
  font-size: 1em;
  background-color: transparent;
  border-radius: 1em;
  font-family: "Kaoly", "Noto Serif", serif, "Roboto", sans-sedrif;
  color: var(--special);
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}

.titleBox.expanded {
  width: 100%;
  //temp
  max-height: 20em;
  max-height: 400em;
  //temp
  margin-top: 25vw;
  .imgFrame {
    img {
      opacity: 1;
      position: absolute;
      top: 0px;
      &:hover {
        opacity: 1;
        width: 100%;
      }
    }
  }
  .text {
    transform: translateY(-270px);
  }
  .art {
    width: 45em;
    max-width: 100vw;
    margin: auto;
    padding: 2em;
    padding-bottom: 0.5em;
    box-sizing: border-box;
    p {
      margin-top: 0px;
      overflow: hidden;
    }
  }
  .box {
    height: 20em;
    border-radius: 0px;
  }
  img {
    opacity: 1;
  }
}

.titleBox {
  width: 30em;
  max-width: 100vw;
  //max-height: 10em;
  margin: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  transition: 2s;
  &.inView {
    //max-height: 200em;
    background-color: red;
  }
  .box {
    border-radius: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background: var(--special);
    height: 30em;
    width: 100%;
    padding: 2em;
    box-sizing: border-box;
    position: relative;
    transition: height 2s;
  }
  .text {
    transition: transform 1s;
    pointer-events: none;
    p {
      pointer-events: none;
    }
  }

  .imgFrame {
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
  &.classic .imgFrame:hover  {
    //opacity: .6;
    img {
      width: 130%;
      height: 130%;
    }
  }
  img {
    opacity: 0.5;
    transition: 0.8s;
    width: 100%;
    object-fit: cover;
  }
  &.classic img {
    height: 100%;
  }
  h1 {
    color: var(--special);
    font-family: 'Dancing Script';
  }
  h1,
  h2 {
    text-align: center;
  }
  h2 {
    margin-top: -.5vw;
    opacity: .8
  }
  p.paralax {
    position: absolute;
    left: -25vw;
    bottom: -300px;
    background: var(--bg);
    padding: 2em;
    pointer-events: none;
  }
  &:nth-child(odd) p {
    left: auto;
    right: -25vw;
  }
}

.enterPar-leave-active {
  animation: enterPar 0.5s cubic-bezier(1, 0.5, 0.8, 1) reverse;
}

.enterPar-enter-active {
  animation: enterPar 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

@keyframes enterPar {
  0% {
    opacity: 0;
    //transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    //transform: translateX(0);
  }
}

.enter-leave-active {
  animation: enterMenu 0.5s cubic-bezier(1, 0.5, 0.8, 1) reverse;
}

.enter-enter-active {
  animation: enterMenu 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

@keyframes enterMenu {
  0% {
    max-height: 0px;
    opacity: 0;
  }
  100% {
    max-height: 100px;
    opacity: 1;
  }
}
</style>
