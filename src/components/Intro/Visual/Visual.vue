<template>
  <section class="visual relative flex border">
    <p class="heap-container_panel bubbleText lead" v-show="heapInfo">
      A Heap is a special tree-like data structure. The heap consists of circles
      (e.g. Leaves) called nodes, and lines (e.g. Branches) called pointers.
      Heaps allow for quick traversal and therefore a great tool for memory
      management.
    </p>

    <div
      class="heap-container flex"
      @mouseenter="moreHeapInfo"
      @mouseleave="removeHeapInfo"
    >
      <div class="heap-header">Memory Heap</div>
      <Heap />
    </div>

    <div class="vertical-line"></div>

    <div
      class="callStack-container flex"
      @mouseenter="moreStackInfo"
      @mouseleave="removeStackInfo"
    >
      <Stack :divs="divs" />
    </div>

    <p class="stack-container_panel bubbleText lead" v-show="stackInfo">
      A Stack is last-in-first-out data structure. JS utilizes the call stack to
      order its code execution. When a function is read, it is saved to the top
      of the stack. When a function returns, it is removed from the top of the
      stack. Then removes the instruction the the stack. The animation
      visualizes this concept.
    </p>
  </section>
</template>

<script>
import Heap from "./Heap/Heap";
import Stack from "./Stack/Stack";
import anime from "animejs/lib/anime.es.js";
export default {
  components: {
    Heap,
    Stack,
  },
  data() {
    return {
      heapInfo: false,
      stackInfo: false,
      divs: ["Third", "Second", "First"],
    };
  },
  methods: {
    moreHeapInfo() {
      this.heapInfo = true;
      anime({
        targets: ".heap-container_panel",
        rotateZ: ["190deg", "360deg"],
        scale: [0, 1],
        duration: 2000,
        easing: "easeOutElastic(1, .8)",
      });
    },
    removeHeapInfo() {
      this.heapInfo = false;
    },
    moreStackInfo() {
      this.stackInfo = true;
      anime({
        targets: ".stack-container_panel",
        rotateZ: ["190deg", "360deg"],
        scale: [0, 1],
        duration: 2000,
        easing: "easeOutElastic(1, .8)",
      });
    },
    removeStackInfo() {
      this.stackInfo = false;
    },
  },
};
</script>