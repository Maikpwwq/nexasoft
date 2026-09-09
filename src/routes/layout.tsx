import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import TopContactBar from "~/components/header/top-contact-bar";
import Footer from "~/components/starter/footer/footer";
import Support from "~/components/support/support";
import WhatsAppFab from "~/components/whatsapp-fab/whatsapp-fab";

import styles from "./styles.css?inline";
import whatsappFabCss from "~/components/whatsapp-fab/whatsapp-fab.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  useStyles$(styles);
  useStyles$(whatsappFabCss);
  return (
    <>
      <TopContactBar />
      <Header />
      <main class="flex justify-center flex-col">
        <Slot />
      </main>
      <Support />
      <Footer />
      <WhatsAppFab />
    </>
  );
});
