import { component$ } from "@builder.io/qwik";

interface ServiceHeaderProps {
  tag?: "h1" | "h2";
  titlePrefix?: string;
  highlightText: string;
  titleSuffix?: string;
  description: string;
  class?: string;
}

export const ServiceHeader = component$<ServiceHeaderProps>(
  ({
    tag = "h1",
    titlePrefix,
    highlightText,
    titleSuffix,
    description,
    class: customClass = "",
  }) => {
    return (
      <div class={["max-w-4xl mx-auto text-center mb-16 px-4", customClass]}>
        {tag === "h1" ? (
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-white">
            {titlePrefix && <span>{titlePrefix} </span>}
            <span class="heroGradient">{highlightText}</span>
            {titleSuffix && <span> {titleSuffix}</span>}
          </h1>
        ) : (
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            {titlePrefix && <span>{titlePrefix} </span>}
            <span class="heroGradient">{highlightText}</span>
            {titleSuffix && <span> {titleSuffix}</span>}
          </h2>
        )}
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed font-light mt-6 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    );
  }
);
