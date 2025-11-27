import { component$ } from "@builder.io/qwik"; // , useSignal
import styles from "~/components/modular-forms/modularForm.module.css";
import type { DocumentHead } from "@builder.io/qwik-city";
// import Contact from "~/components/contact/contact";
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


import Resume from "~/components/resume/resume";
import Further from "~/components/further/further";
import Advantages from "~/components/advantages/advantages";
import BlogPost from "~/components/blog/BlogPost";
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
  // const classes = styles();

  return (
    <>
      <Hero />
      {/* <Starter /> */}
      {/* <MainBanner /> */}
      <Features />
      <Resume />
      <ImagesList />
      <PortfolioProducts />
      <Further />
      <Advantages />
      <Testimonials />
      <Secrets />
      <BlogPost />
      <Questions />
      <div id="contact-section" class="container container-flex contactBox">
        <div class={styles.contactCard}>
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
