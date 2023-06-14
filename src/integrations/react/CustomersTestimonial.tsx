/** @jsxImportSource react */
// import React, { useState } from "react";
import {
  Box,
  // Grow,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import ComunidadDezzpoLogo from "~/assets/img/logos/Comunidad-Dezzpo.jpg";
import WaviPixelLogo from "~/assets/img/logos/WaviPixelLogo.png";
import NagaLogo from "~/assets/img/logos/Naga-Reg-Aguas.png";

const styles = () => ({
  title: {
    paddingTop: "1.5rem",
    margin: "1.25rem",
    fontWeight: "700",
  },
  testimonialsCard: {
    margin: "1.5rem",
    "&:hover": {
      borderRadius: "1.5rem",
    },
    // animation-duration: 3s,
    // animation-name: cardGrow,
    // animation-timing-function: ease-out,
    // animation-iteration-count: infinite,
  },
  testimonials: {
    backgroundColor: "var(--qwik-light-purple)",
  },
  // @keyframes cardGrow{
  //     0%   {transform: scale3d(0)}
  //     100% {transform: scale3d(1.1)}
  // }
});

const CustomersTestimonial = () => {
  const classes = styles();

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
      webSite: "https://naga-regeneracion-aguas-frontend.vercel.app",
    },
    {
      message:
        "NexaSoft SAS ha superado nuestras expectativas con sus servicios de desarrollo de aplicaciones móviles. Hemos reducido costos operativos de manera significativa. Además, la aplicación es fácil de usar y ha sido muy bien recibida por nuestros usuarios finales.",
      name: "Comunidad Dezzpo",
      logo: ComunidadDezzpoLogo,
      webSite: "https://maikpwwq.github.io/",
    },
  ];

  // const [checked, setChecked] = useState(true);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // };

  return (
    <div
      className="container  mx-auto container-purple container-center px-0"
      style={classes.testimonials}
    >
      <Typography
        variant="h3"
        align="center"
        style={classes.title}
        sx={{ fontSize: { xs: "2rem", md: "3.75rem" } }}
      >
        Nuestros{" "}
        <span
          className="highlight font-bold"
          style={{ color: "var(--qwik-dark-purple)" }}
        >
          clientes
        </span>{" "}
        satisfechos.
      </Typography>
      <Box
        className="flex items-center justify-center mt-6 mb-6"
        sx={{ flexDirection: { md: "row", sm: "column", xs: "column" } }}
      >
        {testimonials.map(({ message, name, logo, webSite }) => {
          // handleChange()

          return (
            // <Grow
            //   // in={checked}
            //   appear={true}
            //   key={name}
            //   //   style={{ transformOrigin: "0 0 0" }}
            //   //   {...(checked ? { timeout: 1000 } : {})}
            // >
              <Card
                key={name}
                style={classes.testimonialsCard}
                sx={{ maxWidth: 300, borderRadius: 4 }}
                elevation={16}
              >
                <CardMedia>
                  <img src={logo} alt={name} height={184} width={300} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    // component="div"
                  >
                    {/* sx={{ fontSize: 14 }} color="text.secondary" gutterBottom */}
                    {message}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    className="pt-3"
                  >
                    <a href={webSite}>{name}</a>{" "}
                  </Typography>
                </CardContent>
              </Card>
            // </Grow>
          );
        })}
      </Box>
    </div>
  );
};

export default CustomersTestimonial;
