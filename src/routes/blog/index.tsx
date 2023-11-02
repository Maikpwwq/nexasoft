import { component$ } from "@builder.io/qwik";
import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <div class="container container-center flex justify-center" style={{height: '80vh'}}>
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
        <p class="text-xl px-4 mt-4 text-center">
          ...
        </p>
      </div>
    </div>
  );
});
