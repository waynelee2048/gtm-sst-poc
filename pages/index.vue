<template>
  <h1>GTM Server Side Tagging POC</h1>
  <!-- <button @click="sendEvent">send click event</button>
  <br />
  <br />
  <button @click="sendConversionEvent">send conversion</button> -->
</template>

<script>
export default {
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
