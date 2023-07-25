import { component$ } from "@builder.io/qwik";
import "./404.module.css";

export default component$(() => {
  return (
    <div class="Container404">
      <p>
        <strong>404</strong> <span>dirección no encontrada.</span>
      </p>

      <div>
        <strong>Rutas Disponibles</strong>

        <a href="/">/</a>
      </div>
    </div>
  );
});
