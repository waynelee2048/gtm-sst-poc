<template>
  <h1>GTM Server Side Tagging POC</h1>
  <button @click="sendEvent">click</button>
</template>

<script>
export default {
  methods: {
    sendEvent() {
      window.gtag("event", "click");
    },
  },
};
</script>
