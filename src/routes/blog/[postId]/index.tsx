"use client";
import { component$ } from "@builder.io/qwik";
import { useLocation, type StaticGenerateHandler } from "@builder.io/qwik-city";
import Post from "~/components/blog/post";
import { webPosts } from "~/const/blog-posts";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: webPosts.map((post) => {
      return { postId: post.id };
    }),
  };
};

export default component$(() => {
  const { params } = useLocation();
  const detail = params.postId;
  return (
    <div
      class="container container-center flex justify-center"
      style={{ background: "white" }}
    >
      <div class="flex flex-col justify-center items-center relative">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <Post detail={detail} />
      </div>
    </div>
  );
});
