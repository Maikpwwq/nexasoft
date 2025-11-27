import { component$ } from "@builder.io/qwik";
import { MUITypography } from "~/integrations/react/mui";
import WebProducts from "./WebProducts.json";
import styles from "./portfolioProducts.module.css";
// import * as fs from "fs";
// import path from "path";
// import { fileURLToPath } from "node:url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

interface Product {
  title: string;
  price: string;
  description: string;
  benefit: string[];
  scope: string;
}

interface SoftwareProducts extends Array<Product> {}

// const WebProducts = fs.readFileSync(
//   path.resolve(__dirname, "./WebProducts.json"),
//   "utf-8"
// );
// const jsonProducts = JSON.parse(WebProducts);
// const dataProducts = jsonProducts.WebProducts;
// const products: SoftwareProducts = dataProducts;
const products: SoftwareProducts = WebProducts.WebProducts;

export default component$(() => {
  // console.log("products", dataProducts);
  return (
    <div
      id="products-section"
      class="container flex flex-col justify-center items-center relative"
    >
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <MUITypography variant="h2" align="center" class={styles.title}>
        ¡Simplificamos los <span class="blueHighlight font-bold">precios</span>{" "}
        para potenciar la efectividad de tu{" "}
        <span class="blueHighlight font-bold">trabajo</span>!
      </MUITypography>
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
                    <h5
                      class={[
                        "card-title font-bold py-3 text-xl",
                        styles.cardTitle,
                      ]}
                    >
                      {title}
                    </h5>
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
                      href="/customer-form/" // #contact-section
                      class={["btn text-lg text-center py-2", styles.cardBtn]}
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
