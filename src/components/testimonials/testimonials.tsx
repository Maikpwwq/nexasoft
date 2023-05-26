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
        "Trabajar con NexaSoft SAS fue una experiencia increíble. Al modernizar la plataforma, hemos podido atender mejor a nuestros clientes y aumentar nuestras ventas.",
      name: "WaviAeronautics",
      logo: WaviPixelLogo,
      webSite: "https://wavi-aeronautics.vercel.app/",
    },
    {
      message:
        "NexaSoft SAS nos ayudó a mejorar la productividad de nuestros sistemas existentes, ahora confiamos en ellos el mantenimiento de nuestros sistemas, conociendo que estarán disponibles en todo momento y podremos cumplir con los plazos de entrega.",
      name: "Naga Regeneración de Aguas",
      logo: NagaLogo,
      webSite: "https://maikpwwq.github.io/",
    },
    {
      message:
        "NexaSoft SAS ha superado nuestras expectativas con sus servicios de desarrollo de aplicaciones móviles. Hemos reducido costos operativos de manera significativa. Además, la aplicación es fácil de usar y ha sido muy bien recibida por nuestros usuarios finales.",
      name: "Comunidad Dezzpo",
      logo: ComunidadDezzpoLogo,
      webSite: "https://maikpwwq.github.io/",
    },
  ];

  return (
    <testimonials id="testimonials-section">
      <div>
        <MUITypography
          variant="h3"
          align="center"
          className="title"
        >
          Nuestros <span class="highlight">clientes</span> satisfechos.
        </MUITypography>
        <MUIBox
          className="flex items-center justify-center mt-6 mb-6"
          sx={{ flexDirection: { md: "row", sm: "row", xs: "column" } }}
        >
          {testimonials.map(({ message, name, logo, webSite }) => {
            return (
              <MUICard
                key={name}
                className="m-6 hover:rounded-3xl"
                sx={{ maxWidth: 275, borderRadius: 4 }}
                elevation={16}
              >
                <MUICardMedia>
                  <img src={logo} alt={name} height={184} width={300}/>
                </MUICardMedia>
                <MUICardContent>
                  <MUITypography
                    variant="body2"
                    color="text.secondary"
                    // component="div"
                  >
                    {/* sx={{ fontSize: 14 }} color="text.secondary" gutterBottom */}
                    {message}
                  </MUITypography>
                  <MUITypography variant="body1" fontWeight={"bold"} className="pt-3">
                    <a href={webSite} >{name}</a>{" "}
                  </MUITypography>
                </MUICardContent>
              </MUICard>
            );
          })}
        </MUIBox>
      </div>
    </testimonials>
  );
});
