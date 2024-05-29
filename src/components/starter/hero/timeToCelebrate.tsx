import { component$ } from "@builder.io/qwik";
import styles from "./timeToCelebrate.module.css";
import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
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
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          return new Promise<(opts: any) => void>((resolve, reject) => {
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            if ((globalThis as any).confetti) {
              // eslint-disable-next-line  @typescript-eslint/no-explicit-any
              return resolve((globalThis as any).confetti as any);
            }
            const script = document.createElement("script");
            script.src =
              "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
      <MUITypography variant="h1" align="center" className={styles.title}>
        Soluciones de
        <br />
        <span class="highlight">desarrollo Web</span>
        <br />
        en <span class="highlight">Colombia</span>
      </MUITypography>
      <p class="text-center">
        ¡Consigue una ventaja competitiva con nosotros!.
      </p>
    </div>
  );
});
