<template>
  <svg :class="svgClassString" :style="svgStyleString">
    <line
      :x1="X1"
      :y1="Y1"
      :x2="X2"
      y2="0"
      style="stroke: #434343; stroke-width: 2"
    />
  </svg>
</template>

<script>
export default {
  props: {
    className: String,
    lineWidth: String,
    lineHeight: String,
    X1: String,
    X2: String,
    Y1: String,
  },
  data() {
    return {
      bgDark2: "#434343",
      svgStyleString: `width: ${this.lineWidth}px; height: ${this.lineHeight}px`,
      lineStyleString: `stroke: ${this.bgDark2}; stroke-width: 2`,
      svgClassString: `data${this.className}SVG`,
    };
  },
};
</script>