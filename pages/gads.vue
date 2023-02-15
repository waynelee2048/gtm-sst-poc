<template>
  <h1>google ads: {{ tagId }}</h1>
  <input :class="$style.input" v-model="label" />
  <button @click="sendEvent">send ads conversion event</button>
</template>

<script>
export default {
  mounted() {
    const tag = document.createElement("script");
    const firstScriptTag = document.getElementsByTagName("script")[0];
    // testing account: AW-11091140760
    // const tag_id = "AW-11091176761";
    const tag_id = "AW-11091140760";
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${tag_id}`;
    tag.async = true;
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());

    window.gtag("config", tag_id, {
      transport_url: "https://gtm-pfgg4zx-ndezy.uc.r.appspot.com",
      first_party_collection: true,
    });
  },
  data() {
    // testing: MRgbCMK4mIwYEJjB1agp
    // 2DnVCM3t_IsYELna16gp
    // return { label: "2DnVCM3t_IsYELna16gp" };
    return {
      tagId: "AW-11091140760",
      label: "MRgbCMK4mIwYEJjB1agp",
    };
  },
  methods: {
    sendEvent() {
      // 直接發到 google ads
      if (!this.label) return;
      window.gtag("event", "conversion", {
        send_to: `${this.tagId}/${this.label}`,
        // custom payload
      });
    },
  },
};
</script>

<style module>
.input {
  width: 200px;
}
</style>
