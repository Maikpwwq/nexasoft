import SDLC from "~/assets/img/blog/SDLC.png"

export const webPosts = [
    {
      id: "SDLC",
      title:
      "¿Quieres Tener Un Sitio Web Para Tu Marca Pero No Sabes Por Donde Empezar?",
      description:
        "Te detallaré el proceso del ciclo de vida del desarrollo de software, describiendo las consideraciones generales en cada etapa.",
      cycle: [
        {
          stage: "1. Idea y Conceptualización de objetivos",
          body: "Debemos determinar el alcance del proyecto. Se comienza con una lluvia de ideas para definir el propósito del sitio web, los objetivos y el público objetivo. Se hace un esquema básico de las funcionalidades y el diseño general. Elegiremos que tipo de pagina usar, para presentación de marca, como vitrina de productos, como tienda con canales de pago, desarrollando funcionalidades especificas.",
        },
        {
          stage: "2. Análisis de requerimientos y Planificación",
          body: "Se aplican las mejores prácticas de investigación, para validar los requisitos y luego decidir que tecnologías disponibles y tendencias actuales en diseño web implementar. Luego, se crea un plan detallado, incluyendo un cronograma y un presupuesto estimado del proyecto.",
        },
        {
          stage: "3. Arquitectura y Diseño UI/UX",
          body: "Se desarrolla la maquetación web que incluye wireframes y mockups para visualizar la estructura del sitio. Se elige una paleta de colores, tipografía y otros elementos visuales que reflejen la identidad del proyecto. Se Pone a disposición de los desarrolladores un banco de imágenes corporativas.",
        },
        {
          stage: "4. Implementación del código",
          body: "Se empieza a codificar el sitio web, en un formato responsivo a diferentes tamaños de pantalla, utilizando HTML, CSS y JavaScript para el front-end y herramientas como Node.js para el back-end. Se instalan paquetes o dependencias en el proyecto. Se integran bases de datos y se configuran servidores.",
        },
        {
          stage: "5. Pruebas y Revisión de calidad",
          body: "Se realizan pruebas exhaustivas para asegurar que todo funcione correctamente. Esto incluye pruebas de usabilidad, pruebas de carga y corrección de errores..",
        },
        {
          stage: "6. Lanzamiento",
          body: "Después de hacer todos los ajustes en nuestro Hosting y Dominio y, contando con un certificado SSL, se lanza el sitio web al público. Se asegura de que todo esté optimizado para SEO y que el sitio sea accesible desde todos los dispositivos.",
        },
        {
          stage: "7. Mantenimiento y Actualización",
          body: "Se continúa monitoreando el sitio web para detectar cualquier problema y realizar actualizaciones regulares. También se analizan las métricas de rendimiento y el feedback de los usuarios para hacer mejoras continuas.",
        },
      ],
      image: SDLC,
      alt: "Grafico de las siete etapas del ciclo de desarrollo de software", 
      route: "/blog/SDLC",
    },
  ];