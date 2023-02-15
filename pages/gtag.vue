<template>
  <h1>Gtag</h1>
  <button @click="sendEvent">send click event</button>
  <br />
  <br />
  <button @click="sendConversionEvent">send conversion event</button>
  <br />
  <br />
  <input v-model="eventName" />
  <button @click="sendCustomEvent">send custom event: {{ eventName }}</button>
</template>

<script>
import { initGtag } from "../utils/track";
export default {
  data() {
    return {
      eventName: "",
    };
  },
  mounted() {
    initGtag();
  },
  methods: {
    sendEvent() {
      window.gtag("event", "wayne_click");
    },
    sendCustomEvent() {
      if (!this.eventName) return;
      window.gtag("event", this.eventName);
    },
    sendConversionEvent() {
      window.gtag("event", "conversion", {
        send_to: "AW-11091176761/2DnVCM3t_IsYELna16gp",
      });
    },
  },
};
</script>
