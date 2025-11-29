import { component$ } from "@builder.io/qwik";
import styles from "./questions.module.css";

export default component$(() => {
  const questionsInfo = [
    {
      id: 1,
      pregunta: "¿Por qué tener una página web?",
      respuesta:
        "Tener una página web es esencial para alcanzar a una audiencia global, establecer credibilidad, y promover tus productos o servicios las 24 horas, los 7 días de la semana. Es tu ventana al mundo digital.",
    },
    {
      id: 2,
      pregunta: "¿Qué información necesito para arrancar a montar un sitio web?",
      respuesta:
        "Para comenzar, necesitamos conocer tu negocio, objetivos y preferencias de diseño. Luego, cualquier contenido relevante, como texto, imágenes y logotipos, será de gran ayuda.",
    },
    {
      id: 3,
      pregunta: "¿Cuáles pasos se siguen para crear una página web?",
      respuesta:
        "Nuestro proceso implica la planificación, diseño, desarrollo, pruebas y lanzamiento. Te guiaremos en cada paso, asegurando una experiencia fluida.",
    },
    {
      id: 4,
      pregunta: "¿Qué es un hosting y dominio?",
      respuesta:
        "El hosting es donde se almacena tu sitio web, mientras que el dominio es tu dirección en línea (ejemplo: www.tudominio.com).",
    },
    {
      id: 5,
      pregunta: "¿Mi paquete incluye hosting y dominio?",
      respuesta:
        "Sí, ofrecemos paquetes que incluyen hosting y dominio para simplificar tu experiencia de creación de sitios web.",
    },
    {
      id: 6,
      pregunta: "¿Qué es un certificado SSL?",
      respuesta:
        "Un certificado SSL garantiza la seguridad de tu sitio web al cifrar la información entre el servidor y el navegador del usuario, es fundamental para la confianza en línea.",
    },
    {
      id: 7,
      pregunta: "¿Cómo puedo actualizar mi sitio web?",
      respuesta:
        "Puedes actualizar tu sitio web a través de nuestros servicios de mantenimiento y administración de contenidos, o proporcionarte las herramientas para hacerlo tú mismo.",
    },
    {
      id: 8,
      pregunta: "¿Cuánto tiempo dura el desarrollo de un sitio web?",
      respuesta:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Desde unas semanas para sitios básicos hasta meses para proyectos personalizados.",
    },
    {
      id: 9,
      pregunta:
        "¿Cuál es la diferencia entre usar plantillas de WordPress o Wix, versus el diseño web de código a medida?",
      respuesta:
        "Las plantillas son rápidas, pero limitadas en personalización. El diseño a medida ofrece una experiencia única, adaptada a tus necesidades específicas.",
    },
    {
      id: 10,
      pregunta: "¿Qué es SEO?",
      respuesta:
        "El SEO (Search Engine Optimization) es el proceso de optimizar tu sitio web para que aparezca en los primeros resultados de búsqueda en Google y otros motores de búsqueda.",
    },
    {
      id: 11,
      pregunta: "¿Cómo posicionar una web en buscadores?",
      respuesta:
        "Posicionar una web requiere estrategias de SEO, como la optimización de palabras clave, la creación de contenido de calidad y la optimización técnica del sitio.",
    },
    {
      id: 12,
      pregunta: "¿Puedo recibir pagos en línea?",
      respuesta:
        "Sí, podemos integrar pasarelas de pago seguras en tu sitio web para que puedas recibir pagos en línea de manera efectiva y segura.",
    },
  ];

  return (
    <div id="questions-section" class={[styles.questions, "relative"]}>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class={[styles.questionsContainer, "container"]}>
        <h3 class={styles.title} style={{ color: "white", textAlign: "center", fontSize: "3rem", fontWeight: "bold", marginBottom: "2rem" }}>
          ¡Aclara tus Dudas sobre el{" "}
          <span class="highlight">Éxito Digital</span> de la mano de{" "}
          <span class="highlight">NexaSoft SAS!</span>
        </h3>

        <div class="flex flex-col gap-4 max-w-4xl mx-auto">
          {questionsInfo.map((item) => (
            <details
              key={item.id}
              class="group bg-white text-black rounded-lg overflow-hidden border-b border-gray-200"
            >
              <summary class="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <h4 class="text-xl font-semibold group-open:text-[#4285F4] transition-colors">
                  {item.pregunta}
                </h4>
                <span class="transition-transform group-open:rotate-180 text-[#4285F4]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div class="px-6 pt-2 pb-6 text-gray-600 text-base font-light leading-relaxed">
                {item.respuesta}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
});
