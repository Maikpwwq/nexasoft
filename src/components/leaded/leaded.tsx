import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./leaded.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <leaded>
      <div>
        Encabezado: Incluye el nombre de la empresa y un menú de navegación para
        que los visitantes puedan acceder fácilmente a otras secciones de tu
        sitio.
      </div>
    </leaded>
  );
});
