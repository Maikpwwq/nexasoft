import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { webPosts } from "~/const/blog-posts";

export default component$(() => {
  const featuredPost = webPosts[1] ?? webPosts[0]; // STATIC-VS-WEBAPP como artículo destacado
  const gridPosts = webPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <section id="blog-catalog-section" class="w-full pt-2 pb-12 md:pt-4 md:pb-16 bg-white text-gray-900">
      <div class="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección tipo revista digital */}
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200/80 mb-3">
            Blog & Conocimiento Técnico
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Perspectivas de Ingeniería & Software
          </h1>
          <p class="text-lg text-gray-600 font-light leading-relaxed">
            Estrategias de arquitectura web, inteligencia artificial aplicada y
            metodologías de ingeniería para dueños de negocio y líderes
            tecnológicos en Colombia.
          </p>
        </div>

        {/* Artículo Principal Destacado (Featured Hero) */}
        {featuredPost && (
          <div class="mb-14 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-7">
                <Link
                  href={featuredPost.route}
                  class="block overflow-hidden rounded-2xl shadow-md border border-gray-200/70 group"
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    class="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    height={320}
                    width={580}
                  />
                </Link>
              </div>

              <div class="lg:col-span-5 flex flex-col items-start">
                <div class="flex items-center gap-3 mb-3 flex-wrap">
                  <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff007f]/10 text-[#ff007f] border border-[#ff007f]/20">
                    {featuredPost.category}
                  </span>
                  <span class="text-xs text-gray-400 font-medium">
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link href={featuredPost.route} class="group">
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-3">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p class="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-6">
                  {featuredPost.description}
                </p>

                <div class="flex items-center justify-between w-full pt-4 border-t border-gray-200">
                  <div class="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                      NS
                    </span>
                    <span>{featuredPost.author.name}</span>
                  </div>

                  <Link
                    href={featuredPost.route}
                    class="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    <span>Leer artículo</span>
                    <span class="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Separador de sección */}
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-900 tracking-tight">
            Artículos Recientes
          </h2>
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {gridPosts.length} Publicaciones
          </span>
        </div>

        {/* Cuadrícula de Artículos (Cada uno con su propia imagen representativa) */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <article
              key={post.id}
              class="flex flex-col justify-between bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div>
                {/* Imagen propia del post */}
                <Link
                  href={post.route}
                  class="block h-48 overflow-hidden bg-gray-100 relative"
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    height={192}
                    width={384}
                  />
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-gray-800 shadow-sm backdrop-blur-sm">
                    {post.category}
                  </span>
                </Link>

                {/* Contenido de la tarjeta */}
                <div class="p-6">
                  <div class="flex items-center gap-2 text-xs text-gray-400 font-medium mb-2.5">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={post.route} class="block group-hover:text-blue-600 transition-colors">
                    <h3 class="font-bold text-lg sm:text-xl text-gray-900 leading-snug mb-3">
                      {post.title}
                    </h3>
                  </Link>

                  <p class="text-sm text-gray-600 font-light leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Pie de tarjeta con enlace directo */}
              <div class="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span class="text-xs text-gray-500 font-medium truncate max-w-[180px]">
                  {post.author.name}
                </span>

                <Link
                  href={post.route}
                  class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Leer</span>
                  <span class="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
