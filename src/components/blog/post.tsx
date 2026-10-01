import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { webPosts, voidPost } from "~/const/blog-posts";
import type { Posts } from "~/const/blog-posts";

export interface PostProps {
  detail: string;
}

export default component$((props: PostProps) => {
  const isLightboxOpen = useSignal(false);
  const postData: Posts =
    webPosts.find((entry) => entry.id === props.detail) || voidPost;
  const {
    title,
    subtitle,
    category,
    date,
    readTime,
    author,
    sections,
    alt,
    image,
  } = postData;

  return (
    <>
      <article
        id="blog-post-article"
        class="w-full pt-8 pb-8 md:pt-12 md:pb-12 bg-white text-gray-900"
      >
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb editorial */}
        <nav
          aria-label="Breadcrumb"
          class="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 flex-wrap"
        >
          <Link href="/" class="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/blog/" class="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span class="text-blue-600 font-medium">{category}</span>
        </nav>

        {/* Encabezado editorial */}
        <div class="text-center mb-8">
          <span class="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200/80 mb-4">
            {category}
          </span>
          <h1
            class="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-[1.18] mb-4"
            style={{ color: "#111827" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              class="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
              style={{ color: "#4b5563" }}
            >
              {subtitle}
            </p>
          )}

          {/* Barra de metadatos editoriales */}
          <div class="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 border-y border-gray-200 py-3.5 max-w-2xl mx-auto flex-wrap">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shadow-sm">
                NS
              </span>
              <span class="font-medium text-gray-800">{author.name}</span>
            </div>
            <span class="text-gray-300">|</span>
            <span>{date}</span>
            <span class="text-gray-300">|</span>
            <span class="flex items-center gap-1.5 font-medium text-gray-700">
              <svg
                class="w-4 h-4 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {readTime}
            </span>
          </div>
        </div>

        {/* Imagen de Cabecera (con apertura en modal/lightbox al hacer clic) */}
        {image && (
          <figure class="w-full mb-12">
            <div
              class="group relative w-full max-h-[380px] sm:max-h-[420px] overflow-hidden rounded-2xl shadow-lg border border-gray-200/80 bg-gray-50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick$={() => {
                isLightboxOpen.value = true;
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ampliar imagen: ${alt || title}`}
              onKeyDown$={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  isLightboxOpen.value = true;
                }
              }}
            >
              <img
                src={image}
                alt={alt}
                class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                height={420}
                width={800}
              />
              {/* Badge indicativo de ampliación */}
              <div class="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/85 text-white text-xs font-medium backdrop-blur-sm shadow-md transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 pointer-events-none">
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                <span>Ver en pantalla completa</span>
              </div>
            </div>
            {alt && (
              <figcaption class="text-xs text-center text-gray-500 mt-2.5 italic">
                {alt}
              </figcaption>
            )}
          </figure>
        )}

        {/* Slot publicitario superior */}
        <div class="w-full my-8 p-4 rounded-xl border border-dashed border-gray-300 bg-gray-50/70 flex flex-col items-center justify-center text-center">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
            Espacio Publicitario
          </span>
          <div
            id="adsense-top-slot"
            class="w-full min-h-[70px] flex items-center justify-center text-gray-500 text-xs italic"
          >
            [Espacio para Google AdSense — Descomentar para producción]
          </div>
        </div>

        {/* Cuerpo del Artículo en formato editorial */}
        <div class="prose max-w-none text-gray-800">
          {sections.map((section, sIndex) => (
            <section key={sIndex} class="mb-10">
              {section.title && (
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4 tracking-tight leading-snug">
                  {section.title}
                </h2>
              )}

              {section.lead && (
                <p class="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal mb-5 border-l-4 border-blue-600 pl-4 bg-blue-50/40 py-2.5 rounded-r-lg">
                  {section.lead}
                </p>
              )}

              {section.paragraphs.map((p, pIndex) => (
                <p
                  key={pIndex}
                  class="text-base sm:text-lg text-gray-800 leading-relaxed mb-4 font-normal"
                >
                  {p}
                </p>
              ))}

              {section.callout && (
                <blockquote class="my-7 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/40 to-white border border-blue-200/80 shadow-sm relative">
                  <p class="text-lg sm:text-xl font-medium text-gray-900 italic leading-relaxed mb-2">
                    «{section.callout.text}»
                  </p>
                  {section.callout.authorOrSource && (
                    <cite class="block text-sm font-semibold text-blue-700 not-italic">
                      — {section.callout.authorOrSource}
                    </cite>
                  )}
                </blockquote>
              )}

              {section.bulletPoints && (
                <ul class="my-6 space-y-3.5 pl-1">
                  {section.bulletPoints.map((point, bIndex) => (
                    <li
                      key={bIndex}
                      class="flex items-start text-base sm:text-lg text-gray-800 leading-relaxed"
                    >
                      <span
                        class="w-2 h-2 rounded-full bg-blue-600 mt-2.5 mr-3.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.comparisonTable && (
                <div class="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table class="w-full text-left border-collapse text-sm sm:text-base">
                    <thead>
                      <tr class="bg-gray-100 border-b border-gray-200">
                        {section.comparisonTable.headers.map((h, hIndex) => (
                          <th
                            key={hIndex}
                            class="p-3.5 font-bold text-gray-900"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                      {section.comparisonTable.rows.map((row, rIndex) => (
                        <tr
                          key={rIndex}
                          class="hover:bg-blue-50/40 transition-colors"
                        >
                          {row.map((cell, cIndex) => (
                            <td
                              key={cIndex}
                              class={[
                                "p-3.5",
                                cIndex === 0
                                  ? "font-semibold text-gray-900 bg-gray-50/60"
                                  : "text-gray-700",
                              ]}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Ficha de autoría editorial */}
        <div class="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0">
            NS
          </div>
          <div>
            <h4 class="font-bold text-gray-900 text-base">{author.name}</h4>
            <p class="text-xs text-blue-700 font-semibold uppercase tracking-wider mb-2">
              {author.role}
            </p>
            <p class="text-sm text-gray-600 leading-relaxed">
              Equipo de ingeniería y consultoría técnica de NexaSoft SAS.
              Diseñamos arquitecturas digitales, plataformas escalables y
              soluciones de software con soporte formal en Colombia y
              Latinoamérica.
            </p>
          </div>
        </div>

        {/* Slot publicitario inferior */}
        <div class="w-full my-8 p-4 rounded-xl border border-dashed border-gray-300 bg-gray-50/70 flex flex-col items-center justify-center text-center">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
            Espacio Publicitario
          </span>
          <div
            id="adsense-bottom-slot"
            class="w-full min-h-[70px] flex items-center justify-center text-gray-500 text-xs italic"
          >
            [Espacio para Google AdSense — Descomentar para producción]
          </div>
        </div>

        {/* Botón de retorno al Blog */}
        <div class="text-center mt-12 mb-4">
          <Link
            id="blog-back-btn"
            href="/blog/"
            class="inline-flex items-center gap-2 text-base px-7 py-3 font-semibold rounded-full border-2 border-gray-900 hover:scale-105 transition-all duration-300"
          >
            ← Explorar todas las publicaciones
          </Link>
        </div>
      </div>
    </article>

    {/* Banner de Captación y Conversión de NexaSoft (Ancho Completo — Separador entre Blog y Apoyos) */}
    <section
      id="blog-cta-banner"
      class="w-full py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-2xl border-y border-indigo-700/40 text-center relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <span class="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs uppercase tracking-widest border border-indigo-500/30 mb-4">
          Consultoría Estratégica NexaSoft
        </span>
        <h3 class="text-2xl sm:text-[1.75rem] md:text-3xl lg:text-[2.1rem] xl:text-[2.35rem] font-extrabold mb-4 text-white tracking-tight leading-tight">
          ¿Listo para estructurar o escalar tu solución&nbsp;web?
        </h3>
        <p class="text-indigo-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Desde páginas informativas de ultra-velocidad hasta aplicativos web
          con roles de usuario, integraciones de pago y automatización
          operativa con contrato y soporte formal.
        </p>
        <a
          id="cta-cotizar-btn"
          href="/customer-form/"
          class="inline-block px-8 py-3.5 font-bold text-base sm:text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Cotizar Proyecto con NexaSoft SAS
        </a>
      </div>
    </section>

    {/* Estilos hover para botones — evita JS handlers que crashean en Qwik SSG */}
    <style dangerouslySetInnerHTML={`
      #cta-cotizar-btn {
        background-color: #ff007f !important;
        color: #ffffff !important;
      }
      #cta-cotizar-btn:hover {
        background-color: #e0006f !important;
      }
      #blog-back-btn {
        color: #111827 !important;
        background-color: transparent !important;
      }
      #blog-back-btn:hover {
        background-color: #111827 !important;
        color: #ffffff !important;
      }
    `} />

      {/* Modal de Imagen en Pantalla Completa (Lightbox) */}
      {isLightboxOpen.value && image && (
        <div
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Vista completa de la imagen"
          window:onKeyDown$={(e) => {
            if (e.key === "Escape") {
              isLightboxOpen.value = false;
            }
          }}
        >
          {/* Fondo oscuro translúcido con desenfoque — clic para cerrar */}
          <div
            class="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer transition-opacity duration-300"
            onClick$={() => {
              isLightboxOpen.value = false;
            }}
            aria-label="Cerrar modal haciendo clic en el fondo"
          />

          {/* Botón flotante para cerrar (X) */}
          <button
            type="button"
            onClick$={() => {
              isLightboxOpen.value = false;
            }}
            class="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 border border-white/20 hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Cerrar vista completa"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Contenedor central con la imagen a tamaño completo y pie de foto */}
          <div class="relative z-10 max-w-5xl max-h-[92vh] flex flex-col items-center justify-center select-none pointer-events-auto">
            <img
              src={image}
              alt={alt}
              width={1200}
              height={800}
              class="max-h-[82vh] max-w-[94vw] md:max-w-5xl w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/15"
            />
            {alt && (
              <p class="text-xs sm:text-sm text-gray-300 text-center mt-3 max-w-2xl px-4 italic leading-relaxed">
                {alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
});
