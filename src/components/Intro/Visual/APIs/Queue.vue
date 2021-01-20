<template>
  <div class="webApi-container queue text-center mt-3">
    <h3 class="mb-2 mr-2 text-right">Callback Queue</h3>

    <div
      class="relative"
      @mouseenter="moreCallbackInfo"
      @mouseleave="removeCallbackInfo"
    >
      <div class="webApi">onClick</div>
      <div class="webApi my-2">onLoad</div>
      <div class="webApi">onDone</div>

      <p class="queue_panel bubbleText lead" v-show="callbackInfo">
        When a Web API is called, the code is pushed into the Callback Queue. A
        Queue is similar to a Stack runs code first-in-first-out. Code waits
        here until the "Event Loop" to move the function to the Call Stack.
      </p>
    </div>
  </div>
</template>


<script>
import anime from "animejs/lib/anime.es.js";
export default {
  props: {
    screenWidth: Number,
  },
  data() {
    return {
      callbackInfo: false,
    };
  },
  methods: {
    moreCallbackInfo() {
      this.callbackInfo = true;
      anime({
        targets: ".queue_panel",
        scale: [0, 1],
        duration: 2000,
        easing: "easeOutElastic(1, .8)",
      });
    },
    removeCallbackInfo() {
      this.callbackInfo = false;
      anime({
        targets: ".queue_panel",
        translateX: "0rem",
      });
    },
  },
};
</script>