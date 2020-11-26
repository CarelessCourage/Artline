<template>
  <div class="leaveBtn" @click="$store.commit('modeChange', false)">
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
.leaveBtn {
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
  position: fixed;
  z-index: 1000;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
  background: var(--details);
  color: var(--bg);
  padding: 0.2em;
  padding-left: 1em;
  padding-top: 0em;
  padding-bottom: 0em;
  border-radius: 0.2em;
  min-width: 5em;
  text-align: center;
  transition: 0.4s;
  p {
    padding: 0em;
    margin: 0.5em;
  }
  &:hover {
    color: var(--special);
  }
  &:active {
    opacity: 0.6;
  }
  @media only screen and (max-width: 901px) {
    bottom: 47px;
    right: 0px;
  }
}
</style>
