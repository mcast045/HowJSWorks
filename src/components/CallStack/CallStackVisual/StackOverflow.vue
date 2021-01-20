<template>
  <div>
    <HeaderSection title="Overflow" :isOverflow="true" />
    <div class="flex stackOverflow">
      <WrittenCode :isOverflow="true" />
      <Overflow />
      <ReturnCode :isOverflow="true" />
    </div>
  </div>
</template>

<script>
import WrittenCode from "./Stacks/WrittenCode";
import ReturnCode from "./Stacks/ReturnCode";
import HeaderSection from "./Stacks/HeaderSection";
import Overflow from "./Stacks/Overflow";
export default {
  components: {
    WrittenCode,
    ReturnCode,
    HeaderSection,
    Overflow,
  },
};
</script>