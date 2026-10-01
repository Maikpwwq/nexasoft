import { component$ } from "@builder.io/qwik";

export const FooterBottom = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <div class="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
      <div class="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
        <span>Copyright © {currentYear}</span>
        <span class="text-white/20 select-none hidden sm:inline">|</span>
        <a
          href="https://www.nexasoft.com.co/"
          title="NexaSoft SAS"
          class="font-medium text-gray-300 hover:text-white transition-colors underline-offset-2 hover:underline"
        >
          NexaSoft SAS
        </a>
        <span class="text-white/20 select-none hidden sm:inline">|</span>
        <span>NIT: 901715604-6</span>
        <span class="text-white/20 select-none hidden sm:inline">|</span>
        <span>Todos los derechos reservados.</span>
      </div>
    </div>
  );
});
