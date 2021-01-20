<template>
  <div class="flex header-section-container">
    <div class="border-line relative">
      <div :class="leftTick" class="tick"></div>
    </div>
    <div class="functional-callstack_title text-center mx-5">
      {{ title }}
    </div>
    <div class="border-line relative">
      <div :class="rightTick" class="tick"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isOverflow: Boolean,
  },
  data() {
    return {
      rightTick: "",
      leftTick: "",
    };
  },
  mounted() {
    if (this.isOverflow) {
      this.rightTick = "downtick-right";
      this.leftTick = "downtick-left";
    } else {
      this.rightTick = "uptick-right";
      this.leftTick = "uptick-left";
    }
  },
};
</script>