import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import styles from "./features.css?inline";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

import DevicesIcon from "@mui/icons-material/Devices";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebIcon from "@mui/icons-material/Web";
export const MUIDevicesIcon = qwikify$(DevicesIcon);
export const MUILaptopIcon = qwikify$(LaptopIcon);
export const MUIPhoneAndroidIcon = qwikify$(PhoneAndroidIcon);
export const MUIPhoneIphoneIcon = qwikify$(PhoneIphoneIcon);
export const MUIWebIcon = qwikify$(WebIcon);

export const MUITypography = qwikify$(Typography);
export const MUIImageList = qwikify$(ImageList);
export const MUIImageListItem = qwikify$(ImageListItem);

export const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

export function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <features id="features-section" class="mt-6 mb-6">
      <MUITypography
        variant="h6"
        component="div"
        align="center"
        className="pt-6"
      >
        ¿Estás cansado de lidiar con plataformas antiguas y poco eficientes?{" "}
      </MUITypography>
      <MUITypography className="mt-6 mb-6" variant="body1">
        <br />
        <strong>NexaSoft</strong> ofrece soluciones empresariales de software
        que te ayudarán a mejorar tu negocio. Con nuestros servicios de{" "}
        <strong>
          modernización de plataformas <MUIDevicesIcon />,{" "}
        </strong>
        podrás migrar tus sistemas existentes a las últimas tecnologías,
        {/* renderizando del lado del servidor y sirviendo contenidos estáticos */}
        aumentando el rendimiento de tu sitio web hasta en un 100%. Además, con
        nuestros servicios de{" "}
        <strong>
          mantenimiento de plataformas digitales <MUILaptopIcon />,{" "}
        </strong>
        aumentaras la disponibilidad, seguridad y productividad de tus sistemas
        existentes.
        <br />
        <br />
        Nuestros{" "}
        <strong>
          desarrolladores de aplicaciones móviles <MUIPhoneAndroidIcon />
          <MUIPhoneIphoneIcon />,{" "}
        </strong>{" "}
        te ayudan a reducir costos al acelerar tareas especificas como captura
        de datos, con aplicaciones móviles en tus sistemas iOS y Android.
        Contamos con{" "}
        <strong>
          desarrolladores de aplicaciones web <MUIWebIcon />,{" "}
        </strong>
        quienes te ayudaran a crear: Sitios Web, Landing pages y Stores
        adaptativas de e-commerce, con integración a pasarelas de pagos online.
        También mejoramos tu posicionamiento SEO para optimizar el
        reconocimiento digital de tu marca en Internet. <br />
        <br />
        Además, con nuestros servicios de{" "}
        <strong>integración de automatización, </strong>accede a diferentes
        sistemas y plataformas que aumentan la eficiencia en tus recursos de
        software. <br />
        <br />
        Por último, con nuestros servicios de{" "}
        <strong>seguridad y cumplimiento, </strong>
        garantiza la seguridad de tus plataformas, cumpliendo con las normas y
        regulaciones aplicables. <br />
        <br />
        No esperes más, contáctanos para saber más sobre cómo nuestras
        soluciones de software pueden mejorar tu negocio.
        <br />
      </MUITypography>
      <MUIImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <MUIImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </MUIImageListItem>
        ))}
      </MUIImageList>
    </features>
  );
});
