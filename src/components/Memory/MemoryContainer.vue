<template>
  <section class="memory-container flex">
    <div class="visual-markandsweep-container flex">
      <p class="lead markandsweep border">
        Modern browsers use a "Mark-and-sweep" algorithm for Garbage Collection (GC).
        This algorithm parse all objects in memory and sets a flag letting the garbage collector
        know which objects are "reachable". Mark-and-sweep begins its search at different "roots"
        known as global objects. These roots are always reachable and all of this child objects
        are reachable. If an object cannot be reached, the garbage collector removes that object
        from memory.
      </p>
      <MemoryVisuals />
    </div>
    <p class="relative memory-content_text responsive-text border">
      Because memory is a scarce resource, proper memory management is required
      for secure and efficient applications. What exactly gets stored in memory?
      Everything! Variables, functions, objects, etc... The memory life-cycle works as follows.
      <ul class="m-5">
        <li>
        1. JS needs to allocate required memory. JS understands the data
        type at run time and automatically allocates memory.
        </li>

        <li class="my-5">2. JS needs to retrieve the data.</li>

        <li>
          3. JS needs to release memory that is no longer needed. JS automatically does 
          this through "Garbage Collection".
        </li>
      </ul>
      Most issues arise in the final step. If unnecessary memory lingers, the 
      application performance reduces, or worst case, all available memory gets 
      used and the programs halts.
    </p>
  </section>
</template>

<script>
import MemoryVisuals from "./MemoryVisuals/MemoryVisuals.vue";
import anime from "animejs/lib/anime.es.js";

export default {
  components: {
    MemoryVisuals,
  },
  data() {
    return {
      canAnimate: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.beginAnimation);
  },
  methods: {
    animation() {
      //Prevent restarting animation on scroll
      if (this.canAnimate) {
        anime({
          targets: ".memory-content_text",
          scale: [0, 1],
          duration: 2500,
          delay: 500,
        });
        window.removeEventListener("scroll", this.beginAnimation);
        this.canAnimate = false;
      }
    },
    beginAnimation() {
      if (this.$el.getBoundingClientRect().top < window.innerHeight)
        this.animation();
    },
  },
};
</script>