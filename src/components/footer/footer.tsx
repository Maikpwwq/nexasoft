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
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
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
            <p class="text-center mb-2 flex items-center justify-center text-xl">
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
                <p class="flex flex-row justify-center items-end text-xl">
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
              <p class="flex flex-row justify-center items-end text-center text-xl">
                <svg
                  class="me-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.15-2.9-7.02zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.19-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.39 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.27-.16-.51-.28z" />
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
        <img src={CHCoraSoft} height={50} width={210} class="pb-4" alt="Logo Chicó corazón de software" />
      </div>
    </footer>
  );
});
