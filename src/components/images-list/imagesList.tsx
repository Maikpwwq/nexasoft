import { component$, useSignal } from "@builder.io/qwik";
import { itemData } from "~/integrations/react/imageListItems";

export default component$(() => {
  const loadedCount = useSignal(0);

  return (
    <section id="gallery-section" class="relative py-16">
      <div role="presentation" class="ellipsis pointer-events-none"></div>
      <div role="presentation" class="ellipsis ellipsis-purple pointer-events-none"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight leading-tight mb-4">
          ¡Despierta el <span class="heroGradient">potencial</span> de tu negocio!
        </h2>
        <p class="py-4 text-xl text-center text-gray-200">
          Contáctanos y descubre nuestras poderosas soluciones de software.
        </p>
        <div class="w-full flex justify-center mx-auto mt-6">
          <div style="width: 500px; height: 600px;" class="grid grid-cols-4 gap-2">
            {itemData.map((item, index) => (
              <div
                key={index}
                class="overflow-hidden rounded"
                style={`grid-column: span ${item.cols}; grid-row: span ${item.rows};`}
              >
                {index <= loadedCount.value && (
                  <img
                    src={item.img}
                    alt={item.title}
                    width={item.cols ? item.cols * 125 : 125}
                    height={item.rows ? item.rows * 150 : 150}
                    loading="lazy"
                    class="w-full h-full object-cover"
                    onLoad$={() => {
                      if (loadedCount.value === index) {
                        loadedCount.value++;
                      }
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
