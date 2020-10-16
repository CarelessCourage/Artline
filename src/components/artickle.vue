<template>
  <div :ref="setItemRef" class="titleBox" :class="{expanded: mode}" v-for="(art, index) in artickles" :key="index">
    <div class="box">
      <div class="text">
        <h1>{{art.title}}</h1>
        <h2>{{art.date}}</h2>
      </div>
      <div class="imgFrame">
        <img :src="art.image" @click="changeMode($event.currentTarget)">
      </div>
    </div>
    <transition name="enterPar">
      <p v-if="true" class="paralax" v-show="!mode" data-speed=".2">{{art.content}}</p>
    </transition>
    <div class="art">
      <transition name="enter">
        <p v-if="mode">{{art.content}}</p>
      </transition>
      <transition name="enter">
        <p v-if="mode">{{art.content}}</p>
      </transition>
      <transition name="enter">
        <p v-if="mode">{{art.content}}</p>
      </transition>
      <transition name="enter">
        <p v-if="mode">{{art.content}}</p>
      </transition>
      <button v-if="false">Read More</button>
    </div>

  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "intro",
  data: function() {
    return {
      mode: false,
      syncScroll: {
        timer: 0,
        el: null,
      },
      itemRefs: [],
      artickles: [
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
        {image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", title: "Title", date: "1895-1867", content: "this is an example paragraph. Its full of text about shit I dont care about. dont read this. Why the fuck would you keep reading after I told you not to? This text is pointless... what are you doing? Fucking psycho"},
      ]
    }
  },
  mounted() {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume none",
    });
    this.startAnimation();
  },
  methods: {
    changeMode(el) {
      this.mode = !this.mode
      let target = el.parentElement.parentElement
      var interval = setInterval(function(){
          console.log("hfjhdsjhsdf");
          gsap.to(window, {duration: .01, scrollTo: {y: target, offsetY: 200, autoKill: false}});
      }, 0.1);
      setTimeout(() => {  clearInterval(interval); }, 2000);
    },
    startAnimation() {
      this.itemRefs.forEach((el) => {
        gsap.from(el.querySelector(".box"), {
          scrollTrigger: {
            trigger: el,
            start: "top bottom"
          },
          x: "0px",
          ease: "none",
        });
        gsap.to(el.querySelector(".paralax"), {
          scrollTrigger: {
            trigger: el,
            scrub: 1
          },
          y: (i, target) => (-ScrollTrigger.maxScroll(window) * target.dataset.speed) / 2,
          ease: "none",
        });

      });

    },
    setItemRef(el) {
      this.itemRefs.push(el)
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  }
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
  opacity: .5;
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
  margin-top: 10em;
  .text {
    transform: translateY(-220px);
  }
  .art {
    width: 45em;
    max-width: 100vw;
    margin: auto;
    padding: 2em;
    padding-top: .5em;
    padding-bottom: .5em;
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
    opacity: .2;
    top: 0px;
    left: 0px;
    cursor: pointer;
    transition: opacity .4s ease-in;
    overflow: hidden;
    display: flex;
    justify-content: center;
    &:hover img {
      width: 200%;
    }
  }
  img {
    transition: .4s;
    width: 100%;
    height: 100%;
    object-fit: cover
  }
  h1 {
    color: var(--special);
  }
  h1, h2 {
    text-align: center;
  }
  h2 {
    margin-top: clamp(-70px, 5vw, -20px);
  }
  p.paralax {
    position: absolute;
    left: -25vw;
    bottom: -300px;
    background: var(--bg);
    padding: 2em;
  }
  &:nth-child(odd) p  {
    left: auto;
    right: -25vw;
  }
}

.enterPar-leave-active {
  animation: enterPar 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0) reverse;
}

.enterPar-enter-active {
  animation: enterPar 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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
  animation: enterMenu 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0) reverse;
}

.enter-enter-active {
  animation: enterMenu 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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
