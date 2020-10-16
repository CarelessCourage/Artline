<template>
  <div class="page">
    <h1>Big Title</h1>
    <div class="square"></div>
    <p>
      Lots of text much great very good suck dick. Lots of text much great very
      good suck dick. Lots of text much great very good suck dick
    </p>
    <p>
      Lots of text much great very good suck dick. Lots of text much great very
      good suck dick. Lots of text much great very good suck dick
    </p>
    <p>
      Lots of text much great very good suck dick. Lots of text much great very
      good suck dick. Lots of text much great very good suck dick
    </p>
    <div class="square"></div>
    <h1>Big Title</h1>
    <div class="square"></div>
    <p>
      Lots of text much great very good suck dick. Lots of text much great very
      good suck dick. Lots of text much great very good suck dick
    </p>
    <p>
      Lots of text much great very good suck dick. Lots of text much great very
      good suck dick. Lots of text much great very good suck dick
    </p>
    <p>
      Lots of text much great very good suck dick. Lots of text much great very
      good suck dick. Lots of text much great very good suck dick
    </p>
    <div class="square"></div>
  </div>
</template>

<script>
export default {
  name: "box",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.square {
  height: 20vh;
  background: var(--special);
}
h1 {
  margin-top: 3em;
  text-align: center;
}
.page {
  padding: 3em;
  //color: var(--bg);
  //background: red;
  transform: translateY(-200px);
}
</style>
