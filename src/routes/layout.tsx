import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Footer from "~/components/starter/footer/footer";
import Support from "~/components/support/support";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main class="flex justify-center flex-col">
        <Slot />
      </main>
      <Support />
      <Footer />
    </>
  );
});
