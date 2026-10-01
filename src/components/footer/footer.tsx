import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import footerCss from "./footer.module.css?inline";
import { FooterBrand } from "./footer-brand";
import { FooterSolutions } from "./footer-solutions";
import { FooterLegal } from "./footer-legal";
import { FooterBottom } from "./footer-bottom";

export default component$(() => {
  useStyles$(footerCss);

  return (
    <footer class={[styles.footer, "text-white border-t border-white/10 relative"]}>
      {/* Luz halógena ambiental superior */}
      <div class={styles.ambientGlowTop} aria-hidden="true" />

      {/* Resplandores difusos decorativos de fondo */}
      <div
        class="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-[#ac7ff4]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -top-32 right-1/4 h-64 w-64 rounded-full bg-[#00f0ff]/10 blur-3xl"
        aria-hidden="true"
      />

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Columna 1: Marca, Contacto, Redes y Logo Chicó */}
          <div class="lg:col-span-5">
            <FooterBrand />
          </div>

          {/* Columna 2: Soluciones Web */}
          <div class="lg:col-span-4">
            <FooterSolutions />
          </div>

          {/* Columna 3: Legal & Empresa */}
          <div class="lg:col-span-3">
            <FooterLegal />
          </div>
        </div>

        {/* Barra inferior con Copyright */}
        <FooterBottom />
      </div>
    </footer>
  );
});
