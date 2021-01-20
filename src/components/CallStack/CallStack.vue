<template>
  <section id="stack" class="pb-5">
    <h3 class="display-3 sectionHeader">Call Stack</h3>
    <CallStackContainer />
  </section>
</template>

<script>
import CallStackContainer from "./CallStackContainer";
export default {
  components: {
    CallStackContainer,
  },
};
</script>