<template>
  <section class="intro-content-container flex">
    <p
      class="lead relative responsive-text intro-content_text border"
      v-html="introText"
    ></p>
    <VisualContainer />
  </section>
</template>

<script>
import VisualContainer from "./Visual/VisualContainer";
export default {
  components: {
    VisualContainer,
  },
  data() {
    return {
      introText: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.beginTyping);
  },
  methods: {
    typing() {
      const JS_ANSWER = `JavaScript (JS) is one of the core technologies of the World Wide Web. JS is a "high-level language" that allows developers to implement complex features on web pages. It allows an application to "talk" with server(s), create animated graphics, or interesting effects, such as this typing effect. JS has 2 main jobs, <ul class="m-5"><li>Store relevant data</li><li>Execute code</li></ul> To handle these jobs, JS uses a memory heap and call stack. The memory heap is where JS allocates the data in memory. The call stack is where code is executed. <br><br> In addition to the JS language, there is a bigger container called "JS runtime environment". This environment contains the JS language as well as libraries that make JS even more useful.`;
      for (let i = 0; i < JS_ANSWER.length; i++) {
        setTimeout(() => {
          this.introText += JS_ANSWER[i];
        }, 50 * i);
      }
      window.removeEventListener("scroll", this.beginTyping);
    },
    beginTyping() {
      if (this.$el.getBoundingClientRect().top < window.innerHeight)
        this.typing();
    },
  },
};
</script>