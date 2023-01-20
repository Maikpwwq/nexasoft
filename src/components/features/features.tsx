import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./features.css?inline";

import AplicacionesMoviles from "../../assets/img/lista imagenes/Aplicaciones móviles.jpg";
import Aplications from "../../assets/img/lista imagenes/aplications.jpg";
import Automatizacion from "../../assets/img/lista imagenes/Automatización.jpg";
import DesarrolloWeb from "../../assets/img/lista imagenes/Desarrollo web.jpg";
import Desktop from "../../assets/img/lista imagenes/desktop.jpg";
import Development from "../../assets/img/lista imagenes/development.jpg";
import Devices from "../../assets/img/lista imagenes/devices.jpg";
import Ecommerce from "../../assets/img/lista imagenes/ecommerce.jpg";
import ExploreInternet from "../../assets/img/lista imagenes/explore internet.jpg";
import GrowthIdeas from "../../assets/img/lista imagenes/growth ideas.jpg";
import Innovation from "../../assets/img/lista imagenes/Innovación.jpg";
import SystemIntegration from "../../assets/img/lista imagenes/Integración de sistemas.jpg";
import MantenimientoPlataformas from "../../assets/img/lista imagenes/Mantenimiento de plataformas.jpg";
import ModernizacionPlataformas from "../../assets/img/lista imagenes/Modernización de plataformas.jpg";
import Movile from "../../assets/img/lista imagenes/móvile.jpg";
import RemoteOffice from "../../assets/img/lista imagenes/remote office.jpg";
import SeguridadInformatica from "../../assets/img/lista imagenes/Seguridad informática.jpg";
import Tecnologia from "../../assets/img/lista imagenes/Tecnología.jpg";

import {
  MUIBox,
  MUITypography,
  MUIImageList,
  MUIImageListItem,
  MUIDevicesIcon,
  MUILaptopIcon,
  MUIPhoneAndroidIcon,
  MUIPhoneIphoneIcon,
  MUIWebIcon,
} from "~/integrations/react/mui";

export const itemData = [
  {
    img: AplicacionesMoviles,
    title: "AplicacionesMoviles",
    rows: 2,
    cols: 2,
  },
  {
    img: Aplications,
    title: "Aplications",
  },
  {
    img: Automatizacion,
    title: "Automatizacion",
  },
  {
    img: DesarrolloWeb,
    title: "DesarrolloWeb",
    cols: 2,
  },
  {
    img: Desktop,
    title: "Desktop",
    cols: 2,
  },
  {
    img: Development,
    title: "Development",
    author: "@nkiqi",
    rows: 2,
    cols: 2,
  },
  {
    img: Devices,
    title: "Devices",
  },
  {
    img: Ecommerce,
    title: "Ecommerce",
  },
  {
    img: ExploreInternet,
    title: "ExploreInternet",
    rows: 2,
    cols: 2,
  },
  {
    img: GrowthIdeas,
    title: GrowthIdeas,
  },
  {
    img: Innovation,
    title: "Innovation",
  },
  {
    img: SystemIntegration,
    title: "SystemIntegration",
    cols: 2,
  },
  {
    img: MantenimientoPlataformas,
    title: "MantenimientoPlataformas",
    rows: 2,
    cols: 2,
  },
  {
    img: ModernizacionPlataformas,
    title: "ModernizacionPlataformas",
  },
  {
    img: Movile,
    title: "Movile",
  },
  {
    img: RemoteOffice,
    title: "RemoteOffice",
    cols: 2,
  },
  {
    img: SeguridadInformatica,
    title: "SeguridadInformatica",
    cols: 2,
  },
  {
    img: Tecnologia,
    title: "Tecnologia",
    rows: 2,
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
        color={"var(--qwik-dark-blue)"}
      >
        ¿Estás cansado de lidiar con plataformas antiguas y poco eficientes?{" "}
      </MUITypography>
      <MUITypography className="mt-6 mb-6 pb-6" variant="body1">
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
      <MUIBox className="w-100 flex justify-center">
        <MUIImageList
          sx={{ width: { md: 500 }, height: { md: 600 } }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {!!itemData &&
            itemData.map((item) => (
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
      </MUIBox>
    </features>
  );
});
