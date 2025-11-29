import { component$ } from "@builder.io/qwik";


export default component$(() => {
  return (
    <div
      class="container container-center flex justify-center"
      style={{ height: "80vh" }}
    >
      <div class="flex flex-col justify-center items-center relative">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <h3 class="text-4xl font-bold mx-auto m-5 w-full text-center">
          Aplicativos <span class="highlight">Web Progresivos</span>
        </h3>
        <p class="text-xl px-4 mt-4 text-center">
          En NexaSoft SAS, potenciamos tu productividad con Aplicativos Web
          Progresivos que digitalizan tus procesos internos. Nuestra experiencia
          se traduce en eficientes soluciones personalizadas que optimizan tus
          operaciones. Desde la gestión de datos hasta la automatización de
          tareas. ¡Descubre cómo podemos impulsar tu modelo de negocios con
          tecnología de vanguardia!
        </p>
      </div>
    </div>
  );
});
