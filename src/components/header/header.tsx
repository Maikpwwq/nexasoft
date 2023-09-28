import { component$, $, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";
// import { NexaSoftLogo } from '../icons/qwik';

import {
  MUITypography,
  MUIMenuIcon,
} from "~/integrations/react/mui";

export default component$(() => {
  const NexaSoftLogo = "NexaSoft SAS";
  const state = useStore({
    visible: false
  });

  const handleClick = $(() => {
    console.log('handleClick', state.visible)
    state.visible = !state.visible
  })

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
      <MUIMenuIcon 
         onClick$={() => handleClick()}
         sx={{ display: { md: 'none', sm: 'block'}}} 
         className={styles.dropdownMobile}
         />
        <div class={styles.logo}>
          <Link href="/" title="NexaSoft SAS">
            {/* <NexaSoftLogo height={50} width={143} /> */}
            {NexaSoftLogo} <span class="lightning">⚡️</span> 
          </Link>
        </div>
        
        <ul> 
          <li>
            <Link href="/#products-section">Servicios</Link>
          </li>
          <li>
            <Link href="/#testimonials-section">Casos de éxito</Link>
          </li>
          {/* <li>
          <a
            href="/"
            target="_blank"
          >
            Nosotros
          </a>
        </li> */}
          <li>
            <Link href="/#contact-section">Contacto</Link>
          </li>
          {/* <li>
          <a
            href="/"
            target="_blank"
          >
            Blog
          </a>
        </li> */}
          {/* <li>
          <a
            href="/"
            target="_blank"
          >
            Recursos
          </a>
        </li> */}
        </ul>
        {/* { state.visible &&     }   */}
        <div class={styles.mobileMenu}>
          <ul > 
            <li>
              <Link href="/#products-section">Servicios</Link>
            </li>
            <li>
              <Link href="/#testimonials-section">Casos de éxito</Link>
            </li>
            <li>
              <Link href="/#contact-section">Contacto</Link>
            </li>
          </ul>
        </div>       
      </div>
    </header>
  );
});
