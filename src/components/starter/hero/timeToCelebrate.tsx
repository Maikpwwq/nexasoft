import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

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
      <h1 class={styles.title} style="text-align: center; font-size: 6rem; font-weight: 900; line-height: 1.1; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
        Soluciones de
        <br />
        <span class="highlight" style="background: linear-gradient(120deg, #006ce9 0%, #ac7ff4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">desarrollo Web</span>
        <br />
        en <span class="highlight" style="background: linear-gradient(120deg, #006ce9 0%, #ac7ff4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Colombia</span>
      </h1>
      <p class="text-center pt-2">
        ¡Consigue una ventaja competitiva con nosotros!.
      </p>
    </div>
  );
});
