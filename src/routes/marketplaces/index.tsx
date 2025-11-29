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
          Market<span class="highlight">Places</span>
        </h3>
        <p class="text-xl px-4 mt-4 text-center">
          En NexaSoft SAS, creamos MarketPlaces innovadores, conectando a
          múltiples comerciantes y anunciantes en una plataforma atractiva y
          funcional. Facilitamos contacto, gestionamos interacciones y
          aseguramos la seguridad de las transacciones. Potencia tu sitio web
          como un próspero centro de negocios en línea con nuestros
          MarketPlaces.
        </p>
      </div>
    </div>
  );
});
