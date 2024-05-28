/** @jsxImportSource react */
import React, { forwardRef, useState, useRef } from "react"; // useEffect,
import {
  Box,
  // Grow,
  Slide,
  // Fade,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import ComunidadDezzpoLogo from "~/assets/img/logos/Comunidad-Dezzpo.jpg";
import WaviPixelLogo from "~/assets/img/logos/WaviPixelLogo.png";
import NagaLogo from "~/assets/img/logos/Naga-Reg-Aguas.png";
import PrimalTrace from "~/assets/img/logos/PrimalTrace.png";
import ConstructoraColombia from "~/assets/img/logos/ConstructoraColombiaOficial.png";

import ComunidadDezzpoImage from "~/assets/img/webClientes/ComunidadDezzpoImage.png";
import WaviImage from "~/assets/img/webClientes/WaviImage.png";
import NagaImage from "~/assets/img/webClientes/NagaImage.png";
import PrimalTraceImage from "~/assets/img/webClientes/PrimalTraceImage.png";
import ConstructoraColombiaImage from "~/assets/img/webClientes/ConstructoraColombiaImage.png";

import AstroIcon from "~/assets/img/technologies/Astro.png";
import ethersIcon from "~/assets/img/technologies/ethers.png";
import FirebaseIcon from "~/assets/img/technologies/Firebase.png";
import SendbirdIcon from "~/assets/img/technologies/Sendbird.png";
import NextJsBlancoIcon from "~/assets/img/technologies/NextJsBlanco.png";
// import NextJsNegroIcon from "~/assets/img/technologies/NextJsNegro.png";
import PiniaIcon from "~/assets/img/technologies/Pinia.png";
import ReduxIcon from "~/assets/img/technologies/Redux.png";
import SolidityIcon from "~/assets/img/technologies/Solidity.png";
import SqliteIcon from "~/assets/img/technologies/Sqlite.png";
import SupabaseIcon from "~/assets/img/technologies/Supabase.png";
import TheGraphIcon from "~/assets/img/technologies/The-Graph.png";
import VikeJsIcon from "~/assets/img/technologies/VikeJs.png";
import ViteIcon from "~/assets/img/technologies/Vite.png";
import MuiMaterialIcon from "~/assets/img/technologies/MuiMaterial.png";
import TailwindIcon from "~/assets/img/technologies/Tailwind.png";
// import VueRouterIcon from "~/assets/img/technologies/Vue Router.png";
import VueJsIcon from "~/assets/img/technologies/VueJs.png";
import VuetifyIcon from "~/assets/img/technologies/Vuetify.png";
import VuexIcon from "~/assets/img/technologies/Vuex.png";
import web3AuthIcon from "~/assets/img/technologies/web3-auth.png";
// import web3authIcon from "~/assets/img/technologies/web3auth.png";

const styles = () => ({
  title: {
    margin: "1.5rem 0",
    fontWeight: "300",
    color: "rgba(255, 255, 255, 1)",
    // fontSize: "2rem !important",
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
    backgroundColor: "var(--qwik-purple-background)",
    width: "100%",
  },
  // @keyframes cardGrow{
  //     0%   {transform: scale3d(0)}
  //     100% {transform: scale3d(1.1)}
  // }
});

const TestimonialCard =
  // (testimony: any) => {
  forwardRef(function (props, ref) {
    const classes = styles();
    const { style, testimony } = props;
    const { message, name, logo, image, webSite, technologies } = testimony;
    // console.log("testimony", testimony);

    return (
      <div ref={ref} style={style} {...props}>
        <Card
          style={classes.testimonialsCard}
          sx={{ width: 300, borderRadius: 4 }}
          elevation={16}
        >
          <CardMedia>
            <img src={image} alt={name} height={184} width={300} />
          </CardMedia>
          <CardContent>
            <Typography variant="body1 text-xl" fontWeight={"bold"}>
              <a
                href={webSite}
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={logo}
                  alt={name}
                  height={84}
                  width={84}
                  className="mt-2 mb-4 me-2"
                />
                {name}
              </a>{" "}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="mt-4"
              // component="div"
            >
              {/* sx={{ fontSize: 14 }} color="text.secondary" gutterBottom */}
              {message}
            </Typography>
            <Box className="flex flex-row items-center justify-center mx-auto my-6 flex-wrap">
              {technologies.map((icon, index) => {
                return (
                  <img
                    src={icon}
                    className="mx-1"
                    key={index}
                    alt="iconTechnology"
                    height={33}
                    width={33}
                  />
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </div>
    );
  });
// };

const CustomersTestimonial = () => {
  const classes = styles();

  const testimonials = [
    {
      message:
        "¡Increíble experiencia trabajando con NexaSoft SAS! Modernizamos nuestra plataforma para brindar un servicio mejorado a nuestros clientes y aumentar nuestras ventas.",
      name: "WaviAeronautics",
      logo: WaviPixelLogo,
      image: WaviImage,
      webSite: "https://wavi-aeronautics.vercel.app/",
      technologies: [
        NextJsBlancoIcon,
        FirebaseIcon,
        TailwindIcon,
        ReduxIcon,
        PiniaIcon,
      ],
    },
    {
      message:
        "Mejoramos la productividad de nuestros sistemas existentes, ahora confiamos en NexaSoft SAS el mantenimiento de nuestros sistemas, conociendo que estarán disponibles en todo momento y podremos cumplir con los plazos de entrega.",
      name: "Naga Regeneración de Aguas",
      logo: NagaLogo,
      image: NagaImage,
      webSite: "https://naga-regeneracion-aguas-frontend.vercel.app",
      technologies: [VueJsIcon, PiniaIcon, VuetifyIcon, SqliteIcon],
    },
    {
      message:
        "¡NexaSoft SAS ha transformado nuestra experiencia! Costos reducidos, aplicación intuitiva y gran aceptación entre nuestros usuarios finales. Impresionante.",
      name: "Comunidad Dezzpo",
      logo: ComunidadDezzpoLogo,
      image: ComunidadDezzpoImage,
      webSite: "https://dezzpo.com/",
      technologies: [
        VikeJsIcon,
        ViteIcon,
        FirebaseIcon,
        ReduxIcon,
        MuiMaterialIcon,
        TailwindIcon,
        SendbirdIcon,
      ],
    },
    {
      message:
        "Con plena confianza, hemos establecido una estratégica asociación con NexaSoft SAS para garantizar una trazabilidad segura de nuestro proyecto en la blockchain.",
      name: "PrimalTrace",
      logo: PrimalTrace,
      image: PrimalTraceImage,
      webSite: "https://primaltrace-nuxt-ssr.vercel.app/",
      technologies: [
        VuexIcon,
        PiniaIcon,
        SupabaseIcon,
        ethersIcon,
        SolidityIcon,
        web3AuthIcon,
        TheGraphIcon,
      ],
    },
    {
      message:
        "Me encantó trabajar mi sitio web con Nexasoft SAS. Sus expertos resolvieron todas mis dudas y definieron cada etapa con total transparencia. ¡Muy recomendados!",
      name: "Constructora Colombia",
      logo: ConstructoraColombia,
      image: ConstructoraColombiaImage,
      webSite: "https://constructoracolombia.co/",
      technologies: [AstroIcon, TailwindIcon, ViteIcon],
    },
  ];

  const [checked] = useState(true);
  // const checked = true;

  // useEffect(() => {
  // setTimeout(setChecked(true), 3000);
  //   console.log("checked", checked)
  // }, []);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // };

  const ref = useRef(null);
  const containerRef = React.useRef(null);

  return (
    <div
      className="container container-purple container-center px-0 py-5 w-100"
      style={classes.testimonials}
    >
      <Typography
        variant="h2"
        align="center"
        className="pt-6"
        style={classes.title}
        sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
      >
        Nuestros{" "}
        <span
          className="highlight font-bold md:text-6xl sm:text-3xl text-2xl"
          style={{ color: "rgba(255, 255, 255, 1)", borderColor: "#e5e7eb" }}
        >
          Clientes
        </span>{" "}
        Satisfechos.
      </Typography>
      <Box
        className="flex items-center justify-center mx-auto my-6 flex-wrap"
        sx={{ flexDirection: { md: "row", sm: "column", xs: "column" } }}
      >
        {testimonials.map((testimony, index) => {
          // handleChange()

          return (
            <Slide
              direction="up"
              in={checked}
              key={index}
              appear={true}
              container={containerRef.current}
              // {...(checked ? { timeout: 3000 } : {})}
            >
              {/* <Grow
              in={checked}  
              appear={true}
              key={index}
              //   style={{ transformOrigin: "0 0 0" }}
              //   {...(checked ? { timeout: 1000 } : {})}
            > */}
              {/* {TestimonialCard(testimony)} */}
              <div>
                <TestimonialCard testimony={testimony} ref={ref} />
              </div>
              {/* </Grow> */}
            </Slide>
          );
        })}
      </Box>
    </div>
  );
};

export default CustomersTestimonial;
