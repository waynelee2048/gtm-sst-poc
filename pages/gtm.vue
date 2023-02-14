<template>
  <h1>GTM</h1>
  <button class="button">testing button</button>
</template>

<script>
import { initGTM } from "../utils/track";

export default {
  mounted() {
    initGTM();
  },
};
</script>
