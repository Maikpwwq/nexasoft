import {
  component$,
  useStyles$,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import loaderCss from "./global-loader.css?inline";
import LogoFushia from "~/assets/img/Logos Nexasoft/Logo-Fushia-Nexasoft-SAS.png";
import LogoNexasoft from "~/assets/img/Logos Nexasoft/Logo-Nexasoft-SAS.png";

export const GlobalLoader = component$(() => {
  useStyles$(loaderCss);

  const state = useStore({
    isFadingOut: false,
    isDone: false,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    let fadeTimer: number | undefined;

    const dismiss = () => {
      if (state.isFadingOut || state.isDone) return;
      state.isFadingOut = true;
      fadeTimer = window.setTimeout(() => {
        state.isDone = true;
      }, 400); // Coincide con la duración de la transición CSS
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(dismiss);
    } else {
      window.addEventListener("load", dismiss, { once: true });
      cleanup(() => window.removeEventListener("load", dismiss));
    }

    // Mecanismo de seguridad failsafe: evitar que el loader quede bloqueado indefinidamente
    const failsafe = window.setTimeout(dismiss, 2500);

    cleanup(() => {
      if (fadeTimer) clearTimeout(fadeTimer);
      clearTimeout(failsafe);
    });
  });

  if (state.isDone) {
    return null;
  }

  return (
    <>
      <div
        id="global-loader"
        class={["global-loader", state.isFadingOut ? "global-loader--fade-out" : ""]}
        role="status"
        aria-live="polite"
        aria-label="Cargando NexaSoft SAS"
        aria-hidden={state.isFadingOut}
        tabIndex={-1}
      >
        <div class="global-loader__content">
          <div class="global-loader__logo-wrapper">
            {/* Logo 1: Base de referencia visual (Fucsia) */}
            <img
              src={LogoFushia}
              alt="NexaSoft SAS"
              width={210}
              height={210}
              class="global-loader__logo-base"
              loading="eager"
              decoding="sync"
            />

            {/* Logo 2: Logo principal con revelado suave y sombra tecnológica */}
            <img
              src={LogoNexasoft}
              alt="NexaSoft SAS"
              width={210}
              height={210}
              class="global-loader__logo-overlay"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>
      </div>

      {/* Fallback no-JS: si JavaScript está desactivado, no bloquear la navegación */}
      <noscript>
        <style>{`#global-loader { display: none !important; }`}</style>
      </noscript>
    </>
  );
});

export default GlobalLoader;
