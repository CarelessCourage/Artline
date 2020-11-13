<template>
  <div class="con">
    <div class="tooltips">
      <svg
        class="bounce"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 164.09 246"
      >
        <rect
          class="cls-1"
          x="5.5"
          y="5.5"
          width="153.09"
          height="235"
          rx="76.54"
        />
        <rect
          class="cls-2"
          x="69.96"
          y="62.29"
          width="24.17"
          height="50.04"
          rx="10.46"
          transform="translate(164.09 174.61) rotate(-180)"
        />
      </svg>

      <p style="color: white">Click for info</p>
      <p style="color: white">Scroll for content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mouse",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cls-1 {
  fill: none;
  stroke: var(--bg);
  stroke-width: 11px;
}

.cls-2 {
  fill: var(--bg);
}

.tooltips {
  background: var(--details);
  padding: 1em;
  border-radius: 50%;
  opacity: 0.7;
  position: fixed;
  position: absolute;
  z-index: 20;
  bottom: 50px;
  left: 0px;
  right: 0px;
  width: 9em;
  height: 9em;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.4s;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    position: absolute;
  }
  &:hover {
    opacity: 1 !important;
  }
  svg {
    width: 2em;
    margin: auto;
    margin-bottom: 1em;
  }
  p {
    margin: 0px;
    opacity: 0.5;
    font-size: 1em;
    text-align: center;
  }
}

@keyframes bgReveal {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%);
  }
  25% {
    clip-path: polygon(20% 20%, 100% 0%, 100% 120%, 0% 120%);
  }
  50% {
    clip-path: polygon(20% 20%, 80% 20%, 100% 120%, 0% 120%);
  }
  75% {
    clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 0% 120%);
  }
  100% {
    clip-path: polygon(20% 20%, 80% 20%, 85% 90%, 10% 80%);
  }
}

.bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(10px);
  }
  20% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
