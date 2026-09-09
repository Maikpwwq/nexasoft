import { component$, useStyles$ } from "@builder.io/qwik"; // , useSignal
import styles from "~/components/modular-forms/modularForm.module.css";
import modularFormCss from "~/components/modular-forms/modularForm.module.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
// import Contact from "~/components/contact/contact";
// import Counter from "~/components/starter/counter/counter";

import PortfolioProducts from "~/components/portfolio/portfolioProducts";
import Footer from "~/components/footer/footer";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
// import Starter from '~/components/starter/next-steps/next-steps';
import Testimonials from "~/components/testimonials/testimonials";


import Resume from "~/components/resume/resume";
import Further from "~/components/further/further";
import Advantages from "~/components/advantages/advantages";
import Secrets from "~/components/secrets/secrets";
import Questions from "~/components/common-questions/questions";

// const styles = () => ({
//   contactCard: {
//     borderRadius: "33px",
//     border: "1px solid #ac7ff4",
//     backgroundColor: "var(--qwik-dirty-black)",
//     margin: "0 10px",
//   },
// });

export default component$(() => {
  useStyles$(modularFormCss);

  return (
    <>
      <Hero />
      {/* <Starter /> */}
      <Questions />
      <Resume />
      <PortfolioProducts />
      <Further />
      <Advantages />
      <Testimonials />
      <Secrets />
      <div id="contact-section" class="container container-flex contactBox w-full flex justify-center py-8">
        <div
          class={[
            styles.contactCard,
            "rounded-[33px] border border-[#ac7ff4] bg-[#0f0a28] my-4 mx-2 sm:mx-auto max-w-lg w-full shadow-2xl p-2 sm:p-4",
          ]}
        >
          <Infobox>
            <>
              <Footer />
            </>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "🚀 NexaSoft SAS",
  meta: [
    {
      name: "description",
      content:
        "💥¡Vende en linea como un profesional!. Creamos tu sitio web o tienda digital a la medida de tu negocio.",
    },
  ],
};
