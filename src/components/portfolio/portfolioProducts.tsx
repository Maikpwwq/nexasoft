import { component$ } from "@builder.io/qwik";
import { MUITypography } from "~/integrations/react/mui";
import WebProducts from "./WebProducts.json";
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

const styles = () => ({
  price: {},
  card: {
    background: "#1d2432",
    borderRadius: "1.5rem",
    padding: "2rem",
    margin: "1rem",
    flex: "1",
    color: "inherit",
    textDecoration: "none",
    width: "21rem",
    border: "2px solid var(--qwik-light-blueberry)",
  },
  cardTitle: {},
  cardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
  cardBtn: {
    backgroundColor: "var(--qwik-light-blueberry)",
    borderRadius: "0.375rem",
  },
});

export default component$(() => {
  const classes = styles();
  // console.log("products", dataProducts);
  return (
    <div class="flex flex-col justify-center items-center">
      <MUITypography variant="h3" align="center" className="font-bold m-5">
        ¡Simplificamos los <span class="highlight">precios</span> para <br />
        potenciar la efectividad de tu <span class="highlight">trabajo</span>!
      </MUITypography>
      <p class="text-2xl px-4 mt-4 text-center">
        Tu satisfacción está 100% asegurada con nuestra garantía de devolución
        de dinero.
      </p>
      <div class="flex flex-col sm:flex-row flex-wrap my-10 justify-center">
        {products! &&
          products.map((product, index) => {
            const { title, price, description, benefit } = product;
            return (
              <div key={index} class="flex items-stretch basis-1/5">
                <div class="bg-light" style={classes.card}>
                  <div class="card-body" style={classes.cardBody}>
                    <h5
                      class="card-title font-bold py-3 text-xl"
                      style={classes.cardTitle}
                    >
                      {title}
                    </h5>
                    <p class="card-text my-3 font-light">{description}</p>
                    <p
                      class="card-subtitle mb-2 text-muted font-semibold text-2xl"
                      style={classes.price}
                    >
                      $ {price} <span class="font-light text-sm"> / Año </span>
                    </p>
                    <a
                      href="#contact-section"
                      class="btn text-base text-center py-2"
                      style={classes.cardBtn}
                    >
                      Escoger plan
                    </a>
                    <ul class="py-3">
                      {benefit! &&
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
