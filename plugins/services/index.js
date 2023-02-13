const initGtag = () => {
  const tag = document.createElement("script");
  const firstScriptTag = document.getElementsByTagName("script")[0];
  const ga_id = "G-5KT6MT5MZ8";
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${ga_id}`;
  tag.async = true;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.dataLayer.push({ event: "optimize.activate" });
  window.gtag("js", new Date());
  window.gtag("config", ga_id, {
    transport_url: "https://gtm-pfgg4zx-ndezy.uc.r.appspot.com",
    first_party_collection: true,
  });
};

export default () => {
  initGtag();
};
