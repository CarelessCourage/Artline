<template>
  <div class="container" @click="$store.commit('modeChange', false)">
    <p>leave</p>
  </div>
</template>

<script>
export default {
  name: "leaveBtn",
  data: function () {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
  background: var(--details);
  color: var(--bg);
  padding: 1em;
  padding-top: 0em;
  padding-bottom: 0em;
  border-radius: 1em;
  min-width: 10em;
  text-align: center;
  transition: 0.4s;
  &:hover {
    color: var(--special);
  }
  &:active {
    opacity: 0.6;
  }
}
</style>
