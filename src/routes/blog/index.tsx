import { component$ } from "@builder.io/qwik";
import BlogPost from "~/components/blog/BlogPost";

export default component$(() => {
  return (
    <div class="container container-center flex justify-center">
      <BlogPost />
    </div>
  );
});
