<template>
  <h1>GTM</h1>
  <button data-ga-type="event" class="button">testing button</button>
  <div data-ga-type="event">ga type event</div>
</template>

<script>
import { initGTM } from "../utils/track";

export default {
  mounted() {
    initGTM();
  },
};
</script>
