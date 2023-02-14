<template>
  <h1>Gtag</h1>
  <button @click="sendEvent">send click event</button>
  <br />
  <br />
  <button @click="sendConversionEvent">send conversion</button>
</template>

<script>
import { initGtag } from "../utils/track";
export default {
  mounted() {
    initGtag();
  },
  methods: {
    sendEvent() {
      window.gtag("event", "wayne_click");
    },
    sendConversionEvent() {
      window.gtag("event", "conversion");
    },
  },
};
</script>
