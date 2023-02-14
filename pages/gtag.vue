<template>
  <h1>Gtag</h1>
  <button @click="sendEvent">send click event</button>
  <br />
  <br />
  <input v-model="eventName" />
  <button @click="sendConversionEvent">
    send custom event: {{ eventName }}
  </button>
</template>

<script>
import { initGtag } from "../utils/track";
export default {
  data() {
    return {
      eventName: "conversion",
    };
  },
  mounted() {
    initGtag();
  },
  methods: {
    sendEvent() {
      window.gtag("event", "wayne_click");
    },
    sendConversionEvent() {
      window.gtag("event", this.eventName);
    },
  },
};
</script>
