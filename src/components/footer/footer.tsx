import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";
import NexaSoftLogo from "~/assets/img/Logos Nexasoft/White (small).png";
import CHCoraSoft from "~/assets/img/logos/Logo_Fondo_Negro.png";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="text-white">
      <div class="flex flex-row items-baseline justify-center p-4">
        <svg
          class="mb-2 me-4"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
        <h2
          class="text-3xl font-bold pl-2"
          style={{ fontSize: "2.5rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}
        >
          Datos de contacto
        </h2>
      </div>
      <div class="flex flex-wrap justify-center w-full pb-0 md:pb-2">
        <div class="p-4 w-full bg-white text-black rounded shadow-lg max-w-md m-2">
          <div class="flex flex-col items-center">
            <img
              src={NexaSoftLogo}
              height={50}
              width={210}
              class="pb-4 p-2 rounded mb-4"
              alt="NexaSoft Logo"
            />
            <p class="text-center mb-2 flex items-center justify-center text-xl" style={{ fontFamily: "var(--font-body)" }}>
              <svg
                class="me-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Bogotá, Colombia.
            </p>
            <div class="flex flex-row justify-center items-center mb-2">
              <a
                href="mailto:nexasoftprofessionalsolutions@gmail.com"
                target="_blank"
                title="mail"
                class="text-black no-underline hover:underline"
              >
                <p class="flex flex-row justify-center items-end text-xl" style={{ fontFamily: "var(--font-body)" }}>
                  <svg
                    class="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  NexaSoft SAS
                </p>
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=573204842897"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black no-underline hover:underline mb-4"
            >
              <p class="flex flex-row justify-center items-end text-center text-xl" style={{ fontFamily: "var(--font-body)" }}>
                <svg
                  class="me-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                3204842897
              </p>
            </a>

            <div class="flex flex-row justify-center mb-4 gap-4">
              <a
                href="https://www.instagram.com/nexa_soft/"
                target="_blank"
                title="Instagram"
                class="text-black hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 3.8 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089606313657"
                target="_blank"
                title="Facebook"
                class="text-black hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
            </div>
            <p class="text-sm text-center flex items-center justify-center" style={{ fontFamily: "var(--font-body)" }}>
              <svg
                class="me-1"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
              </svg>
              Políticas de privacidad
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img
          src={CHCoraSoft}
          height={50}
          width={210}
          class="pb-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          alt="Logo Chicó corazón de software"
        />
      </div>
    </footer>
  );
});
