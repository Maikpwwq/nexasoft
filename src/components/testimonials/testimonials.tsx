import { component$ } from "@builder.io/qwik";
import { CustomersTestimonials } from "~/integrations/react/mui";
import styles from "./testimonials.module.css";

export default component$(() => {
  return (
    <testimonials
      id="testimonials-section"
      class={["mt-6", styles.testimonials]}
    >
      <CustomersTestimonials />
    </testimonials>
  );
});
