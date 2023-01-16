import {
  component$,
  useStylesScoped$,
  useStore,
  useClientEffect$,
  // useTask$,
} from "@builder.io/qwik";
// import { isServer, isBrowser } from "@builder.io/qwik/build";
import { qwikify$ } from "@builder.io/qwik-react";
import styles from "./mainBanner.css?inline";

import SolucionesSoftware from "../../assets/img/Soluciones empresariales de software.png";
import Negociosdigitales from "../../assets/img/Crecimiento y eficiencia de negocios digitales.png";
import ModernizarPlataformas from "../../assets/img/Modernizar y optimizar tus plataformas.png";
import SoftwarePersonalizado from "../../assets/img/Soluciones de software personalizadas.png";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { bindKeyboard } from "react-swipeable-views-utils";
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import ChargingStationIcon from '@mui/icons-material/ChargingStation';
// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
// import BoltIcon from '@mui/icons-material/Bolt';
// import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
// import TabIcon from '@mui/icons-material/Tab';

// import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
// import AddBoxIcon from '@mui/icons-material/AddBox';

// export const CustomSwipeableViews = component$(() => {
//   const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
//   return <BindKeyboardSwipeableViews />;
// });

// export const MUICustomSwipeableViews = qwikify$(CustomSwipeableViews);

// export const MUISwipeableViews = qwikify$(SwipeableViews);
export const MUIBox = qwikify$(Box);
export const MUIButton = qwikify$(Button);

// export const MUIMobileStepper = qwikify$(MobileStepper);
// export const MUIKeyboardArrowLeft = qwikify$(KeyboardArrowLeft);
// export const MUIKeyboardArrowRight = qwikify$(KeyboardArrowRight);

export default component$(() => {
  useStylesScoped$(styles);
  // const theme = { direction: "rtl" };
  const maxSteps = 3; // imagenes.length
  const store = useStore({ count: 0 });

  const bannerImg = [
    {
      img: SolucionesSoftware,
      description: "Soluciones empresariales de software.",
    },
    {
      img: Negociosdigitales,
      description: "Crecimiento y eficiencia de negocios digitales.",
    },
    {
      img: ModernizarPlataformas,
      description: "Modernizar y optimizar tus plataformas.",
    },
    {
      img: SoftwarePersonalizado,
      description: "Soluciones de software personalizadas.",
    },
  ];

  useClientEffect$(() => {
    // Only runs in the client
    const timer = setInterval(() => {
      maxSteps>store.count? store.count++ : store.count = 0;
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  });

  //, left: `-${store.count}00vw` 
  return (
    <mainbanner>
      <MUIBox sx={{ width: "100%", flexGrow: 1 }}>
        <MUIBox className="flex flex-row" sx={{ width: "100%", flexGrow: 1, position: "relative"}}>
          {!!bannerImg &&
            bannerImg.map(({ img, description }) => {
              return (
                <>
                  <img className="slider" src={img} alt={description} />
                  {store.count}
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
