"use client";
import { component$ } from "@builder.io/qwik";
import { useLocation, type StaticGenerateHandler, type DocumentHead } from "@builder.io/qwik-city";
import Post from "~/components/blog/post";
import { webPosts } from "~/const/blog-posts";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: webPosts.map((post) => {
      return { postId: post.id };
    }),
  };
};

export const head: DocumentHead = ({ params }) => {
  const post = webPosts.find((p) => p.id === params.postId);
  return {
    title: post ? `${post.title} | NexaSoft SAS` : "Blog | NexaSoft SAS",
    meta: [
      {
        name: "description",
        content: post ? post.description : "Artículos técnicos, desarrollo de software y consultoría tecnológica por NexaSoft SAS.",
      },
      {
        property: "og:title",
        content: post ? post.title : "Blog | NexaSoft SAS",
      },
      {
        property: "og:description",
        content: post ? post.description : "Artículos técnicos, desarrollo de software y consultoría tecnológica.",
      },
      {
        property: "og:type",
        content: "article",
      },
    ],
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
