import { component$ } from "@builder.io/qwik";
import styles from "./blogPost.module.css";
import { webPosts } from "~/const/blog-posts";

export default component$(() => {
  return (
    <>
      <blogposts id="blog-post-section" class={[styles.blogposts]}>
        <div class="container">
          <h2 class={styles.title} style="text-align: left; font-size: 2.5rem; font-weight: bold;">
            <span class="font-bold highlight">Últimos Blogs</span>
          </h2>
          <h5 style="text-align: left; font-size: 1.5rem;">
            Explorar los más destacados
          </h5>
          <div class={["m-0 w-full", styles.blogpostsList]}>
            <div class="w-1/2">
              <ul class="mt-6 mb-6 p-0">
                {webPosts.slice(0, 1).map((post, index) => {
                  const { title, description, alt, image, route } = post;
                  return (
                    <a href={route} key={index}>
                      <li class={[styles.listItem, "my-2"]}>
                        <img
                          src={image}
                          alt={alt}
                          class="w-full h-auto"
                          height={100}
                          width={100}
                        />
                        <h5 class="pt-6 mb-2 text-black font-semibold text-xl">
                          {title}
                        </h5>
                        <p class="mb-2">
                          {description}
                        </p>
                      </li>
                    </a>
                  );
                })}
              </ul>
            </div>
            <div class="ps-12 w-3/4">
              <ul class="mt-6 mb-6 p-0">
                {webPosts.map((post, index) => {
                  const { title, description, route } = post;
                  return (
                    <a href={route} key={index}>
                      <li class={[styles.listItem, "my-2"]}>
                        <h5 class="mb-2 text-black font-semibold text-xl">
                          {title}
                        </h5>
                        <p class="mb-2">
                          {description}
                        </p>
                      </li>
                    </a>
                  );
                })}
                <>--------------------------------------</>
              </ul>
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
      </blogposts>
    </>
  );
});
