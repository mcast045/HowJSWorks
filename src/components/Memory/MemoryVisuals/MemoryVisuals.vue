<template>
  <div class="memory-container_heap relative">
    <div
      @mouseenter="moreGarbageCollectionInfo"
      @mouseleave="removeGarbageCollectionInfo"
      class="memory-container_heap-flex"
    >
      <Heap class="my-5" :isGC="true" :globe="true" />

      <HeapHover
        class="visualDescription"
        :garbageCollectionInfo="garbageCollectionInfo"
        :content="visualDescription"
      />
    </div>
  </div>
</template>

<script>
import Heap from "../../Intro/Visual/Heap/Heap";
import HeapHover from "./HeapHover";
import anime from "animejs/lib/anime.es.js";

export default {
  components: {
    Heap,
    HeapHover,
  },
  data() {
    return {
      randomNum: 0,
      garbageCollectionInfo: false,
      visualDescription: `The globe in the top node represents a global object The "?" 
      represents objects in memory that have not been checked by the "Mark-and-sweep" algorithm.
      After the algorithm, all objects but 1 was reachable. The 1 unreachable object was left 
      unchecked and quickly removed from memory.`,
    };
  },
  methods: {
    moreGarbageCollectionInfo() {
      this.garbageCollectionInfo = true;
      anime({
        targets: ".visualDescription",
        scale: [0, 1],
        duration: 2000,
        easing: "easeOutElastic(1, .8)",
      });
    },
    removeGarbageCollectionInfo() {
      this.garbageCollectionInfo = false;
    },
  },
};
</script>