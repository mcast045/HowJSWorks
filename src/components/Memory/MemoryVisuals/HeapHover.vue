<template>
  <p class="bubbleText lead" v-show="garbageCollectionInfo">
    {{ content }}
  </p>
</template>

<script>
export default {
  props: {
    garbageCollectionInfo: Boolean,
    content: String,
  },
};
</script>