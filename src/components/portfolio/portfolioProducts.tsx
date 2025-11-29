import { component$ } from "@builder.io/qwik";
import WebProducts from "./WebProducts.json";
import styles from "./portfolioProducts.module.css";

interface Product {
  title: string;
  price: string;
  description: string;
  benefit: string[];
  scope: string;
}

interface SoftwareProducts extends Array<Product> { }

const products: SoftwareProducts = WebProducts.WebProducts;

export default component$(() => {
  return (
    <div
      id="products-section"
      class="container flex flex-col justify-center items-center relative"
    >
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
        ¡Simplificamos los <span class="blueHighlight font-bold">precios</span>{" "}
        para potenciar la efectividad de tu{" "}
        <span class="blueHighlight font-bold">trabajo</span>!
      </h2>
      <p class="text-xl px-4 mt-4 text-center">
        Tu satisfacción está 100% asegurada con nuestra garantía de devolución
        de dinero.
      </p>
      <div class="flex flex-col sm:flex-row flex-wrap my-10 justify-center">
        {products.length > 0 &&
          products.map((product, index) => {
            const { title, price, description, benefit, scope } = product;
            return (
              <div key={index} class="flex items-stretch basis-1/5">
                <div class={["bg-light", styles.card]}>
                  <div class={["card-body", styles.cardBody]}>
                    <h3
                      class={[
                        "card-title font-bold py-3 text-xl leading-tight",
                        styles.cardTitle,
                      ]}
                      style={{ fontSize: "1.25rem" }}
                    >
                      {title}
                    </h3>
                    <p class="card-text my-3 font-light">{description}</p>
                    <p
                      class={[
                        "card-subtitle mb-2 text-muted font-semibold text-2xl",
                        styles.price,
                      ]}
                    >
                      <span class="font-light text-sm">Desde</span> $ {price}
                    </p>
                    <a
                      href="/customer-form/"
                      class={["btn text-xl text-center py-2", styles.cardBtn]}
                    >
                      Escoger plan
                    </a>
                    <p class="card-text mt-3 font-light text-sm text-center">
                      {scope}
                    </p>
                    <ul class="py-3">
                      {benefit.length > 0 &&
                        benefit.map((beneficio, index) => {
                          return (
                            <li key={index} class="font-extralight">
                              {beneficio}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
});
