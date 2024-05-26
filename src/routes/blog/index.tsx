import { component$ } from "@builder.io/qwik";
import { MUITypography } from "~/integrations/react/mui";
import BlogPost from "~/components/blog/BlogPost";

export default component$(() => {
  return (
    <div class="container container-center flex justify-center" style={{}}>
      <div class="flex flex-col justify-center items-center relative">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <MUITypography
          variant="h3"
          align="center"
          className="font-bold mx-auto m-5 w-100"
        >
          Blog <span class="highlight">Web</span>
        </MUITypography>
        <BlogPost />
      </div>
    </div>
  );
});
