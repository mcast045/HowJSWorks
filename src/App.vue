<template>
  <main id="app">
    <Header />
    <Landing />
    <Intro />
    <Memory />
    <CallStack />
  </main>
</template>

<script>
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing.vue";
import Intro from "./components/Intro/Intro";
import Memory from "./components/Memory/Memory";
import CallStack from "./components/CallStack/CallStack";

export default {
  name: "App",
  components: {
    Header,
    Landing,
    Intro,
    Memory,
    CallStack,
  },
};
</script>