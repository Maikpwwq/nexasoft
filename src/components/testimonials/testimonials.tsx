import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./testimonials.css?inline";

import ComunidadDezzpoLogo from "../../assets/img/logos/Comunidad-Dezzpo.jpg";
import WaviPixelLogo from "../../assets/img/logos/WaviPixelLogo.png";
import NagaLogo from "../../assets/img/logos/WaviPixelLogo.png";

import {
  MUITypography,
  MUIBox,
  MUICard,
  MUICardContent,
  MUICardMedia,
} from "~/integrations/react/mui";

export default component$(() => {
  useStylesScoped$(styles);

  const testimonials = [
    {
      message:
        "Trabajar con NexaSoft fue una experiencia increíble. Al modernizar la plataforma, hemos podido atender mejor a nuestros clientes y aumentar nuestras ventas.",
      name: "WaviAeronautics",
      logo: WaviPixelLogo,
    },
    {
      message:
        "NexaSoft nos ayudó a mejorar la productividad de nuestros sistemas existentes, ahora confiamos en ellos el mantenimiento de nuestros sistemas, conociendo que estarán disponibles en todo momento y podremos cumplir con los plazos de entrega.",
      name: "Naga Regeneración de Aguas",
      logo: NagaLogo,
    },
    {
      message:
        "NexaSoft ha superado nuestras expectativas con sus servicios de desarrollo de aplicaciones móviles. Hemos reducido costos operativos de manera significativa. Además, la aplicación es fácil de usar y ha sido muy bien recibida por nuestros usuarios finales.",
      name: "Comunidad Dezzpo",
      logo: ComunidadDezzpoLogo,
    },
  ];

  return (
    <testimonials id="testimonials-section">
      <div>
        <MUITypography variant="h6" align="center" color={"var(--qwik-dark-blue)"}>
          Testimonios y comentarios de clientes satisfechos.
        </MUITypography>
        <MUIBox
          className="flex items-center"
          sx={{ flexDirection: { md: "row", sm: "row", xs: "column" } }}
        >
          {testimonials.map(({ message, name, logo }) => {
            return (
              <MUICard
                key={name}
                className="m-6 rounded hover:rounded-lg"
                sx={{ maxWidth: 275, borderRadius: 4 }}
                elevation={16}
              >
                <MUICardMedia>
                  <img src={logo} alt={name} height="194" />
                </MUICardMedia>
                <MUICardContent>
                  <MUITypography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {/* sx={{ fontSize: 14 }} color="text.secondary" gutterBottom */}
                    {message}
                  </MUITypography>
                  <MUITypography variant="body1" fontWeight={"bold"}>{name}</MUITypography>
                </MUICardContent>
              </MUICard>
            );
          })}
        </MUIBox>
      </div>
    </testimonials>
  );
});
