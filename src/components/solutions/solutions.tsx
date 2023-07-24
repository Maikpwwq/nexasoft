import { component$ } from "@builder.io/qwik";

import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  // useStylesScoped$(styles);

  return (
    <solutions id="solutions-section" class="mt-6 mb-6">
      <MUITypography className="mt-6 mb-6 pb-6" variant="body1">
        Software Solutions
      </MUITypography>
    </solutions>
  );
});
