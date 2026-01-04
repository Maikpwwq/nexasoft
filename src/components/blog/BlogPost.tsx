import { component$ } from "@builder.io/qwik";
import styles from "./blogPost.module.css";
import { webPosts } from "~/const/blog-posts";

export default component$(() => {
  return (
    <>
      <blogposts id="blog-post-section" class={[styles.blogposts, "relative"]}>
        <div class="container relative z-10" style="margin-bottom: 5rem;">
          <h2 class={[styles.title, "pb-6"]} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
            <span class="font-bold highlightBlog">Últimas Publicaciones</span>
          </h2>
          <h3 style="text-align: left; font-size: 1.5rem; color: var(--qwik-dirty-black);" class="text-xl ps-6">
            Explorar los más destacados
          </h3>
          <div class={["m-0 w-full", styles.blogpostsList]}>
            <div class="sm:w-full md:w-1/2">
              <ul class="mt-6 mb-6 p-0">
                {webPosts.slice(0, 1).map((post, index) => {
                  const { title, description, alt, image, route } = post;
                  return (
                    <li class={[styles.listItem, "my-2"]} key={index}>
                      <a href={route} >
                        <img
                          src={image}
                          alt={alt}
                          class="w-full h-auto"
                          height={100}
                          width={100}
                        />
                        <h4 class="pt-6 mb-2 text-black font-semibold text-xl">
                          {title}
                        </h4>
                        <p class="mb-2 text-lg">
                          {description}
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="ps-12 sm:w-3/4 md:w-1/2">
              <ul class="mt-6 mb-6 p-0">
                {webPosts.map((post, index) => {
                  const { title, description, route } = post;
                  return (
                    <li class={[styles.listItem, "my-2"]} key={index}>
                      <a href={route}>
                        <h4 class="mb-2 text-black font-semibold text-xl">
                          {title}
                        </h4>
                        <p class="mb-2 text-lg">
                          {description}
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div class="border-t border-gray-300 my-4"></div>
              <a
                href="/blog/"
                class="text-2xl w-fit text-white button font-bold flex items-center"
                style={{
                  color: "var(--qwik-dark-text)",
                  background: "var(--qwik-fusha)",
                }}
              >
                Leer más publicaciones
              </a>
            </div>
          </div>
        </div>
        {/* <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-[var(--qwik-dark-text)] to-[var(--qwik-dark-background)] pointer-events-none z-20"></div> */}
      </blogposts>
    </>
  );
});
