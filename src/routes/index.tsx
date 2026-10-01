import { component$, useStyles$ } from "@builder.io/qwik"; // , useSignal
import modularFormCss from "~/components/modular-forms/modularForm.module.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
// import Contact from "~/components/contact/contact";
// import Counter from "~/components/starter/counter/counter";

import PortfolioProducts from "~/components/portfolio/portfolioProducts";
import Hero from "~/components/starter/hero/hero";
// import Starter from '~/components/starter/next-steps/next-steps';
import Testimonials from "~/components/testimonials/testimonials";


import Further from "~/components/further/further";
import Advantages from "~/components/advantages/advantages";
import Secrets from "~/components/secrets/secrets";
import Questions from "~/components/common-questions/questions";

export default component$(() => {
  useStyles$(modularFormCss);

  return (
    <>
      <Hero />
      {/* <Starter /> */}
      <Questions />
      <PortfolioProducts />
      <Further />
      <Advantages />
      <Testimonials />
      <Secrets />
    </>
  );
});

export const head: DocumentHead = {
  title: "🚀 NexaSoft SAS",
  meta: [
    {
      name: "description",
      content:
        "Modernizamos tu sitio web: rápido, profesional, visible en Google, con contrato de servicios y soporte formal.",
    },
  ],
};
