"use client";
import { component$, useSignal } from "@builder.io/qwik";
import styles from "./blogPost.module.css";
import { webPosts, voidPost } from "~/const/blog-posts";
import type { Posts } from "~/const/blog-posts";

export interface PostProps {
  detail: string;
}

export default component$((props: PostProps) => {
  const postId = useSignal(props.detail);
  const postData: Posts =
    webPosts.find((entry) => entry.id === postId.value) || voidPost;
  const { title, description, cycle, alt, image } = postData;

  return (
    <>
      <blogpost id="blog-post-section" class={[styles.blogposts]}>
        <div class="container max-w-6xl mx-auto">
          <h1 class={[styles.title, "font-bold highlight text-3xl md:text-5xl text-center mb-8"]}>
            {title}
          </h1>
          <p class="text-lg md:text-xl font-normal text-center mb-12 mt-4 leading-relaxed px-4 max-w-4xl mx-auto" style={{ color: "#1a202c" }}>
            {description}
          </p>
          <div class="mb-10">
            <img
              src={image}
              alt={alt}
              class="w-full h-auto rounded-2xl shadow-lg"
              height={210}
              width={210}
            />
          </div>

          {/* AdSense Slot - Top of Content */}
          <div class="w-full max-w-4xl mx-auto my-6 p-4 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-center">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Publicidad</span>
            {/* Google AdSense tag placeholder */}
            <div id="adsense-top-slot" class="w-full min-h-[90px] flex items-center justify-center text-gray-500 text-sm">
              [Espacio para Google AdSense — Descomentar para producción]
              {/*
              <ins class="adsbygoogle"
                   style={{ display: "block", textAlign: "center" }}
                   data-ad-layout="in-article"
                   data-ad-format="fluid"
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="XXXXXXXXXX"></ins>
              */}
            </div>
          </div>

          <div class={["m-0 w-full", styles.blogpostsList]}>
            <ul class="mt-8 mb-12 p-0 space-y-8">
              {
                cycle.map((element: any, index: any) => {
                  const { stage, body } = element;
                  return (
                    <li
                      class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
                      key={index}
                    >
                      <h4 class="mb-4 text-gray-900 font-bold text-2xl">
                        {stage}
                      </h4>
                      <p class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                        {body}
                      </p>
                    </li>
                  );
                })
              }
            </ul>
          </div>

          {/* AdSense Slot - Bottom of Content */}
          <div class="w-full max-w-4xl mx-auto my-6 p-4 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-center">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Publicidad</span>
            <div id="adsense-bottom-slot" class="w-full min-h-[90px] flex items-center justify-center text-gray-500 text-sm">
              [Espacio para Google AdSense — Descomentar para producción]
              {/*
              <ins class="adsbygoogle"
                   style={{ display: "block" }}
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="YYYYYYYYYY"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
              */}
            </div>
          </div>

          {/* Captación Directa: Banner propio de conversión */}
          <div class="my-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-2xl border border-indigo-700/40 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div class="relative z-10">
              <span class="px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs uppercase tracking-widest border border-indigo-500/30">
                Consultoría Estratégica
              </span>
              <h3 class="text-3xl font-extrabold mt-4 mb-4 text-white">
                ¿Necesitas ayuda con esta integración o proyecto?
              </h3>
              <p class="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Como Especialistas en Gestión de Proyectos de Ingeniería y Desarrollo de Software, estructuramos tu solución con cronogramas claros, mitigación de riesgos y acuerdos de soporte garantizados.
              </p>
              <a
                href="/customer-form/"
                class="inline-block px-8 py-4 bg-white text-indigo-950 font-bold text-lg rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-md"
              >
                Cotizar Proyecto con NexaSoft SAS
              </a>
            </div>
          </div>

          <div class="text-center mt-16">
            <a
              href="/blog/"
              class="inline-block text-lg px-8 py-4 font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                background: "var(--qwik-fusha)",
                color: "white",
              }}
            >
              ← Leer más publicaciones
            </a>
          </div>
        </div>
      </blogpost>
    </>
  );
});
