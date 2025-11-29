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
        <div class="container">
          <h1 class={[styles.title, "font-bold highlight text-4xl text-left mb-4"]}>
            {title}
          </h1>
          <h2 class="text-xl text-left mb-4">
            {description}
          </h2>
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
                      <h4 class="pt-6 mb-2 text-black font-semibold text-xl text-left">
                        {stage}
                      </h4>
                      <p class="mb-2 text-left">
                        {body}
                      </p>
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
