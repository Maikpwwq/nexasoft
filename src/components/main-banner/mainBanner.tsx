import {
  component$,
  useStylesScoped$,
  useStore,
  useClientEffect$,
  // useTask$,
} from "@builder.io/qwik";
// import { isServer, isBrowser } from "@builder.io/qwik/build";
import styles from "./mainBanner.css?inline";

import SolucionesSoftware from "../../assets/img/banners/Soluciones empresariales de software.png";
import Negociosdigitales from "../../assets/img/banners/Crecimiento y eficiencia de negocios digitales.png";
import ModernizarPlataformas from "../../assets/img/banners/Modernizar y optimizar tus plataformas.png";
import SoftwarePersonalizado from "../../assets/img/banners/Soluciones de software personalizadas.png";

import {
  MUIBox,
  //MUIButton
} from "~/integrations/react/mui";

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
// export const MUIMobileStepper = qwikify$(MobileStepper);
// export const MUIKeyboardArrowLeft = qwikify$(KeyboardArrowLeft);
// export const MUIKeyboardArrowRight = qwikify$(KeyboardArrowRight);

export default component$(() => {
  useStylesScoped$(styles);
  // const theme = { direction: "rtl" };
  const maxSteps = 3; // imagenes.length
  const changeTime = 10000;
  const store = useStore({ count: 0 });

  const bannerImg = [
    {
      id: 0,
      img: SolucionesSoftware,
      description: "Soluciones empresariales de software.",
    },
    {
      id: 1,
      img: Negociosdigitales,
      description: "Crecimiento y eficiencia de negocios digitales.",
    },
    {
      id: 2,
      img: ModernizarPlataformas,
      description: "Modernizar y optimizar tus plataformas.",
    },
    {
      id: 3,
      img: SoftwarePersonalizado,
      description: "Soluciones de software personalizadas.",
    },
  ];

  useClientEffect$(() => {
    // Only runs in the client
    const timer = setInterval(() => {
      maxSteps > store.count ? store.count++ : (store.count = 0);
    }, changeTime);
    return () => {
      clearInterval(timer);
    };
  });

  //, left: `-${store.count}00vw`
  return (
    <mainbanner>
      <MUIBox sx={{ width: "100%", flexGrow: 1 }}>
        <MUIBox
          className="flex flex-row"
          sx={{ width: "100%", flexGrow: 1, position: "relative" }}
        >
          {!!bannerImg &&
            bannerImg.map((element) => {
              const { img, description, id } = element;
              return (
                <>
                  {img && id == store.count && (
                    <img class="slider" src={img} alt={description} key={id} />
                  )}
                </>
              );
            })}
        </MUIBox>
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

        {/* </MUISwipeableViews> */}
        {/* <MUIMobileStepper
          // variant=
          class={{
            stepper: true, // pb-4 mb-4
          }}
          // steps={maxSteps}
          // position="static"
          activeStep={store.count}
          nextButton={
            <MUIButton
              size="large"
              // onClick$={() => store.count++}
              className="arrow-next"
              disabled={store.count === maxSteps - 1}
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
              size="large"
              // onClick$={() => store.count--}
              className="arrow-back"
              disabled={store.count === 0}
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
