"use client";
import { component$, useSignal } from "@builder.io/qwik";
import styles from "./blogPost.module.css";
import { webPosts, voidPost } from "~/const/blog-posts";
import { MUITypography } from "~/integrations/react/mui";
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
        <div class="container">
          <MUITypography variant="h2" align="left" class={styles.title}>
            <span class="font-bold highlight">{title}</span>
          </MUITypography>
          <MUITypography variant="h5" align="left">
            {description}
          </MUITypography>
          <div class={["m-0 w-full", styles.blogpostsList]}>
            <ul class="mt-6 mb-6 p-0">
              <img
                src={image}
                alt={alt}
                class="w-3/4 h-auto mx-auto"
                height={210}
                width={210}
              />
              {
                 
                cycle.map((element: any, index: any) => {
                  const { stage, body } = element;
                  return (
                    <li
                      class={[styles.listItem, "my-2 items-start"]}
                      key={index}
                    >
                      <MUITypography
                        variant="h5"
                        align="left"
                        class="pt-6 mb-2 text-black font-semibold"
                      >
                        {stage}
                      </MUITypography>
                      <MUITypography
                        variant="body1"
                        align="left"
                        class="mb-2"
                      >
                        {body}
                      </MUITypography>
                    </li>
                  );
                })
              }
            </ul>
          </div>
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
      </blogpost>
    </>
  );
});
