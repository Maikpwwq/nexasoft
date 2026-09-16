import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./testimonials.module.css";
import testimonialsCss from "./testimonials.module.css?inline";

import ComunidadDezzpoLogo from "~/assets/img/logos/Comunidad-Dezzpo.jpg";
import WaviPixelLogo from "~/assets/img/logos/WaviPixelLogo.png";
import FocalisLogo from "~/assets/img/logos/Logo-FOCALIS-V1.png";
import NagaLogo from "~/assets/img/logos/Naga-Reg-Aguas.png";
import PrimalTrace from "~/assets/img/logos/PrimalTrace.png";
import ConstructoraColombia from "~/assets/img/logos/ConstructoraColombiaOficial.png";

import ComunidadDezzpoImage from "~/assets/img/webClientes/ComunidadDezzpoImage.png";
import WaviImage from "~/assets/img/webClientes/WaviImage.png";
import FocalisImage from "~/assets/img/webClientes/FocalisImage.png";
import NagaImage from "~/assets/img/webClientes/NagaImage.png";
import PrimalTraceImage from "~/assets/img/webClientes/PrimalTraceImage.png";
import ConstructoraColombiaImage from "~/assets/img/webClientes/ConstructoraColombiaImage.png";

import AstroIcon from "~/assets/img/technologies/Astro.png";
import ethersIcon from "~/assets/img/technologies/ethers.png";
import FirebaseIcon from "~/assets/img/technologies/Firebase.png";
import SendbirdIcon from "~/assets/img/technologies/Sendbird.png";
import NextJsNegroIcon from "~/assets/img/technologies/NextJsNegro.png";
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

interface Technology {
  name: string;
  icon: string;
}

interface Testimonial {
  message: string;
  name: string;
  alt: string;
  logo: string;
  image: string;
  webSite: string;
  technologies: Technology[];
}

export default component$(() => {
  useStyles$(testimonialsCss);
  const testimonials: Testimonial[] = [
    {
      message:
        "¡Gracias a NexaSoft SAS modernizamos nuestra plataforma para brindar un mejor servicio a nuestros clientes y aumentamos el alcance de ventas!",
      name: "WaviAeronautics",
      alt: "Logo de Wavi Aeronautics",
      logo: WaviPixelLogo,
      image: WaviImage,
      webSite: "https://wavi-aeronautics.vercel.app/",
      technologies: [
        { name: "Next.js", icon: NextJsNegroIcon },
        { name: "Firebase", icon: FirebaseIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "Redux", icon: ReduxIcon },
        { name: "Pinia", icon: PiniaIcon },
      ],
    },
    {
      message:
        "Ahora contamos con una plataforma que nos acerca a potenciales clientes y nos ayuda con nuestra misión de asesorar proyectos verdes.",
      name: "Focalis Stratega Group",
      alt: "Logo Focalis Stratega Group",
      logo: FocalisLogo,
      image: FocalisImage,
      webSite: "https://focalis-stratega-group.pages.dev/",
      technologies: [
        { name: "Astro", icon: AstroIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "Supabase", icon: SupabaseIcon },
      ],
    },
    {
      message:
        "¡Excelente decisión! Mejoramos la productividad de nuestros sistemas, ahora confiamos en sus soluciones para el mantenimiento de nuestros sistemas, conociendo que estarán disponibles en todo momento y cumpliendo con los plazos de entrega.",
      name: "Naga Regeneración de Aguas",
      alt: "Logo Naga Regeneración de Aguas",
      logo: NagaLogo,
      image: NagaImage,
      webSite: "https://naga-regeneracion-aguas-frontend.vercel.app",
      technologies: [
        { name: "Vue.js", icon: VueJsIcon },
        { name: "Pinia", icon: PiniaIcon },
        { name: "Vuetify", icon: VuetifyIcon },
        { name: "SQLite", icon: SqliteIcon },
      ],
    },
    {
      message:
        "¡Seguro han transformado nuestra experiencia! Costos reducidos, aplicación intuitiva y gran aceptación entre nuestros usuarios finales. Impresionante.",
      name: "Comunidad Dezzpo",
      alt: "Logo Comunidad Dezzpo",
      logo: ComunidadDezzpoLogo,
      image: ComunidadDezzpoImage,
      webSite: "https://dezzpo.com/",
      technologies: [
        { name: "Vike", icon: VikeJsIcon },
        { name: "Vite", icon: ViteIcon },
        { name: "Firebase", icon: FirebaseIcon },
        { name: "Redux", icon: ReduxIcon },
        { name: "Material UI", icon: MuiMaterialIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "Sendbird", icon: SendbirdIcon },
      ],
    },
    {
      message:
        "Con la plena confianza, establecimos una asociación estratégica para garantizar nuestra traza segura de datos en la blockchain.",
      name: "PrimalTrace",
      alt: "Logo PrimalTrace",
      logo: PrimalTrace,
      image: PrimalTraceImage,
      webSite: "https://primaltrace-nuxt-ssr.vercel.app/",
      technologies: [
        { name: "Vuex", icon: VuexIcon },
        { name: "Pinia", icon: PiniaIcon },
        { name: "Supabase", icon: SupabaseIcon },
        { name: "Ethers.js", icon: ethersIcon },
        { name: "Solidity", icon: SolidityIcon },
        { name: "Web3Auth", icon: web3AuthIcon },
        { name: "The Graph", icon: TheGraphIcon },
      ],
    },
    {
      message:
        "Me encantó desarrollar mi sitio web. Resolvieron todas mis dudas, definiendo cada etapa con total transparencia. Sin duda los recomiendo.",
      name: "Constructora Colombia",
      alt: "Logo Constructora Colombia",
      logo: ConstructoraColombia,
      image: ConstructoraColombiaImage,
      webSite: "https://constructora-colombia.vercel.app/",
      technologies: [
        { name: "Astro", icon: AstroIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "Vite", icon: ViteIcon },
      ],
    },
  ];

  return (
    <section
      id="testimonials-section"
      class={["flex flex-col container-purple px-0 pt-16 pb-12 w-full m-0 relative", styles.testimonials]}
    >
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight leading-tight mb-10 px-4">
        <span>Nuestros </span>
        <span class="heroGradient">Clientes Satisfechos</span>
      </h2>
      {/* Outer scroll container with overflow masking */}
      <div class={[styles.scrollContainer, "overflow-hidden w-full"]}>
        {/* Scroll track with animation - cards are duplicated for seamless loop */}
        <div class={[styles.scrollTrack, "flex flex-row gap-6 w-max"]}>
          {/* Render both sets using a helper function for DRY code */}
          {[false, true].map((isDuplicate) =>
            testimonials.map((testimony, index) => {
              const { message, name, alt, logo, image, webSite, technologies } = testimony;
              const keyPrefix = isDuplicate ? "second" : "first";

              return (
                <div
                  key={`${keyPrefix}-${index}`}
                  class={[
                    styles.testimonialCard,
                    "shrink-0 w-[300px] bg-white rounded-2xl shadow-md transition-all duration-300 flex flex-col",
                  ]}
                  aria-hidden={isDuplicate ? "true" : undefined}
                >
                  <div class="h-[184px] w-full overflow-hidden rounded-t-2xl bg-gray-100 shrink-0">
                    <img
                      src={image}
                      alt={name}
                      height={184}
                      width={300}
                      class="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div>
                      {/* Logo y título de la empresa en una misma fila */}
                      <div class="mb-3">
                        <a
                          href={webSite}
                          class="flex flex-row items-center gap-3 group/client focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg no-underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visitar sitio web de ${name}`}
                          tabIndex={isDuplicate ? -1 : undefined}
                        >
                          <div class="w-12 h-12 shrink-0 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-1.5 shadow-sm group-hover/client:border-blue-200 group-hover/client:shadow transition-all duration-200">
                            <img
                              src={logo}
                              alt={alt}
                              height={48}
                              width={48}
                              class="max-w-full max-h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <span class={["heroGradient", styles.testimonialTitle]}>
                            {name}
                          </span>
                        </a>
                      </div>
                      <p class="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                        {message}
                      </p>
                    </div>

                    {/* Tecnologías usadas con tooltip y color gris con hover a color real */}
                    <div class="mt-5 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-center gap-2">
                      {technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          class={styles.techItem}
                          tabIndex={isDuplicate ? -1 : 0}
                          aria-label={`Tecnología: ${tech.name}`}
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            title={tech.name}
                            height={28}
                            width={28}
                            class={[styles.techIcon, "w-7 h-7 object-contain cursor-pointer"]}
                            loading="lazy"
                          />
                          <span role="tooltip" class={styles.techTooltip}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
});
