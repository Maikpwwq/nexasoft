import { component$, useStore, useVisibleTask$, useStyles$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import heroCss from "./hero.module.css?inline";

export const TYPEWRITER_CONFIG = {
  h1BaseSpeedMs: 45, // Velocidad sugerida 35-55ms
  h1JitterMs: 10, // Variación aleatoria ±10ms para naturalidad humana
  startDelayMs: 200, // Pequeña pausa antes de iniciar la escritura
  linePauseMs: 120, // Pausa breve entre líneas del H1
  cursorBlinkDurationMs: 2500, // Duración del cursor parpadeante tras finalizar
} as const;

export default component$(() => {
  useStyles$(heroCss);
  const state = useStore({
    phase: "init" as "init" | "line1" | "line2" | "done",
    line1: "",
    line2: "",
    hasColon: false,
    showCursor: true,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ cleanup }) => {
      // Respetar preferencia de reducción de movimiento del usuario
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        state.line1 = "Modernizamos tu";
        state.line2 = "sitio web";
        state.hasColon = true;
        state.phase = "done";
        state.showCursor = false;
        return;
      }

      let timeoutId: number | undefined;
      const line1Full = "Modernizamos tu";
      const line2Full = "sitio web";

      const getH1CharDelay = () => {
        const jitter =
          Math.floor(Math.random() * (TYPEWRITER_CONFIG.h1JitterMs * 2 + 1)) -
          TYPEWRITER_CONFIG.h1JitterMs;
        return Math.max(20, TYPEWRITER_CONFIG.h1BaseSpeedMs + jitter);
      };

      const startTyping = () => {
        state.phase = "line1";
        let i = 0;

        const typeLine1 = () => {
          if (i < line1Full.length) {
            state.line1 = line1Full.slice(0, i + 1);
            i++;
            timeoutId = window.setTimeout(typeLine1, getH1CharDelay());
          } else {
            // Fin línea 1: pausa breve antes de línea 2
            timeoutId = window.setTimeout(() => {
              state.phase = "line2";
              let j = 0;
              const typeLine2 = () => {
                if (j < line2Full.length) {
                  state.line2 = line2Full.slice(0, j + 1);
                  j++;
                  timeoutId = window.setTimeout(typeLine2, getH1CharDelay());
                } else {
                  // Agregar dos puntos al título
                  state.hasColon = true;
                  state.phase = "done";
                  timeoutId = window.setTimeout(() => {
                    state.showCursor = false;
                  }, TYPEWRITER_CONFIG.cursorBlinkDurationMs);
                }
              };
              typeLine2();
            }, TYPEWRITER_CONFIG.linePauseMs);
          }
        };

        typeLine1();
      };

      timeoutId = window.setTimeout(startTyping, TYPEWRITER_CONFIG.startDelayMs);

      cleanup(() => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      });
    },
    { strategy: "intersection-observer" },
  );

  return (
    <div
      class={styles.timeToCelebrate}
      onClick$={async () => {
        const defaults = {
          spread: 360,
          ticks: 70,
          gravity: 0,
          decay: 0.95,
          startVelocity: 30,
          colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
          origin: {
            x: 0.5,
            y: 0.35,
          },
        };

        function loadConfetti() {
          return new Promise<(opts: any) => void>((resolve, reject) => {
            if ((globalThis as any).confetti) {
              return resolve((globalThis as any).confetti as any);
            }
            const script = document.createElement("script");
            script.src =
              "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";

            script.onload = () => resolve((globalThis as any).confetti as any);
            script.onerror = reject;
            document.head.appendChild(script);
            script.remove();
          });
        }

        const confetti = await loadConfetti();

        function shoot() {
          confetti({
            ...defaults,
            particleCount: 80,
            scalar: 1.2,
          });

          confetti({
            ...defaults,
            particleCount: 60,
            scalar: 0.75,
          });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        setTimeout(shoot, 300);
        setTimeout(shoot, 400);
      }}
    >
      <h1 class={[styles.heroTitle, styles.title, "relative select-none"]}>
        {/* Capa 1 (Semántica & Accesibilidad): disponible inmediatamente en HTML para SEO y lectores de pantalla */}
        <span class="sr-only">Modernizamos tu sitio web:</span>

        {/* Capa 2 (Reserva anti-CLS): ocupa exactamente las mismas dimensiones físicas desde el SSR inicial */}
        <span class="invisible block pointer-events-none" aria-hidden="true">
          Modernizamos tu
          <br />
          <span class={["highlight", styles.heroGradient]}>sitio web</span>:
        </span>

        {/* Capa 3 (Visual animada): animada con efecto máquina de escribir */}
        <span
          aria-hidden="true"
          class="absolute inset-0 block text-center pointer-events-none"
        >
          {/* Línea 1 */}
          <span>{state.line1}</span>
          {state.phase === "line1" && state.showCursor && (
            <span class={styles.typewriterCursor}>|</span>
          )}

          {/* Salto de línea para línea 2 */}
          {(state.phase === "line2" ||
            state.phase === "done") && <br />}

          {/* Línea 2 con gradiente y dos puntos */}
          {(state.phase === "line2" ||
            state.phase === "done") && (
              <>
                <span class={["highlight", styles.heroGradient]}>
                  {state.line2}
                </span>
                {state.hasColon && ":"}
                {state.phase === "line2" && state.showCursor && (
                  <span class={styles.typewriterCursor}>|</span>
                )}
              </>
            )}
        </span>

        {/* Fallback no-JS para navegadores con JavaScript deshabilitado */}
        <noscript>
          <span
            class="absolute inset-0 block text-center pointer-events-none"
            aria-hidden="true"
          >
            Modernizamos tu
            <br />
            <span class={["highlight", styles.heroGradient]}>sitio web</span>:
          </span>
        </noscript>
      </h1>

      {/* Subtítulo estático de la propuesta de valor */}
      <p class="text-center relative select-none" style={{ top: "-5vh" }}>
        rápido, profesional, visible en Google y con contrato de soporte.
      </p>
    </div>
  );
});
