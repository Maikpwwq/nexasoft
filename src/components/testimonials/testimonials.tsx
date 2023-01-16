import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import styles from "./testimonials.css?inline";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const MUIBox = qwikify$(Box);
export const MUICard = qwikify$(Card);
export const MUICardContent = qwikify$(CardContent);
export const MUITypography = qwikify$(Typography);

export default component$(() => {
  useStylesScoped$(styles);

  const testimonials = [
    "Trabajar con NexaSoft fue una experiencia increíble. Al modernizar la plataforma, hemos podido atender mejor a nuestros clientes y aumentar nuestras ventas. WaviAeronautics",
    "NexaSoft nos ayudó a mejorar la productividad de nuestros sistemas existentes, ahora confiamos en ellos el mantenimiento de nuestros sistemas, conociendo que estarán disponibles en todo momento y podremos cumplir con los plazos de entrega. Naga Regeneración de Aguas",
    "NexaSoft ha superado nuestras expectativas con sus servicios de desarrollo de aplicaciones móviles. Hemos reducido costos operativos de manera significativa. Además, la aplicación es fácil de usar y ha sido muy bien recibida por nuestros usuarios finales. Comunidad Dezzpo",
  ];

  return (
    <testimonials id="testimonials-section">
      <div>
        <MUITypography variant="h6" component="div">
          Testimonios y comentarios de clientes satisfechos.
        </MUITypography>
        <MUIBox className="flex" sx={{flexDirection:{ md:"row", xs:"column"}}}>
          {testimonials.map((mensaje) => {
            return (
              <MUICard className="m-6 rounded hover:rounded-lg" sx={{ maxWidth: 275, borderRadius: 4 }} elevation={16}>
                <MUICardContent>
                  <MUITypography variant="body2" component="div">
                    {/* sx={{ fontSize: 14 }} color="text.secondary" gutterBottom */}
                    {mensaje}
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
