<template>
  <div class="webApi-container text-center mt-3">
    <h3 class="mb-2 mr-2 text-right">Web APIs</h3>

    <div
      class="relative"
      @mouseenter="moreWebApiInfo"
      @mouseleave="removeWebApiInfo"
    >
      <div class="webApi">DOM</div>
      <div class="webApi my-2">AJAX</div>
      <div class="webApi">setTimeout</div>

      <p class="webApi_panel bubbleText lead" v-show="webApiInfo">
        Web API's are extra tools inside the browser. These API's let code run
        outside of the JS Call Stack, allowing for asynchronous code and
        prevents the Call Stack from performing heavy code execution.
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
      webApiInfo: false,
    };
  },
  methods: {
    moreWebApiInfo() {
      this.webApiInfo = true;
      anime({
        targets: ".webApi_panel",
        scale: [0, 1],
        duration: 2000,
        easing: "easeOutElastic(1, .8)",
      });
    },
    removeWebApiInfo() {
      this.webApiInfo = false;
      anime({
        targets: ".webApi_panel",
        translateX: "0rem",
      });
    },
  },
};
</script>