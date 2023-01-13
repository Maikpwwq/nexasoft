import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div>
        Pie de página: Incluye información de contacto, enlaces a redes sociales
        y políticas de privacidad. 
        Instagram
        Facebook
        
        WhatsApp: 3195137182 Mail:
        mariasf@correo.udistrital.edu.co
      </div>
    </footer>
  );
});
