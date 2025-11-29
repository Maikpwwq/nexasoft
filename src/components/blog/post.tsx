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
        <div class="container max-w-4xl mx-auto">
          <h1 class={[styles.title, "font-bold highlight text-5xl text-center mb-6"]}>
            {title}
          </h1>
          <h2 class="text-2xl text-gray-700 font-light text-center mb-12 leading-relaxed px-4">
            {description}
          </h2>
          <div class={["m-0 w-full", styles.blogpostsList]}>
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 mb-12 shadow-lg">
              <img
                src={image}
                alt={alt}
                class="w-full max-w-2xl h-auto mx-auto rounded-2xl shadow-md"
                height={210}
                width={210}
              />
            </div>
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
                      <p class="text-gray-700 text-lg leading-relaxed">
                        {body}
                      </p>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div class="text-center mt-16">
            <a
              href="/blog/"
              class="inline-block text-xl px-8 py-4 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, var(--qwik-fusha) 0%, var(--qwik-light-purple) 100%)",
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
