<template>
  <div class="call-cell">
    <div class="stack-header text-center responsive-text">Call Stack</div>
    <div v-for="(div, i) in divs" :key="i" class="frame-container">
      <div :class="'frame' + i.toString()" class="text-center flex frame">
        {{ div }}
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  props: {
    divs: Array,
  },
  mounted() {
    //Call Stack Effect
    const stack = anime.timeline({
      easing: "linear",
      duration: 2000,
      direction: "alternate",
      loop: true,
    });
    stack
      .add({
        targets: ".frame2",
        opacity: "1",
      })
      .add({
        targets: ".frame1",
        opacity: "1",
      })
      .add({
        targets: ".frame0",
        opacity: "1",
      });
  },
};
</script>