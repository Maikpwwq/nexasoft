import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";
import NexaSoftLogo from "~/assets/img/Logos Nexasoft/White (small).png";
import CHCoraSoft from "~/assets/img/logos/Logo_Fondo_Negro.png";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="text-white">
      <div class="flex flex-row items-baseline justify-center mb-8">
        <svg
          class="mb-3 me-2"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
        <h3
          class="text-xl font-bold"
          style={{ fontSize: "1.25rem", fontWeight: "bold" }}
        >
          Datos de contacto
        </h3>
      </div>
      <div class="flex flex-wrap justify-center w-full pb-0 md:pb-[33px]">
        <div class="p-4 w-full bg-white text-black rounded shadow-lg max-w-md m-2">
          <div class="flex flex-col items-center">
            <img
              src={NexaSoftLogo}
              height={50}
              width={210}
              class="pb-4 bg-black p-2 rounded mb-4"
            />
            <p class="text-center mb-2 flex items-center justify-center">
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
                <p class="flex flex-row justify-center items-end">
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
              href="https://api.whatsapp.com/send?phone=573195137182"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black no-underline hover:underline mb-4"
            >
              <p class="flex flex-row justify-center items-end text-center">
                <svg
                  class="me-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.23.01-.58-.04-1.05-.21-.45-.17-1.22-.51-2.07-1.18-.94-.74-2.4-2.12-3.17-3.45-.48-.81-.5-1.63-.05-2.28.2-.29.47-.42.67-.44.2-.02.5-.04.77-.04.17 0 .32.05.46.13.13.09.44.54.68 1.05.24.52.28.85.17 1.05-.1.19-.27.31-.5.52-.23.22-.48.37-.63.53-.15.17-.32.37-.14.73.18.36.78 1.3 1.7 2.12.91.81 1.89 1.28 2.3 1.46.37.16.6.14.82-.1.22-.24.96-1.11 1.2-1.48.25-.37.5-.32.85-.18zM12 2C6.48 2 2 6.48 2 12c0 1.84.48 3.58 1.32 5.12l-1.32 4.88 4.88-1.32C8.42 21.52 10.16 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
                3195137182
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
            <p class="text-sm text-center flex items-center justify-center">
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
        <img src={CHCoraSoft} height={50} width={210} class="pb-4" />
      </div>
    </footer>
  );
});
