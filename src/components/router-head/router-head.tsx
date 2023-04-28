import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const title = "NexaSoft";
  const loc = useLocation(); // isNavigating, url, params
  console.log('useLocation', loc)

  return (
    <>
      <title>{title}</title>

       <link rel="canonical" /> {/* href={loc.url} */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self';script-src 'unsafe-inline' 'unsafe-eval' http:; style-src 'unsafe-inline' http:; img-src http: data:; font-src http: data:;"
      />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2PNKE0S3GJ"
      ></script>
      {/* <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',
        'G-2PNKE0S3GJ');
      </script> */}
    </>
  );
});
