import { component$, useSignal } from "@builder.io/qwik";
import styles from "./imagesList.module.css";
import { itemData } from "~/integrations/react/imageListItems";

export default component$(() => {
  const loadedCount = useSignal(0);

  return (
    <imageslist class="relative">
      <div class="container">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
          ¡Despierta el <span class="blueHighlight font-bold"> potencial </span>{" "}
          de tu negocio!
        </h2>
        <p class="py-6 text-xl text-center">
          Contáctanos y descubre nuestras poderosas soluciones de software.
        </p>
        <div class="w-100 flex justify-center mx-auto">
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
    </imageslist>
  );
});
