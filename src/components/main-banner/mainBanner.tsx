import {
  component$,
  useStylesScoped$,
  useStore,
  // useTask$,
} from "@builder.io/qwik";
// import { isServer, isBrowser } from "@builder.io/qwik/build";
import { qwikify$ } from "@builder.io/qwik-react";
import styles from "./mainBanner.css?inline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { bindKeyboard } from "react-swipeable-views-utils";

// export const CustomSwipeableViews = component$(() => {
//   const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
//   return <BindKeyboardSwipeableViews />;
// });

// export const MUICustomSwipeableViews = qwikify$(CustomSwipeableViews);


// export const MUISwipeableViews = qwikify$(SwipeableViews);
export const MUIButton = qwikify$(Button);
export const MUIBox = qwikify$(Box);
// export const MUIMobileStepper = qwikify$(MobileStepper);
// export const MUIKeyboardArrowLeft = qwikify$(KeyboardArrowLeft);
// export const MUIKeyboardArrowRight = qwikify$(KeyboardArrowRight);

export default component$(() => {
  useStylesScoped$(styles);
  // const theme = { direction: "rtl" };
  // const maxSteps = 5; // imagenes.length
  // const activeStep = useStore({ count: 0 });

  return (
    <mainbanner>
      <div>
        Banner principal: Una imagen o video llamativo que presente los
        servicios y ventajas de la empresa.
      </div>
      <MUIBox sx={{ width: "100%", flexGrow: 1 }}>
        {/* <MUISwipeableViews
          // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={(step: number) => {
            activeStep.count = step;
          }}
          enableMouseEvents
          // slideRenderer={slideRenderer}
        > */}
          {/* TODO: CREAR PIEZAS VISUALES PARA EL BANNER */}
          <div>
            1 Servicios: El banner podría mostrar imágenes o iconos que
            representen los servicios que ofrece NexaSoft, como el mantenimiento
            y modernización de plataformas digitales.
          </div>
          <div>
            2 Ventajas: El banner podría destacar las ventajas de trabajar con
            NexaSoft, como la mejora del rendimiento de las plataformas, la
            reducción de costos y el aumento de la eficiencia.
          </div>
          <div>
            3 Innovación: El banner podría mostrar imágenes o iconos que
            representen la tecnología y la innovación, para reflejar el enfoque
            de NexaSoft en soluciones de software de vanguardia.
          </div>
          <div>
            4 Futuro: El banner podría mostrar un mensaje o una imagen que
            sugiera el futuro, para reflejar la idea de que NexaSoft ayuda a las
            empresas a prepararse para el futuro con sus soluciones de software.
          </div>
          <div>
            5 Mensaje atractivo: El banner podría incluir un mensaje atractivo y
            conciso que invite a los visitantes a conocer más sobre los
            servicios de NexaSoft.
          </div>
        {/* </MUISwipeableViews> */}
        {/* <MUIMobileStepper
          // variant=
          class={{
            stepper: true, // pb-4 mb-4
          }}
          // steps={maxSteps}
          // position="static"
          activeStep={activeStep}
          nextButton={
            <MUIButton
              size="lg"
              onClick$={() => activeStep.count++}
              class="arrow-next"
              disabled={activeStep.count === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <MUIKeyboardArrowLeft fontSize="large" />
              ) : (
                <MUIKeyboardArrowRight fontSize="large" />
              )}
            </MUIButton>
          }
          backButton={
            <MUIButton
              size="lg"
              onClick$={() => activeStep.count--}
              class="arrow-back"
              disabled={activeStep.count === 0}
            >
              {theme.direction === "rtl" ? (
                <MUIKeyboardArrowRight fontSize="large" />
              ) : (
                <MUIKeyboardArrowLeft fontSize="large" />
              )}
            </MUIButton>
          }
        /> */}
      </MUIBox>
    </mainbanner>
  );
});
