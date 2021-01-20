<template>
  <div class="border c1-r1">
    <h3 class="responsive-text text-center underline pb-1">Functions</h3>
    <div v-if="!isOverflow">
      <code class="thirdFunction" v-html="third"></code>
      <code class="secondFunction my-2" v-html="second"></code>
      <code class="firstFunction my-2" v-html="first"></code>
      <code class="firstReadLine px-2">first()</code>
    </div>
    <div class="overflowFunction" v-else-if="isOverflow">
      <code v-html="overflow"></code>
      <code class="stackOverflowReadLine px-2">stackOverflow(0)</code>
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
      third: `
        const third = () => { <br />
        &nbsp;&nbsp;&nbsp;console.log("Function 3") <br />}
        <br /><br />`,
      second: `const second = () => { <br />
        &nbsp;&nbsp;&nbsp;third()<br />
        &nbsp;&nbsp;&nbsp;console.log("Function 2") <br />}
        <br /><br />`,
      first: `const first = () => { <br />
        &nbsp;&nbsp;&nbsp;second()<br />
        &nbsp;&nbsp;&nbsp;console.log("Function 1") <br />}
        <br /><br />`,
      overflow: `const stackOverflow = i => { <br />
        &nbsp;&nbsp;&nbsp;console.log(Stack: ' + i)<br />
        &nbsp;&nbsp;&nbsp;i++<br />
        &nbsp;&nbsp;&nbsp;stackOverflow(i)<br />
        }
        <br /><br />`,
    };
  },
  mounted() {
    //Call Stack Effect
    const code = anime.timeline({
      easing: "linear",
      duration: 2000,
      direction: "alternate",
      loop: true,
    });
    code
      .add({
        targets: [".firstReadLine", ".firstFunction"],
        backgroundColor: "#FAED27",
        color: "#000",
      })
      .add({
        targets: ".secondFunction",
        backgroundColor: "#FAED27",
        color: "#000",
      })
      .add({
        targets: ".thirdFunction",
        backgroundColor: "#FAED27",
        color: "#000",
      });
  },
};
</script>