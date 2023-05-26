import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Contact from "../components/contact/contact";
// import Counter from "~/components/starter/counter/counter";
import Features from "../components/features/features";
import Footer from "../components/footer/footer";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import ImagesList from "~/components/images-list/imagesList";
// import MainBanner from "../components/main-banner/mainBanner";
// import Starter from '~/components/starter/next-steps/next-steps';
import Testimonials from "../components/testimonials/testimonials";

export default component$(() => {
  return (
    <>
      <Hero />
      {/* <Starter /> */}
      {/* <MainBanner /> */}
      <Features />
      <ImagesList />
      <Testimonials />
      <Contact />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      {/* 
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
        <Counter />
      </div> */}

      <div class="container container-flex">
        <Infobox>
          <>
            <Footer />
          </>
        </Infobox>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
