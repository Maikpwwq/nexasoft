import SDLC from "~/assets/img/blog/SDLC.png";
import AIEvolutionImg from "~/assets/img/blog/ai-evolution.jpg";
import NoCodeExpertImg from "~/assets/img/blog/no-code-vs-expert.jpg";
import StaticVsWebAppImg from "~/assets/img/blog/static-vs-webapp.jpg";

export interface PostCallout {
  type?: "quote" | "highlight" | "takeaway";
  text: string;
  authorOrSource?: string;
}

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
}

export interface PostSection {
  title?: string;
  lead?: string;
  paragraphs: string[];
  callout?: PostCallout;
  bulletPoints?: string[];
  comparisonTable?: ComparisonTable;
}

export interface PostAuthor {
  name: string;
  role: string;
}

export interface Posts {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: PostAuthor;
  sections: PostSection[];
  image: string;
  alt: string;
  route: string;
}

export const voidPost: Posts = {
  id: "",
  title: "",
  description: "",
  category: "General",
  readTime: "3 min de lectura",
  date: "2026",
  author: {
    name: "Equipo NexaSoft",
    role: "Especialistas en Desarrollo",
  },
  sections: [],
  image: "",
  alt: "",
  route: "/blog/",
};

export const webPosts: Posts[] = [
  {
    id: "SDLC",
    title: "¿Quieres un Sitio Web para tu Marca y no Sabes por Dónde Empezar?",
    subtitle: "El Ciclo de Vida del Software (SDLC) explicado para dueños de negocio y líderes digitales.",
    description: "Te detallamos el proceso estructurado de ingeniería web: desde la conceptualización de objetivos hasta el despliegue con alta disponibilidad y mantenimiento formal.",
    category: "Metodología & Ingeniería",
    readTime: "5 min de lectura",
    date: "Septiembre 2026",
    author: {
      name: "Ingeniería NexaSoft SAS",
      role: "Especialistas en Ciclos de Software",
    },
    sections: [
      {
        title: "El Mapa de Ruta: Por Qué el Software Profesional no se Improvisa",
        lead: "Tener presencia en internet es hoy el activo comercial más importante de cualquier organización, pero comenzar sin una metodología clara suele derivar en sobrecostos, caídas del servicio y frustración.",
        paragraphs: [
          "El Ciclo de Vida del Desarrollo de Software (SDLC, por sus siglas en inglés) es el marco metodológico que asegura que un proyecto web cumpla con sus metas comerciales, funcione con rapidez y sea seguro desde el primer minuto.",
          "En lugar de saltar a elegir plantillas al azar, estructurar un proyecto web profesional demanda una secuencia coordinada de etapas donde cada decisión técnica responde a una necesidad del negocio.",
        ],
      },
      {
        title: "De la Idea a la Planificación Estratégica",
        paragraphs: [
          "Todo proyecto comienza con la definición clara de su propósito: ¿se trata de un sitio informativo de alta conversión, una vitrina con cotización vía WhatsApp, o una plataforma con pagos en línea? Determinar este alcance define la arquitectura tecnológica apropiada.",
          "Posteriormente, en el análisis de requerimientos se valida la viabilidad técnica, se proyecta el presupuesto y se traza un cronograma formal de entregas para mitigar cualquier riesgo de desvío.",
        ],
      },
      {
        title: "Arquitectura Visual, UI/UX y Código Escalable",
        paragraphs: [
          "El diseño visual no es solo estética: es psicología de usuario. La maquetación en wireframes interactivos permite validar la navegación antes de escribir una sola línea de código, garantizando que el usuario encuentre lo que busca sin fricción.",
          "Durante la fase de codificación, se implementan estándares modernos (HTML semántico, TypeScript, estilos responsivos y optimización de assets). Esto asegura que la página cargue en milisegundos en cualquier dispositivo y red móvil.",
        ],
        callout: {
          type: "takeaway",
          text: "Un buen diseño atrae miradas, pero un código limpio y una arquitectura sólida son los que convierten visitantes en clientes recurrentes.",
          authorOrSource: "Principio de Ingeniería NexaSoft",
        },
      },
      {
        title: "Pruebas de Calidad, Despliegue y Soporte Continuo",
        paragraphs: [
          "Antes de abrir las puertas al público, se ejecutan pruebas rigurosas de velocidad (Core Web Vitals), compatibilidad entre navegadores y validación de seguridad con certificados SSL.",
          "Una vez publicado en servidores de borde (Edge Networks), el trabajo no termina: el monitoreo continuo de disponibilidad y las copias de seguridad garantizan que tu negocio nunca cierre sus puertas digitales.",
        ],
      },
    ],
    image: SDLC,
    alt: "Diagrama del ciclo de vida del desarrollo de software (SDLC) en siete etapas estructuradas",
    route: "/blog/SDLC/",
  },
  {
    id: "STATIC-VS-WEBAPP",
    title: "Sitio Web Estático vs Aplicación Web: Cuándo tu Negocio Necesita Roles, Datos y Automatización",
    subtitle: "Descubre cómo la segmentación por roles de usuario y las funciones interactivas transforman un simple escaparate en un motor de operaciones.",
    description: "Analizamos las diferencias fundamentales entre una página web informativa y una plataforma web dinámica, demostrando por qué la gestión por roles es la ventaja competitiva clave de las empresas modernas.",
    category: "Arquitectura Web",
    readTime: "7 min de lectura",
    date: "Octubre 2026",
    author: {
      name: "Consultoría de Software NexaSoft",
      role: "Arquitectura de Soluciones Digitales",
    },
    sections: [
      {
        title: "La Metáfora Inicial: La Vitrina Comercial vs La Sucursal Inteligente",
        lead: "Imagina que tu presencia digital puede ser dos cosas: una vitrina iluminada en una avenida concurrida que exhibe tu catálogo, o una sucursal inteligente con puertas automáticas, empleados coordinados y atención personalizada para cada tipo de cliente.",
        paragraphs: [
          "A menudo existe confusión entre qué es un 'sitio web' y qué es una 'aplicación web' (Web App). Aunque ambos se abren desde el mismo navegador web y lucen similares a simple vista, su arquitectura interna, sus capacidades y su impacto en tu negocio pertenecen a dos dimensiones completamente diferentes.",
          "Comprender esta distinción te evitará gastar de más en tecnología que no necesitas, o quedarte corto con una web estática cuando tus operaciones diarias exigen automatización y control de accesos.",
        ],
      },
      {
        title: "¿Qué es un Sitio Web Estático y Cuándo es tu Mejor Opción?",
        paragraphs: [
          "Un sitio web estático entrega contenido pre-renderizado (archivos HTML, CSS e imágenes) que es idéntico para todos los visitantes. Su función primordial es informar, posicionar marca y captar el primer contacto.",
          "Es la opción ideal cuando requieres máxima velocidad de carga, costos de infraestructura mínimos y una vitrina impecable: landing pages de producto, páginas corporativas informativas, portafolios profesionales o blogs corporativos.",
        ],
        bulletPoints: [
          "Velocidad relámpago con entrega directa desde redes de borde (CDN).",
          "Mantenimiento técnico mínimo y prácticamente inmune a vulnerabilidades de bases de datos.",
          "Inversión inicial accesible y bajo costo mensual de operación.",
          "Perfecto para posicionamiento SEO y campañas de tráfico publicitario.",
        ],
      },
      {
        title: "El Salto a la Aplicación Web: El Poder de los Datos en Tiempo Real",
        paragraphs: [
          "Una aplicación web no es un folleto: es un software completo que vive en la nube. Procesa datos en tiempo real, guarda estados en bases de datos relacionales, ejecuta reglas de negocio personalizadas y responde dinámicamente a las acciones de cada usuario.",
          "Cuando tu negocio requiere que los usuarios inicien sesión, consulten información propia, realicen transacciones, descarguen reportes o interactúen con flujos de trabajo internos, estás en el territorio de una aplicación web.",
        ],
        callout: {
          type: "quote",
          text: "Un sitio web informa a tu cliente; una aplicación web opera con él y automatiza el trabajo de tu equipo.",
          authorOrSource: "Enfoque de Producto Digital",
        },
      },
      {
        title: "La Gran Ventaja Competitiva: Servicios y Funciones por Roles de Usuario",
        paragraphs: [
          "El verdadero superpoder de una aplicación web radica en la segmentación por roles (Role-Based Access Control - RBAC). Esto significa que la misma plataforma ofrece interfaces, permisos y funciones totalmente personalizadas según quién inicie sesión:",
        ],
        bulletPoints: [
          "Rol Cliente / Usuario Final: Dispone de un portal privado de autoservicio. Puede consultar el estado de sus pedidos en tiempo real, revisar su historial de compras, descargar facturas o certificados, actualizar sus datos personales y solicitar soporte técnico prioritario.",
          "Rol Asesor / Operativo: Accede a una bandeja de entrada centralizada donde atiende solicitudes de clientes, actualiza el estado de pedidos (de 'En preparación' a 'Despachado'), gestiona el inventario de bodega y asigna tareas a su equipo sin duplicar esfuerzos.",
          "Rol Administrador / Gerencial: Visualiza paneles de analítica financiera en tiempo real, controla el flujo de caja, monitorea el rendimiento de cada asesor, gestiona permisos de acceso a datos sensibles y exporta informes ejecutivos en segundos.",
        ],
      },
      {
        title: "Tabla Comparativa de Decisión Estratégica",
        paragraphs: [
          "Usa esta guía rápida para evaluar qué solución se adapta con precisión al momento actual de tu organización:",
        ],
        comparisonTable: {
          headers: ["Criterio", "Sitio Web Estático", "Aplicación Web (Web App)"],
          rows: [
            ["Objetivo Principal", "Informar, exhibir y generar prospectos", "Operar, gestionar y procesar en tiempo real"],
            ["Personalización por Rol", "No (Mismo contenido para todos)", "Sí (Paneles exclusivos para clientes, asesores y directivos)"],
            ["Interacción y Base de Datos", "Formularios de contacto básicos", "Lectura y escritura en bases de datos en tiempo real"],
            ["Velocidad de Carga", "Ultrarrápida (milisegundos)", "Excelente con arquitecturas modernas (SSR/SSG)"],
            ["Complejidad de Mantenimiento", "Baja", "Media-Alta (demanda soporte formal de ingeniería)"],
            ["Impacto en Productividad", "Visibilidad y presencia de marca", "Automatización masiva de horas operativas"],
          ],
        },
      },
      {
        title: "Cómo Tomar la Decisión Correcta con NexaSoft SAS",
        paragraphs: [
          "En NexaSoft SAS no creemos en soluciones genéricas. Si tu negocio necesita posicionar su marca y generar cotizaciones rápidas, diseñamos sitios estáticos de ultra-rendimiento. Si tus procesos crecen y necesitas que tus clientes se auto-gestionen mientras tu equipo opera desde un panel centralizado, construimos tu aplicativo web a medida.",
          "Sea cual sea la etapa en la que se encuentre tu empresa, estructuramos tu proyecto con contratos claros, cronogramas definidos y respaldo formal de ingeniería de software.",
        ],
      },
    ],
    image: StaticVsWebAppImg,
    alt: "Comparativa visual entre un sitio web estático y una aplicación web interactiva con roles de usuario",
    route: "/blog/STATIC-VS-WEBAPP/",
  },
  {
    id: "AI-EVOLUTION",
    title: "De Prompts a Agentes: La Evolución de la Relación Profesional con la Inteligencia Artificial",
    subtitle: "Cómo pasamos de escribir instrucciones manuales a coordinar enjambres de agentes autónomos y orquestadores.",
    description: "Exploramos la transformación radical de la IA en los entornos de trabajo: desde el prompt engineering básico hasta sistemas autónomos que colaboran para resolver tareas complejas de ingeniería.",
    category: "Inteligencia Artificial",
    readTime: "6 min de lectura",
    date: "Septiembre 2026",
    author: {
      name: "Laboratorio de IA NexaSoft",
      role: "Investigación y Desarrollo",
    },
    sections: [
      {
        title: "La Revolución Silenciosa del Trabajo con Inteligencia Artificial",
        lead: "En solo un par de años, la forma en que los profesionales interactúan con los modelos de lenguaje ha cambiado de manera más drástica que cualquier otra herramienta de software en la historia.",
        paragraphs: [
          "Durante los primeros meses del auge de la IA generativa, la habilidad más cotizada era el 'Prompt Engineering': aprender a formular preguntas precisas, añadir contexto y ajustar el tono para que el modelo devolviera una respuesta coherente.",
          "Sin embargo, el prompt tradicional tenía un límite insalvable: seguía siendo un proceso completamente manual, secuencial y demandante de la atención continua de una persona frente a la pantalla.",
        ],
      },
      {
        title: "La Integración de Conocimiento Privado: La Era del RAG",
        paragraphs: [
          "El siguiente paso natural fue conectar los modelos de IA con el conocimiento real de las empresas mediante RAG (Retrieval-Augmented Generation).",
          "En lugar de depender exclusivamente de lo que el modelo aprendió en su entrenamiento, la IA adquirió la capacidad de consultar manuales internos, contratos, catálogos de inventario y políticas corporativas antes de responder, reduciendo drásticamente las alucinaciones.",
        ],
        callout: {
          type: "highlight",
          text: "RAG convirtió a la IA de una enciclopedia generalista en un asistente corporativo capaz de responder con base en los datos confidenciales de la propia empresa.",
        },
      },
      {
        title: "El Salto a los Agentes Autónomos: De Conversar a Ejecutar",
        paragraphs: [
          "El verdadero punto de inflexión ocurrió con los Agentes Autónomos. Un agente es una IA a la que ya no solo se le pide que 'escriba algo', sino que se le asigna un objetivo, acceso a herramientas (terminal de comandos, navegadores, APIs, bases de datos) y la capacidad de evaluar sus propios resultados.",
          "El agente genera un plan, ejecuta la primera acción, analiza la respuesta del entorno y corrige su rumbo de forma autónoma hasta completar el objetivo propuesto.",
        ],
      },
      {
        title: "Orquestación y Enjambres: El Futuro del Desarrollo de Software",
        paragraphs: [
          "Hoy, el estado del arte de la ingeniería de software consiste en sistemas orquestadores de agentes (Multi-Agent Swarms). Un agente supervisor descompone una meta empresarial de gran envergadura en subtareas y las delega a agentes especializados:",
        ],
        bulletPoints: [
          "Un agente arquitecto que diseña los diagramas y estructuras de datos.",
          "Un agente programador que escribe el código siguiendo estándares rigurosos.",
          "Un agente de control de calidad (QA) que ejecuta pruebas automáticas y detecta errores.",
          "Un agente redactor que documenta la entrega y prepara las guías de usuario.",
        ],
        callout: {
          type: "takeaway",
          text: "En el nuevo entorno tecnológico, el profesional ya no es un redactor de prompts: es un director de orquesta que coordina sistemas inteligentes de alta precisión.",
          authorOrSource: "NexaSoft AI Lab",
        },
      },
    ],
    image: AIEvolutionImg,
    alt: "Infografía editorial ilustrando las etapas de la IA: de prompts a agentes autónomos y enjambres orquestados",
    route: "/blog/AI-EVOLUTION/",
  },
  {
    id: "NO-CODE-VS-EXPERT",
    title: "Sitios con Herramientas No-Code: ¿Cuándo es Suficiente y Cuándo Necesitas un Experto?",
    subtitle: "Analizamos el alcance de las plataformas visuales y por qué la asesoría experta es vital para escalar.",
    description: "Evaluamos con objetividad las ventajas de las herramientas visuales no-code frente a los beneficios de una arquitectura de software a medida con integraciones y automatizaciones.",
    category: "Estrategia Digital",
    readTime: "5 min de lectura",
    date: "Septiembre 2026",
    author: {
      name: "Consultoría Estratégica NexaSoft",
      role: "Especialistas en Integración Web",
    },
    sections: [
      {
        title: "La Democratización de la Web: El Auge del No-Code",
        lead: "Plataformas como Wix, Framer o Webflow han permitido que miles de emprendedores tengan una presencia digital en cuestión de horas sin tocar código.",
        paragraphs: [
          "Para un negocio en fase de validación que necesita comprobar si su idea tiene tracción en el mercado, un sitio no-code básico es una herramienta extraordinaria: minimiza los tiempos de lanzamiento y permite iterar rápido.",
          "Sin embargo, el éxito comercial suele traer consigo un nuevo conjunto de desafíos que las plantillas visuales no están preparadas para resolver por sí solas.",
        ],
      },
      {
        title: "El Techo de Cristal: Cuándo el No-Code Comienza a Frenarte",
        paragraphs: [
          "Conforme las ventas aumentan, surgen las limitaciones típicas: suscripciones mensuales que se acumulan por cada plugin adicional, velocidad de carga que disminuye por código sobrante generado automáticamente, y severas restricciones para personalizar la experiencia móvil.",
          "Además, el posicionamiento en Google (SEO técnico) en plataformas cerradas suele ser limitado en comparación con arquitecturas modernas estáticas o de renderizado híbrido.",
        ],
        callout: {
          type: "quote",
          text: "El No-Code es fantástico para validar una idea en su primer mes; la ingeniería de software es indispensable para sostener un negocio que factura todos los días.",
          authorOrSource: "Estrategia de Crecimiento Digital",
        },
      },
      {
        title: "El Desafío Crítico: Integraciones, DNS y Automatización",
        paragraphs: [
          "El verdadero valor de una solución tecnológica no está en cómo se ve, sino en cómo se conecta con el resto de tu empresa. Es en esta fase donde la consultoría de un experto marca la diferencia entre el caos manual y la eficiencia operativa:",
        ],
        bulletPoints: [
          "Configuración blindada de dominios propios y registros DNS (A, CNAME, SPF, DKIM) para que tus correos corporativos nunca caigan en spam.",
          "Conexión nativa con pasarelas de pago seguras en Colombia (PSE, Wompi, Bold, ePayco) sin comisiones ocultas de terceros.",
          "Automatización de flujos de trabajo (cuando un cliente contacta, se crea en el CRM, se genera una factura y se notifica al equipo de ventas por WhatsApp).",
        ],
      },
      {
        title: "NexaSoft SAS: Tu Socio de Ingeniería y Crecimiento",
        paragraphs: [
          "No tienes que convertirte en programador ni lidiar con configuraciones técnicas complejas. En NexaSoft SAS te asesoramos para elegir la mejor ruta: optimizar tu sitio actual, conectar tus plataformas o construir una solución a medida respaldada por contrato y soporte continuo.",
        ],
      },
    ],
    image: NoCodeExpertImg,
    alt: "Comparativa ilustrada entre herramientas visuales no-code y desarrollo de software con integraciones avanzadas",
    route: "/blog/NO-CODE-VS-EXPERT/",
  },
];
