import { component$ } from "@builder.io/qwik";
import styles from "./testimonials.module.css";

import ComunidadDezzpoLogo from "~/assets/img/logos/Comunidad-Dezzpo.jpg";
import WaviPixelLogo from "~/assets/img/logos/WaviPixelLogo.png";
import NagaLogo from "~/assets/img/logos/Naga-Reg-Aguas.png";
import PrimalTrace from "~/assets/img/logos/PrimalTrace.png";
import ConstructoraColombia from "~/assets/img/logos/ConstructoraColombiaOficial.png";

import ComunidadDezzpoImage from "~/assets/img/webClientes/ComunidadDezzpoImage.png";
import WaviImage from "~/assets/img/webClientes/WaviImage.png";
import NagaImage from "~/assets/img/webClientes/NagaImage.png";
import PrimalTraceImage from "~/assets/img/webClientes/PrimalTraceImage.png";
import ConstructoraColombiaImage from "~/assets/img/webClientes/ConstructoraColombiaImage.png";

import AstroIcon from "~/assets/img/technologies/Astro.png";
import ethersIcon from "~/assets/img/technologies/ethers.png";
import FirebaseIcon from "~/assets/img/technologies/Firebase.png";
import SendbirdIcon from "~/assets/img/technologies/Sendbird.png";
import NextJsBlancoIcon from "~/assets/img/technologies/NextJsBlanco.png";
import PiniaIcon from "~/assets/img/technologies/Pinia.png";
import ReduxIcon from "~/assets/img/technologies/Redux.png";
import SolidityIcon from "~/assets/img/technologies/Solidity.png";
import SqliteIcon from "~/assets/img/technologies/Sqlite.png";
import SupabaseIcon from "~/assets/img/technologies/Supabase.png";
import TheGraphIcon from "~/assets/img/technologies/The-Graph.png";
import VikeJsIcon from "~/assets/img/technologies/VikeJs.png";
import ViteIcon from "~/assets/img/technologies/Vite.png";
import MuiMaterialIcon from "~/assets/img/technologies/MuiMaterial.png";
import TailwindIcon from "~/assets/img/technologies/Tailwind.png";
import VueJsIcon from "~/assets/img/technologies/VueJs.png";
import VuetifyIcon from "~/assets/img/technologies/Vuetify.png";
import VuexIcon from "~/assets/img/technologies/Vuex.png";
import web3AuthIcon from "~/assets/img/technologies/web3-auth.png";

export default component$(() => {
  const testimonials = [
    {
      message:
        "¡Increíble experiencia trabajando con NexaSoft SAS! Modernizamos nuestra plataforma para brindar un servicio mejorado a nuestros clientes y aumentar nuestras ventas.",
      name: "WaviAeronautics",
      alt: "Logo de Wavi Aeronautics",
      logo: WaviPixelLogo,
      image: WaviImage,
      webSite: "https://wavi-aeronautics.vercel.app/",
      technologies: [
        NextJsBlancoIcon,
        FirebaseIcon,
        TailwindIcon,
        ReduxIcon,
        PiniaIcon,
      ],
    },
    {
      message:
        "Mejoramos la productividad de nuestros sistemas existentes, ahora confiamos en NexaSoft SAS el mantenimiento de nuestros sistemas, conociendo que estarán disponibles en todo momento y podremos cumplir con los plazos de entrega.",
      name: "Naga Regeneración de Aguas",
      alt: "Logo Naga Regeneración de Aguas",
      logo: NagaLogo,
      image: NagaImage,
      webSite: "https://naga-regeneracion-aguas-frontend.vercel.app",
      technologies: [VueJsIcon, PiniaIcon, VuetifyIcon, SqliteIcon],
    },
    {
      message:
        "¡NexaSoft SAS ha transformado nuestra experiencia! Costos reducidos, aplicación intuitiva y gran aceptación entre nuestros usuarios finales. Impresionante.",
      name: "Comunidad Dezzpo",
      alt: "Logo Comunidad Dezzpo",
      logo: ComunidadDezzpoLogo,
      image: ComunidadDezzpoImage,
      webSite: "https://dezzpo.com/",
      technologies: [
        VikeJsIcon,
        ViteIcon,
        FirebaseIcon,
        ReduxIcon,
        MuiMaterialIcon,
        TailwindIcon,
        SendbirdIcon,
      ],
    },
    {
      message:
        "Con plena confianza, hemos establecido una estratégica asociación con NexaSoft SAS para garantizar una trazabilidad segura de nuestro proyecto en la blockchain.",
      name: "PrimalTrace",
      alt: "Logo PrimalTrace",
      logo: PrimalTrace,
      image: PrimalTraceImage,
      webSite: "https://primaltrace-nuxt-ssr.vercel.app/",
      technologies: [
        VuexIcon,
        PiniaIcon,
        SupabaseIcon,
        ethersIcon,
        SolidityIcon,
        web3AuthIcon,
        TheGraphIcon,
      ],
    },
    {
      message:
        "Me encantó trabajar mi sitio web con Nexasoft SAS. Sus expertos resolvieron todas mis dudas y definieron cada etapa con total transparencia. ¡Muy recomendados!",
      name: "Constructora Colombia",
      alt: "Logo Constructora Colombia",
      logo: ConstructoraColombia,
      image: ConstructoraColombiaImage,
      webSite: "https://constructoracolombia.co/",
      technologies: [AstroIcon, TailwindIcon, ViteIcon],
    },
  ];

  return (
    <div
      id="testimonials-section"
      class={["flex flex-col container-purple px-0 py-6 w-full m-0", styles.testimonials]}
    >
      <h2
        class="py-8 text-center font-bold"
        style={{ fontSize: "2rem", color: "rgba(255, 255, 255, 1)" }}
      >
        Nuestros{" "}
        <span
          class="highlight font-bold md:text-6xl sm:text-3xl text-2xl"
          style={{ color: "rgba(255, 255, 255, 1)", borderColor: "#e5e7eb" }}
        >
          Clientes
        </span>{" "}
        Satisfechos.
      </h2>
      <div
        class="flex flex-row items-center justify-center mx-auto my-8 flex-wrap gap-6"
      >
        {testimonials.map((testimony, index) => {
          const { message, name, alt, logo, image, webSite, technologies } = testimony;
          return (
            <div key={index} class="bg-white rounded-2xl shadow-lg overflow-hidden w-[300px] hover:scale-105 transition-transform duration-300">
              <div class="h-[184px] w-full overflow-hidden">
                <img src={image} alt={name} height={184} width={300} class="object-cover w-full h-full" />
              </div>
              <div class="p-4">
                <div class="font-bold text-xl text-black">
                  <a
                    href={webSite}
                    class="flex flex-col justify-center items-center hover:text-blue-600"
                    target="_blank"
                  >
                    <img
                      src={logo}
                      alt={alt}
                      height={84}
                      width={84}
                      class="mt-2 mb-4 me-2 object-contain"
                    />
                    {name}
                  </a>
                </div>
                <p class="mt-4 text-gray-600 text-sm">
                  {message}
                </p>
                <div class="flex flex-row items-center justify-center mx-auto my-6 flex-wrap gap-1">
                  {technologies.map((icon, idx) => (
                    <img
                      src={icon}
                      class="mx-1"
                      key={idx}
                      alt="iconTechnology"
                      height={33}
                      width={33}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
