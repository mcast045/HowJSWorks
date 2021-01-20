<template>
  <div class="callstack_container">
    <FunctionalCallStack />
    <p class="responsive-text callstack_text border m-5">
      The call stack executes functions one at a time, meaning JS is synchronous
      (cannot perform multiple tasks simultaneously). Additionally, a stack is a
      first-in-last-out data structure (LIFO). The last function that gets
      pushed onto the call stack, is the first function to get removed once the
      function returns. When a function gets called, the stack receives the
      function, its parameters, and variables. The stack maintains the position
      of each function. Therefore, if a child function is called inside of
      parent function, the call stack knows exactly where to find the parent
      function once the child function returns. <br /><br />The call stack can
      only handle a certain amount of function calls. For example, if a
      developer creates a recursive function with no exit path, the application
      will eventually reach the stack limit and stop working.
    </p>
    <StackOverflow />
  </div>
</template>

<script>
import FunctionalCallStack from "./CallStackVisual/FunctionalCallStack";
import StackOverflow from "./CallStackVisual/StackOverflow";
import anime from "animejs/lib/anime.es.js";
export default {
  components: {
    FunctionalCallStack,
    StackOverflow,
  },
  mounted() {
    window.addEventListener("scroll", this.beginAnimation);
  },
  methods: {
    animation() {
      //Prevent restarting animation on scroll
      anime({
        targets: ".callstack_text",
        rotate: "1turn",
        scale: [0, 1],
        duration: 5000,
      });
      window.removeEventListener("scroll", this.beginAnimation);
    },
    beginAnimation() {
      if (this.$el.getBoundingClientRect().top < window.innerHeight)
        this.animation();
    },
  },
};
</script>