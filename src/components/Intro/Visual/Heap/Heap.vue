<template>
  <div class="heap-cell text-center">
    <div class="memory data1 relative animejs">
      <Lines
        className="1_1"
        lineWidth="75"
        lineHeight="75"
        :X1="line1_1.X1"
        :Y1="line1_1.Y1"
        :X2="line1_1.X2"
      />
      <Lines
        className="1_2"
        lineWidth="90"
        lineHeight="75"
        :X1="line1_2.X1"
        :Y1="line1_2.Y1"
        :X2="line1_2.X2"
      />
      <span v-if="globe" class="globeIcon flex">
        <font-awesome-icon icon="globe" />
      </span>
      <span v-else-if="isGC"></span>
    </div>
    <div class="memory data2 relative animejs" :class="checked2.highlight">
      <Lines
        className="2_1"
        lineWidth="75"
        lineHeight="50"
        :X1="line2_1.X1"
        :Y1="line2_1.Y1"
        :X2="line2_1.X2"
      />
      <Lines
        className="2_2"
        lineWidth="80"
        lineHeight="50"
        :X1="line2_2.X1"
        :Y1="line2_2.Y1"
        :X2="line2_2.X2"
      />
      <span v-if="isGC && checked2.isChecked">&#10004;</span>
      <span v-else-if="isGC && !checked2.isChecked">?</span>
    </div>
    <div class="memory data3 relative animejs" :class="checked3.highlight">
      <Lines
        className="3_1"
        lineWidth="75"
        lineHeight="50"
        :X1="line3_1.X1"
        :Y1="line3_1.Y1"
        :X2="line3_1.X2"
      />
      <Lines
        v-if="!isGC"
        className="3_2"
        lineWidth="80"
        lineHeight="50"
        :X1="line3_2.X1"
        :Y1="line3_2.Y1"
        :X2="line3_2.X2"
      />
      <span v-if="isGC && checked3.isChecked">&#10004;</span>
      <span v-else-if="isGC && !checked3.isChecked">?</span>
    </div>
    <div class="memory data4 animejs" :class="checked4.highlight">
      <span v-if="isGC && checked4.isChecked">&#10004;</span>
      <span v-else-if="isGC && !checked4.isChecked">?</span>
    </div>
    <div class="memory data5 animejs" :class="checked5.highlight">
      <span v-if="isGC && checked5.isChecked">&#10004;</span>
      <span v-else-if="isGC && !checked5.isChecked">?</span>
    </div>
    <div class="memory data6 animejs" :class="checked6.highlight">
      <span v-if="isGC && checked6.isChecked">&#10004;</span>
      <span v-else-if="isGC && !checked6.isChecked">?</span>
    </div>
    <div class="memory data7 animejs" :class="checked7.highlight">
      <span v-if="isGC && checked7.isChecked">X</span>
      <span v-else-if="isGC && !checked7.isChecked">?</span>
    </div>
  </div>
</template>

<script>
import Lines from "./SvgLines";
import anime from "animejs/lib/anime.es.js";
export default {
  components: {
    Lines,
  },
  props: {
    isGC: Boolean,
    globe: Boolean,
  },
  data() {
    return {
      checked2: { isChecked: false, highlight: "" },
      checked3: { isChecked: false, highlight: "" },
      checked4: { isChecked: false, highlight: "" },
      checked5: { isChecked: false, highlight: "" },
      checked6: { isChecked: false, highlight: "" },
      checked7: { isChecked: false, highlight: "" },
      line1_1: { X1: "0", Y1: "43", X2: "70" },
      line1_2: { X1: "100", Y1: "60", X2: "0" },
      line2_1: { X1: "0", Y1: "90", X2: "70" },
      line2_2: { X1: "50", Y1: "60", X2: "10" },
      line3_1: { X1: "0", Y1: "90", X2: "70" },
      line3_2: { X1: "50", Y1: "60", X2: "10" },
    };
  },
  methods: {
    beginCollectorAnimation() {
      if (
        this.isGC &&
        this.$el.getBoundingClientRect().top < window.innerHeight
      )
        this.garbageCollectorAnimation();
    },
    garbageCollectorAnimation() {
      const NODE_COUNT = 8;
      for (let i = 2; i < NODE_COUNT; i++) {
        setTimeout(() => {
          anime({
            targets: `.animate${i}`,
            backgroundColor: "#fff",
            duration: 1000,
            easing: "easeInOutQuad",
            direction: "alternate",
          });
          setTimeout(() => {
            if (i === 2) this.checked2.isChecked = true;
            else if (i === 3) this.checked3.isChecked = true;
            else if (i === 4) this.checked4.isChecked = true;
            else if (i === 5) this.checked5.isChecked = true;
            else if (i === 6) this.checked6.isChecked = true;
            else if (i === 7) {
              this.checked7.isChecked = true;
              setTimeout(() => {
                anime({
                  targets: `.animate7`,
                  scale: [1, 0],
                  opacity: 0,
                  diration: 2000,
                  easing: "easeInOutQuad",
                });
              }, 2000);
            }
          }, 1000);
        }, 1000 * i);
      }
      window.removeEventListener("scroll", this.beginCollectorAnimation);
    },
  },
  mounted() {
    //Change line slope on small screens
    if (window.screen.width < 351) {
      this.line1_1.Y1 = "50";
      this.line1_2.X1 = "80";
      this.line2_2.X1 = "30";
      this.line3_2.X1 = "30";
    } else if (window.screen.width < 361) {
      this.line1_1.Y1 = "50";
      this.line1_2.X1 = "80";
      if (this.isGC) this.line2_2.X1 = "10";
      else this.line2_2.X1 = "35";
      this.line3_2.X1 = "35";
    } else if (window.screen.width < 381) {
      this.line1_1.Y1 = "50";
      this.line1_2.X1 = "80";
      if (this.isGC) this.line2_2.X1 = "20";
      else this.line2_2.X1 = "40";
      this.line3_2.X1 = "40";
    }
    //Memory Heap Effect
    anime({
      targets: ".animejs",
      keyframes: [{ translateX: 5 }, { translateX: -5 }],
      delay: anime.stagger(100),
      loop: true,
      duration: 5000,
      direction: "alternate",
      easing: "easeOutInQuint",
    });
    window.addEventListener("scroll", this.beginCollectorAnimation);
    if (this.isGC) {
      this.checked2.highlight = "animate2";
      this.checked3.highlight = "animate3";
      this.checked4.highlight = "animate4";
      this.checked5.highlight = "animate5";
      this.checked6.highlight = "animate6";
      this.checked7.highlight = "animate7";
    }
  },
};
</script>