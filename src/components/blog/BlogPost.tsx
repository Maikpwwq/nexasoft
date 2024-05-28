import { component$ } from "@builder.io/qwik";
import styles from "./blogPost.module.css";
import { webPosts } from "~/const/blog-posts";
import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <>
      <blogposts id="blog-post-section" class={[styles.blogposts]}>
        <div class="container">
          <MUITypography variant="h2" align="left" className={styles.title}>
            <span class="font-bold highlight">Últimos Blogs</span>
          </MUITypography>
          <MUITypography variant="h5" align="left">
            Explorar los más destacados
          </MUITypography>
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
                        <MUITypography
                          variant="h5"
                          align="left"
                          className="pt-6 mb-2 text-black font-semibold"
                        >
                          {" "}
                          {title}
                        </MUITypography>
                        <MUITypography
                          variant="body1"
                          align="left"
                          className="mb-2"
                        >
                          {description}
                        </MUITypography>
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
                        <MUITypography
                          variant="h5"
                          align="left"
                          className="mb-2 text-black font-semibold"
                        >
                          {" "}
                          {title}
                        </MUITypography>
                        <MUITypography
                          variant="body1"
                          align="left"
                          className="mb-2"
                        >
                          {description}
                        </MUITypography>
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
