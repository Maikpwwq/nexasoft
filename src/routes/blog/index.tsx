import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import BlogPost from "~/components/blog/BlogPost";
import MainBanner from "~/components/main-banner/mainBanner";

export const head: DocumentHead = {
  title: "Blog | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Explora guías sobre desarrollo web, metodologías de ingeniería de software, inteligencia artificial y soluciones digitales avanzadas con NexaSoft SAS.",
    },
    {
      property: "og:title",
      content: "Blog | NexaSoft SAS",
    },
    {
      property: "og:description",
      content: "Explora guías sobre desarrollo web, metodologías de ingeniería de software, inteligencia artificial y soluciones digitales avanzadas.",
    },
  ],
};

export default component$(() => {
  return (
    <div class="container container-center flex justify-center flex-col">
      <BlogPost />
      <MainBanner />
    </div>
  );
});
