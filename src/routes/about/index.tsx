import { component$ } from "@builder.io/qwik";
import Features from "~/components/features/features";
import ImagesList from "~/components/images-list/imagesList";

export default component$(() => {
    return (
        <div>
            <Features />
            <ImagesList />
        </div>
    );
});
