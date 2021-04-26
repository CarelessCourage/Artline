<template>
    <div class="author" :class="{compact: compact}">
      <img
        v-if="true"
        :src="imageX" 
        :alt="authorX"
      >
      <div class="tekst">
        <p>image by</p>
        <p>{{authorX}}</p>
      </div>
      <img
        v-if="false"
        :src="imageX" 
        :alt="authorX"
       >
    </div>
</template>

<script>
export default {
    name: "authorComp",
    props: ["imageX", "authorX", "compact"],
    mounted() {
        console.log(this.imgSrc);
    }

}
</script>

<style scoped lang="scss">
.expanded .art .author {
  opacity: 1;
  transform: translateY(0em);
}

.art .author {
 background: var(--details);
 color: var(--bg);
 border-radius: .5em;
 height: 3em;
 min-width: 12em;
 padding: .5em;
 padding-right: 1em;
 padding-left: 2em;
 padding-bottom: 1em;
 display: flex;
 //justify-content: flex-end;
 align-items: center;
 position: relative;
 margin-top: -2em;
 z-index: 5;
 opacity: 0;
 transform: translateY(10em);
 transition: .4s ease-in-out;
 img {
   width: 5em;
   height: 5em;
   border-radius: 100%;
   border: solid 3px var(--special);
   overflow: hidden;
 }
 .tekst {
   margin-right: 1.5em;
   margin-left: 1.5em;
   p {
     margin: 0px;
   }
    p:nth-of-type(1) {
      opacity: .4;
    }
 }
}

.art .author.compact {
    background: none;
    color: var(--details);
    padding-left: 0em;
    img {
        width: 10em;
        height: 10em;
    }
}

</style>