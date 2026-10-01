# Arquitectura y Diseño del Módulo Blog — NexaSoft SAS

> Documentación técnica del módulo de Blog, generación estática (SSG), componentes editoriales, sistema de modales y pautas de conversión comercial.

---

## 1. Visión General

El blog de NexaSoft SAS está diseñado con una estética editorial de **revista digital moderna** (fondo claro, tipografía jerárquica con alto contraste, layout amplio y limpio). Su objetivo principal es posicionar artículos técnicos de ingeniería de software y captar clientes potenciales hacia el embudo comercial (`/customer-form/`).

---

## 2. Estructura de Archivos

```
src/
├── const/
│   └── blog-posts.tsx                 # Catálogo centralizado de artículos (fuente de datos)
├── components/
│   └── blog/
│       ├── BlogPost.tsx               # Vista de catálogo y grid de publicaciones (/blog/)
│       └── post.tsx                   # Vista detallada de artículo editorial (/blog/[postId]/)
└── routes/
    └── blog/
        ├── index.tsx                  # Ruta raíz del catálogo (/blog/)
        └── [postId]/
            └── index.tsx              # Ruta dinámica de detalle (/blog/[postId]/)
```

---

## 3. Generación Estática (SSG)

La ruta `src/routes/blog/[postId]/index.tsx` implementa `onStaticGenerate` de Qwik City:

```tsx
export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: webPosts.map((post) => ({ postId: post.id })),
  };
};
```

- Pre-renderiza todas las páginas de artículos en tiempo de compilación.
- Produce 23 páginas HTML estáticas ultrarrápidas distribuidas a Netlify Edge.
- Cada artículo define dinámicamente sus metaetiquetas Open Graph y de búsqueda vía `export const head: DocumentHead`.

---

## 4. Componentes y Funcionalidades Clave

### A. Vista Detallada de Artículo (`post.tsx`)

1. **Breadcrumb Editorial**: Navegación jerárquica contextual (`Inicio / Blog / [Categoría]`).
2. **Encabezado y Metadatos**: Categoría en badge, título H1 de alto impacto, subtítulo y barra con autor, fecha y tiempo estimado de lectura.
3. **Visor de Imágenes en Pantalla Completa (Lightbox)**:
   - Controlado mediante estado reactivo `useSignal(false)`.
   - Clic en la imagen o interacción con teclado (`Enter` / `Espacio`) abre el visor modal.
   - Fondo oscuro translúcido con desenfoque (`bg-black/90 backdrop-blur-md`).
   - Cierre mediante: botón flotante `✕`, clic fuera de la imagen (backdrop), o tecla `Escape` (`window:onKeyDown$`).
   - Atributos explícitos `width` y `height` para prevenir Cumulative Layout Shift (CLS).
4. **Espacios Publicitarios (AdSense Slots)**:
   - Slot superior (`#adsense-top-slot`) y slot inferior (`#adsense-bottom-slot`).
5. **Navegación de Retorno**:
   - Botón *"← Explorar todas las publicaciones"* integrado al cierre del contenido editorial del artículo.
6. **Banner de Captación y Conversión NexaSoft (`#blog-cta-banner`)**:
   - Ubicado a ancho completo (`w-full`) como separador visual de alto contraste entre la sección blanca del artículo y la sección blanca de aliados (`SupportLogos`).
   - Fondo con degradado profundo (`from-blue-900 via-indigo-950 to-slate-900`) y bordes superior/inferior (`border-y border-indigo-700/40`).
   - Contenedor de texto ampliado (`max-w-6xl`) y tipografía balanceada para prevenir palabras huérfanas en saltos de línea en escritorio.
   - Botón CTA principal `#cta-cotizar-btn` en fucsia institucional (`#ff007f`) con microinteracción hover (`scale-105`).

---

## 5. Lecciones y Directrices de Estilo

1. **Regla de oro de eventos en Qwik**: Nunca usar `onMouseOver$` o `onMouseOut$` para efectos hover; provocan error de desincronización y objeto nulo (`target is null`). Utilizar CSS puro `:hover` o `<style dangerouslySetInnerHTML>` con selectores por ID.
2. **Herencia de enlaces**: La regla global `a { color: inherit }` en `styles.css` se sobrescribe usando IDs específicos (`#cta-cotizar-btn`, `#blog-back-btn`) con `!important`.
3. **Breakout a ancho completo**: Las páginas de ruta no deben tener `.container` en el wrapper si contienen secciones que requieren extenderse de borde a borde (`w-full`).
