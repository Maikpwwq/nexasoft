import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Testimonials from "../components/testimonials/testimonials";
import Features from "../components/features/features";
import MainBanner from "../components/main-banner/mainBanner";

export default component$(() => {
  return (
    <div>
      <h1>
        Bienvenido a NexaSoft <span class="lightning">⚡️</span>
      </h1>
      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
      <MainBanner />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
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
