/** @jsxImportSource react */
import React, { useState, useRef, forwardRef } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

const CommonQuestions = () => {

  const [expanded, setExpanded] = useState(false);
  
  const handleChange = (panel) => {
    // => (event, isExpanded)
    console.log(panel)
    // console.log(panel, expanded, isExpanded);
    // setExpanded(isExpanded ? panel : false);
  };

  const AccordionQuestion = forwardRef(function (props, ref) {
    const { value, style } = props;
    const { id, pregunta, respuesta, panel, panelNumber } = value;
    // console.log(panel, expanded, panelNumber);
    return (
      <Accordion
        key={id}
        ref={ref}
        style={style} 
        {...props}
        expanded={expanded !== `${panelNumber}`} // All true
        onChange={() => handleChange(`${panelNumber}`)}
        sx={{backgroundColor: 'black', color: 'white'}}
      >
        <AccordionSummary
          expandIcon={<ExpandMore color="primary"/>}
          aria-controls={panel}
          id={panel}
        >
          <Typography className="text-lg font-semibold" variant="h5">
            {pregunta}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            align="left"
            className="text-base font-light"
            variant="body1"
          >
            {respuesta}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  const questionsInfo = [
    {
      id: 1,
      pregunta: "¿Por qué tener una página web?",
      respuesta:
        "Tener una página web es esencial para alcanzar a una audiencia global, establecer credibilidad, y promover tus productos o servicios las 24 horas, los 7 días de la semana. Es tu ventana al mundo digital.",
      panel: "panel1a-content",
      panelNumber: "panel1",
    },
    {
      id: 2,
      pregunta:
        "¿Qué información necesito para arrancar a montar un sitio web?",
      respuesta:
        "Para comenzar, necesitamos conocer tu negocio, objetivos y preferencias de diseño. Luego, cualquier contenido relevante, como texto, imágenes y logotipos, será de gran ayuda.",
      panel: "panel2a-content",
      panelNumber: "panel2",
    },
    {
      id: 3,
      pregunta: "¿Cuáles pasos se siguen para crear una página web?",
      respuesta:
        "Nuestro proceso implica la planificación, diseño, desarrollo, pruebas y lanzamiento. Te guiaremos en cada paso, asegurando una experiencia fluida.",
      panel: "panel3a-content",
      panelNumber: "panel3",
    },
    {
      id: 4,
      pregunta: "¿Qué es un hosting y dominio?",
      respuesta:
        "El hosting es donde se almacena tu sitio web, mientras que el dominio es tu dirección en línea (ejemplo: www.tudominio.com).",
      panel: "panel4a-content",
      panelNumber: "panel4",
    },
    {
      id: 5,
      pregunta: "¿Mi paquete incluye hosting y dominio?",
      respuesta:
        "Sí, ofrecemos paquetes que incluyen hosting y dominio para simplificar tu experiencia de creación de sitios web.",
      panel: "panel5a-content",
      panelNumber: "panel5",
    },
    {
      id: 6,
      pregunta: "¿Qué es un certificado SSL?",
      respuesta:
        "Un certificado SSL garantiza la seguridad de tu sitio web al cifrar la información entre el servidor y el navegador del usuario, es fundamental para la confianza en línea.",
      panel: "panel6a-content",
      panelNumber: "panel6",
    },
    {
      id: 7,
      pregunta: "¿Cómo puedo actualizar mi sitio web?",
      respuesta:
        "Puedes actualizar tu sitio web a través de nuestros servicios de mantenimiento y administración de contenidos, o proporcionarte las herramientas para hacerlo tú mismo.",
      panel: "panel7a-content",
      panelNumber: "panel7",
    },
    {
      id: 8,
      pregunta: "¿Cuánto tiempo dura el desarrollo de un sitio web?",
      respuesta:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Desde unas semanas para sitios básicos hasta meses para proyectos personalizados.",
      panel: "panel8a-content",
      panelNumber: "panel8",
    },
    {
      id: 9,
      pregunta:
        "¿Cuál es la diferencia entre usar plantillas de WordPress o Wix, versus el diseño web de código a medida?",
      respuesta:
        "Las plantillas son rápidas, pero limitadas en personalización. El diseño a medida ofrece una experiencia única, adaptada a tus necesidades específicas.",
      panel: "panel9a-content",
      panelNumber: "panel9",
    },
    {
      id: 10,
      pregunta: "¿Qué es SEO?",
      respuesta:
        "El SEO (Search Engine Optimization) es el proceso de optimizar tu sitio web para que aparezca en los primeros resultados de búsqueda en Google y otros motores de búsqueda.",
      panel: "panel10a-content",
      panelNumber: "panel10",
    },
    {
      id: 11,
      pregunta: "¿Cómo posicionar una web en buscadores?",
      respuesta:
        "Posicionar una web requiere estrategias de SEO, como la optimización de palabras clave, la creación de contenido de calidad y la optimización técnica del sitio.",
      panel: "panel11a-content",
      panelNumber: "panel11",
    },
    {
      id: 12,
      pregunta: "¿Puedo recibir pagos en línea?",
      respuesta:
        "Sí, podemos integrar pasarelas de pago seguras en tu sitio web para que puedas recibir pagos en línea de manera efectiva y segura.",
      panel: "panel12a-content",
      panelNumber: "panel12",
    },
  ];

  const ref = useRef(null);
  const containerRef = useRef(null);

  // const [expanded, setExpanded] = useState(false);

  return (
    <>
      {questionsInfo.map((value, index) => {
        return (
          <div container={containerRef.current} key={index}>
            <AccordionQuestion value={value} ref={ref}/>
            {/* expanded={expanded} setExpanded={setExpanded()} */}
          </div>
        );
      })}
    </>
  );
};

export default CommonQuestions;
