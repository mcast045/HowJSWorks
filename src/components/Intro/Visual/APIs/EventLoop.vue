<template>
  <div
    class="relative"
    @mouseenter="moreEventLoopInfo"
    @mouseleave="removeEventLoopInfo"
  >
    <div class="eventLoop">&#8634;</div>

    <p class="event_loop_panel bubbleText lead" v-show="eventLoopInfo">
      The Event Loop is the process of continuously checking the Call Stack and
      Callback Queue to control which functions should execute.
    </p>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  props: {
    screenWidth: Number,
  },
  mounted() {
    anime({
      targets: ".eventLoop",
      rotateZ: "-360deg",
      duration: 3000,
      loop: true,
      easing: "linear",
    });
  },
  data() {
    return {
      eventLoopInfo: false,
    };
  },
  methods: {
    moreEventLoopInfo() {
      this.eventLoopInfo = true;
      if (this.screenWidth > 1050) {
        anime({
          targets: ".event_loop_panel",
          translateX: "-30rem",
          duration: 2000,
          easing: "easeOutElastic(1, .8)",
        });
      } else {
        anime({
          targets: ".event_loop_panel",
          scale: [0, 1],
          duration: 2000,
          easing: "easeOutElastic(1, .8)",
        });
      }
    },
    removeEventLoopInfo() {
      this.eventLoopInfo = false;
      anime({
        targets: ".event_loop_panel",
        translateX: "0rem",
      });
    },
  },
};
</script>