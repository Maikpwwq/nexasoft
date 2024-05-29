/** @jsxImportSource react */
import { ImageListItem } from "@mui/material";
// import { useCallback } from "react";
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

// useCallback(() : Array<any> => (), [])

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const itemData: Array<any> = [
  {
    id: 0,
    img: AplicacionesMoviles,
    title: "AplicacionesMoviles",
    rows: 2,
    cols: 2,
  },
  {
    id: 1,
    img: Aplications,
    title: "Aplications",
  },
  {
    id: 2,
    img: Automatizacion,
    title: "Automatizacion",
  },
  {
    id: 3,
    img: DesarrolloWeb,
    title: "DesarrolloWeb",
    cols: 2,
  },
  {
    id: 4,
    img: Desktop,
    title: "Desktop",
    cols: 2,
  },
  {
    id: 5,
    img: Development,
    title: "Development",
    author: "@nkiqi",
    rows: 2,
    cols: 2,
  },
  {
    id: 6,
    img: Devices,
    title: "Devices",
  },
  {
    id: 7,
    img: Ecommerce,
    title: "Ecommerce",
  },
  {
    id: 8,
    img: ExploreInternet,
    title: "ExploreInternet",
    rows: 2,
    cols: 2,
  },
  {
    id: 9,
    img: GrowthIdeas,
    title: GrowthIdeas,
  },
  {
    id: 10,
    img: Innovation,
    title: "Innovation",
  },
  {
    id: 11,
    img: SystemIntegration,
    title: "SystemIntegration",
    cols: 2,
  },
  {
    id: 12,
    img: MantenimientoPlataformas,
    title: "MantenimientoPlataformas",
    rows: 2,
    cols: 2,
  },
  {
    id: 13,
    img: ModernizacionPlataformas,
    title: "ModernizacionPlataformas",
  },
  {
    id: 14,
    img: Movile,
    title: "Movile",
  },
  {
    id: 15,
    img: RemoteOffice,
    title: "RemoteOffice",
    cols: 2,
  },
  {
    id: 16,
    img: SeguridadInformatica,
    title: "SeguridadInformatica",
    cols: 2,
  },
  {
    id: 17,
    img: Tecnologia,
    title: "Tecnologia",
    rows: 2,
    cols: 2,
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageListItems = () => {
  return (
    <>
      {itemData.length > 0 &&
        itemData.map((item) => {
          const { id, title, img, cols, rows } = item;
          return (
            <ImageListItem key={id} cols={cols || 1} rows={rows || 1}>
              <img
                {...srcset(img, 121, rows, cols)}
                alt={title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
    </>
  );
};

export default ImageListItems;
