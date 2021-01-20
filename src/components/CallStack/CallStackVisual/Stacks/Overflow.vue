<template>
  <div class="call-cell bottom-row">
    <div class="stack-header text-center responsive-text">Call Stack</div>
    <div v-for="(div, i) in overflow" :key="i">
      <div :class="'overflow' + i.toString()" class="text-center flex frame">
        {{ div }}
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      overflow: ["stackOverflow()", "stackOverflow()", "stackOverflow()"],
    };
  },
  methods: {
    beginAnimation() {
      if (this.$el.getBoundingClientRect().top < window.innerHeight)
        this.animation();
    },
    animation() {
      const stack = anime.timeline({
        easing: "linear",
        duration: 2000,
      });
      stack
        .add({
          targets: ".overflow2",
          opacity: "1",
        })
        .add({
          targets: ".overflow1",
          opacity: "1",
        })
        .add({
          targets: ".overflow0",
          opacity: "1",
        })
        .add({
          targets: [".overflow2", ".overflow1", ".overflow0"],
          backgroundColor: "#F32013",
          color: "#fff",
        });
      window.removeEventListener("scroll", this.beginAnimation);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.beginAnimation);
  },
};
</script>