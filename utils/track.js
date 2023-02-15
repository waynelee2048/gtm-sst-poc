export const initGtag = () => {
  const tag = document.createElement("script");
  const firstScriptTag = document.getElementsByTagName("script")[0];
  const ga4_id = "G-5KT6MT5MZ8";
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${ga4_id}`;
  tag.async = true;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());

  window.gtag("config", ga4_id, {
    transport_url: "https://gtm-pfgg4zx-ndezy.uc.r.appspot.com",
    first_party_collection: true,
  });
};

export const initGTM = () => {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    const f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-P983JV3");
};
