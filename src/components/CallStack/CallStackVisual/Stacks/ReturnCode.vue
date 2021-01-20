<template>
  <div class="border c2-r1">
    <h3 class="responsive-text text-center underline">Function Return</h3>
    <div class="successful-returnCode-container text-center" v-if="!isOverflow">
      <code class="returnCode helloFromThird">Function 3</code>
      <code class="returnCode helloFromSecond">Function 2</code>
      <code class="returnCode helloFromFirst">Function 1</code>
    </div>
    <div
      class="overflow-returnCode-container text-center flex"
      v-else-if="isOverflow"
    >
      <div v-if="cs_limit" class="csLimit mt-2">Call Stack Limit Exceeded</div>
      <div class="working-overflow-container flex" v-else>
        <code class="returnCode stack0">Stack: 0</code>
        <code class="returnCode stack1 my-2">Stack: 1</code>
        <code class="returnCode stack2">Stack: 2</code>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  props: {
    isOverflow: Boolean,
  },
  data() {
    return {
      cs_limit: false,
    };
  },
  methods: {
    beginAnimation() {
      if (this.$el.getBoundingClientRect().top < window.innerHeight)
        this.overflowAnimation();
    },
    overflowAnimation() {
      const stack0 = document.querySelector(".stack0");
      const stack1 = document.querySelector(".stack1");
      const stack2 = document.querySelector(".stack2");

      const returnCode = anime.timeline({
        easing: "linear",
        duration: 2000,
      });
      returnCode
        .add({
          targets: ".stack0",
          scale: [0, 1],
        })
        .add({
          targets: ".stack1",
          scale: [0, 1],
        })
        .add({
          targets: ".stack2",
          scale: [0, 1],
        });

      setTimeout(() => {
        this.cs_limit = true;
      }, 6000);

      window.removeEventListener("scroll", this.beginAnimation);
    },
  },
  mounted() {
    if (!this.isOverflow) {
      const returnCode = anime.timeline({
        easing: "linear",
        duration: 1000,
        delay: 1000,
        loop: true,
      });
      returnCode
        .add({
          targets: ".helloFromThird",
          scale: [0, 1],
          delay: 5000,
        })
        .add({
          targets: ".helloFromSecond",
          scale: [0, 1],
        })
        .add({
          targets: ".helloFromFirst",
          scale: [0, 1],
        })
        .add({
          targets: ".successful-returnCode-container",
          scale: [1, 0],
          opacity: 0,
        });
    } else if (this.isOverflow) {
      window.addEventListener("scroll", this.beginAnimation);
    }
  },
};
</script>