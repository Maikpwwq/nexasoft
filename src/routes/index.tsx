import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Contact from "~/components/contact/contact";
// import Counter from "~/components/starter/counter/counter";
import Features from "~/components/features/features";
import PortfolioProducts from "~/components/portfolio/portfolioProducts";
import Footer from "~/components/footer/footer";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import ImagesList from "~/components/images-list/imagesList";
// import MainBanner from "~/components/main-banner/mainBanner";
// import Starter from '~/components/starter/next-steps/next-steps';
import Testimonials from "~/components/testimonials/testimonials";

import { MUICard, MUICardContent } from "~/integrations/react/mui";

const styles = () => ({
  contactBox: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "0",
  },
  contactCard: {
    borderRadius: "33px",
    border: "1px solid #ac7ff4",
    backgroundColor: "var(--qwik-dirty-black)",
  },
});

export default component$(() => {
  const classes = styles();

  return (
    <>
      <Hero />
      {/* <Starter /> */}
      {/* <MainBanner /> */}
      <Features />
      <ImagesList />
      <PortfolioProducts />
      <Testimonials />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      {/* 
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
        <Counter />
      </div> */}

      <div class="container container-flex" style={classes.contactBox}>
        <MUICard style={classes.contactCard} variant="outlined">
          <MUICardContent>
            <Contact />

            <Infobox>
              <>
                <Footer />
              </>
            </Infobox>
          </MUICardContent>
        </MUICard>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "🚀 NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "💥¡Vende en linea como un profesional!. Creamos tu sitio web o tienda digital a la medida de tu negocio.",
    },
  ],
};
