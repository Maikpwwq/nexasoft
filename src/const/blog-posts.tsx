import SDLC from "~/assets/img/blog/SDLC.png";

export interface Posts {
  id: string;
  title: string;
  description: string;
  cycle: Cycle[];
  image: string;
  alt: string;
  route: string;
}

export interface Cycle {
  stage: string;
  body: string;
}

export const voidPost: Posts = {
  id: "",
  title: "",
  description: "",
  cycle: [
    {
      stage: "",
      body: "",
    },
  ],
  image: "",
  alt: "",
  route: "/",
};

export const webPosts: Posts[] = [
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
  {
    id: "AI-EVOLUTION",
    title: "De Prompts a Agentes: La Evolución de la Relación Profesional con la Inteligencia Artificial",
    description: "Exploraremos cómo ha cambiado nuestra interacción con la IA, desde escribir simples prompts hasta coordinar sistemas complejos de agentes autónomos.",
    cycle: [
      {
        stage: "1. La era del Prompt Engineering",
        body: "Al inicio, la relación se limitaba a dar instrucciones directas (prompts). Un prompt bien estructurado permitía obtener mejores respuestas. Sin embargo, seguía siendo un proceso manual y dependiente del usuario en cada interacción.",
      },
      {
        stage: "2. Cadenas de Ejecución y Contexto (RAG)",
        body: "Luego integramos bases de conocimiento privadas (Retrieval-Augmented Generation) y encadenamos instrucciones. La IA ya no solo respondía, sino que buscaba información relevante en documentos de la empresa de forma automatizada.",
      },
      {
        stage: "3. Agentes Autónomos",
        body: "Dimos el salto a los agentes autónomos. Un agente es una IA a la que se le asigna un objetivo, herramientas (como buscar en Google, ejecutar código o enviar correos) y la capacidad de decidir de manera autónoma los pasos a seguir.",
      },
      {
        stage: "4. Orquestación y Enjambres de Agentes (Hardness)",
        body: "Hoy el desarrollo premium consiste en orquestadores. Un agente supervisor divide un proyecto complejo en sub-tareas y coordina a múltiples agentes especializados (un programador, un tester, un redactor) que colaboran para entregar un resultado final blindado.",
      },
      {
        stage: "5. Mini Glosario Técnico Clave",
        body: "• Prompt Engineering: El arte de diseñar instrucciones claras para un LLM.\n• RAG (Generación Aumentada por Recuperación): Técnica para conectar un modelo de IA a fuentes de datos externas en tiempo real.\n• Agente Autónomo: Entidad de IA capaz de percibir su entorno, tomar decisiones y ejecutar acciones usando herramientas.\n• Orquestador: Sistema que coordina múltiples agentes de IA asignándoles roles y controlando el flujo de trabajo conjunto.",
      },
    ],
    image: SDLC, // Reutiliza la misma por capacidad del generador, modificable por el usuario
    alt: "Ilustración de la evolución de la inteligencia artificial de prompts a agentes",
    route: "/blog/AI-EVOLUTION",
  },
  {
    id: "NO-CODE-VS-EXPERT",
    title: "Creación de Sitios con Herramientas No-Code: ¿Cuándo es Suficiente y Cuándo Necesitas un Experto?",
    description: "Analizamos el alcance de las plataformas visuales gratuitas de no-code y por qué la asesoría de un consultor experto es indispensable para integraciones profesionales y automatizaciones.",
    cycle: [
      {
        stage: "1. El auge del No-Code / SaaS Gratis",
        body: "Herramientas como Wix, Framer, Webflow o incluso plantillas estáticas en GitHub Pages permiten a cualquiera publicar un sitio web rápidamente sin escribir código. Son ideales para prototipos iniciales y validación de ideas.",
      },
      {
        stage: "2. El alcance real de un proyecto básico",
        body: "Un sitio no-code básico cubre la presentación visual básica. Sin embargo, carece de flexibilidad cuando el negocio crece. Dependes de las limitaciones técnicas, costos crecientes de suscripción y un SEO que suele estar a medio optimizar.",
      },
      {
        stage: "3. El Laberinto de las Integraciones y DNS",
        body: "Aquí es donde el proyecto se estanca. Comprar un dominio propio en Namecheap, configurar los registros DNS (A, CNAME, TXT), configurar correos corporativos y sincronizar formularios con CRMs o pasarelas de pago requiere conocimientos técnicos específicos para evitar caídas.",
      },
      {
        stage: "4. Automatización y Flujos de Trabajo",
        body: "Un experto conecta tu web no-code a herramientas como Zapier, Make o Google Sheets. Esto permite que cuando un cliente escriba en la web, el dato cree un contacto en tu CRM, le envíe un correo de bienvenida automático y le notifique al equipo por WhatsApp en tiempo real.",
      },
      {
        stage: "5. NexaSoft SAS como tu Consultor Estratégico",
        body: "No tienes que aprender a programar ni a pelear con servidores. En NexaSoft SAS te asesoramos en la elección del stack adecuado, nos encargamos de las configuraciones técnicas complejas y automatizamos tus procesos para que te enfoques únicamente en vender.",
      },
    ],
    image: SDLC, // Reutiliza la misma por capacidad del generador, modificable por el usuario
    alt: "Ilustración de herramientas no code y consultoría experta",
    route: "/blog/NO-CODE-VS-EXPERT",
  },
];
