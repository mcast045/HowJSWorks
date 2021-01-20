<template>
  <div>
    <div class="flex functional-callstack">
      <WrittenCode :isOverflow="false" />
      <Stack :divs="divs" class="bottom-row" />
      <ReturnCode :isOverflow="false" />
    </div>
    <HeaderSection title="Stack" :isOverflow="false" />
  </div>
</template>

<script>
import WrittenCode from "./Stacks/WrittenCode";
import Stack from "../../Intro/Visual/Stack/Stack";
import ReturnCode from "./Stacks/ReturnCode";
import HeaderSection from "./Stacks/HeaderSection";
export default {
  components: {
    WrittenCode,
    Stack,
    ReturnCode,
    HeaderSection,
  },
  data() {
    return {
      divs: ["third()", "second()", "first()"],
    };
  },
};
</script>