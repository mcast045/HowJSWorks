<template>
  <section class="visual-container responsive-text">
    <Visual />

    <div class="text-right mr-5 downArrow">&darr;</div>
    <WebApis :screenWidth="screenWidth" />
    <div class="text-right mr-5 downArrow">&darr;</div>

    <div class="flexQueueLoop flex">
      <Queue :screenWidth="screenWidth" />
      <div v-show="screenWidth > 1050" class="leftArrow">&larr;</div>
      <div v-show="screenWidth <= 1050" class="text-right mr-5 downArrow">
        &darr;
      </div>
      <EventLoop :screenWidth="screenWidth" />
    </div>
  </section>
</template>

<script>
import Visual from "./Visual";
import WebApis from "./APIs/WebApis";
import Queue from "./APIs/Queue";
import EventLoop from "./APIs/EventLoop";
import anime from "animejs/lib/anime.es.js";
export default {
  components: {
    Visual,
    WebApis,
    Queue,
    EventLoop,
  },
  data() {
    return {
      screenWidth: window.screen.width,
    };
  },
  mounted() {
    anime({
      targets: ".leftArrow",
      translateX: "5px",
      duration: 500,
      loop: true,
      direction: "alternate",
      easing: "linear",
    });
    anime({
      targets: ".downArrow",
      translateY: "5px",
      duration: 500,
      loop: true,
      direction: "alternate",
      easing: "linear",
    });
  },
};
</script>