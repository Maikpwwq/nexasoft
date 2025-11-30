import {
  component$,
  useStylesScoped$,
  useStore,
  useVisibleTask$,
  $,
} from "@builder.io/qwik";
import styles from "./mainBanner.css?inline";

import SoftwarePersonalizado from "~/assets/img/banners/Soluciones de software personalizadas.png";
import Negociosdigitales from "~/assets/img/banners/Crecimiento y eficiencia de negocios digitales.png";
import ModernizarPlataformas from "~/assets/img/banners/Modernizar y optimizar tus plataformas.png";
import SolucionesSoftware from "~/assets/img/banners/Soluciones empresariales de software.png";

export default component$(() => {
  useStylesScoped$(styles);

  const bannerImg = [
    {
      id: 0,
      img: SoftwarePersonalizado,
      description: "Soluciones de software personalizadas.",
    },
    {
      id: 1,
      img: Negociosdigitales,
      description: "Crecimiento y eficiencia de negocios digitales.",
    },
    {
      id: 2,
      img: ModernizarPlataformas,
      description: "Modernizar y optimizar tus plataformas.",
    },
    {
      id: 3,
      img: SolucionesSoftware,
      description: "Soluciones empresariales de software.",
    },
  ];

  const store = useStore({
    count: 0,
    maxSteps: bannerImg.length,
  });

  const nextStep = $(() => {
    store.count = (store.count + 1) % store.maxSteps;
  });

  const prevStep = $(() => {
    store.count = (store.count - 1 + store.maxSteps) % store.maxSteps;
  });

  const goToStep = $((step: number) => {
    store.count = step;
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const timer = setInterval(() => {
      nextStep();
    }, 5000); // Changed to 5000ms for better UX, original was 1000ms which is too fast

    cleanup(() => clearInterval(timer));
  });

  return (
    <div class="relative w-full flex flex-col items-center justify-center overflow-hidden bg-gray-50 py-4">
      {/* Carousel Container */}
      <div class="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${store.count * 100}%)` }}
        >
          {bannerImg.map((item) => (
            <div key={item.id} class="w-full flex-shrink-0">
              <img
                src={item.img}
                alt={item.description}
                class="w-full h-auto object-cover"
                width={800}
                height={400}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick$={prevStep}
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          onClick$={nextStep}
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Stepper Dots */}
      <div class="flex justify-center gap-2 mt-4">
        {bannerImg.map((_, index) => (
          <button
            key={index}
            onClick$={() => goToStep(index)}
            class={[
              "w-3 h-3 rounded-full transition-colors duration-300",
              store.count === index
                ? "bg-[var(--qwik-dark-blue)] scale-110"
                : "bg-gray-300 hover:bg-gray-400",
            ]}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
});
