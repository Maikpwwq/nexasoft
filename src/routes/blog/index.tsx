import { component$ } from "@builder.io/qwik";
import BlogPost from "~/components/blog/BlogPost";
import MainBanner from "~/components/main-banner/mainBanner";

export default component$(() => {
  return (
    <div class="container container-center flex justify-center flex-col">
      <BlogPost />
      <MainBanner />
    </div>
  );
});
