import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const analyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2PNKE0S3GJ');
  `;

  const pixelFacebookScript = `
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1328132094455273');
      fbq('track', 'PageView');
  `;

  // , location, type
  const proxyFb = function (url: any) {
    const proxy = "https://nexasoft.dev" // "http://localhost/proxy/"
    if (
      url.hostname === "connect.facebook.net" ||
      url.hostname === "www.googletagmanager.com" ||
      url.hostname === "www.google-analytics.com"
    ) {
      const proxyUrl = new URL(proxy);
      proxyUrl.searchParams.append("url", url.href);
      return proxyUrl;
    }
    return url;
  };

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="facebook-domain-verification" content="8r9sxxnm9fxblri4lae8azis4v45id" />
        {/* <script>
          partytown = {
            resolveUrl: proxyFb,
            forward: ["fbq", 'dataLayer.push'],
          };
        </script> */}
        <QwikPartytown
          resolveUrl={proxyFb}
          forward={["dataLayer.push", "fbq"]}
        />
        {/* Google tag (gtag.js)  */}
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-2PNKE0S3GJ"
        />
        <script
          type="text/partytown"
          defer
          async
          dangerouslySetInnerHTML={analyticsScript}
        ></script>
        {/* <!-- Meta Pixel Code --> */}
        <script
          type="text/partytown"
          defer
          async
          dangerouslySetInnerHTML={pixelFacebookScript}
        ></script>
        {/* <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=1328132094455273&ev=PageView&noscript=1"
          />
        </noscript> */}
        {/* <!-- End Meta Pixel Code --> */}

        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
