/** @jsxImportSource react */
import { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import { Box, Button, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
// import { useTheme } from "@mui/material/styles";
import theme from "./theme";

// import { component$ } from "@builder.io/qwik";
// import { useStore, useBrowserVisibleTask$ } from "@builder.io/qwik";

import SoftwarePersonalizado from "../../assets/img/banners/Soluciones de software personalizadas.png";
import Negociosdigitales from "../../assets/img/banners/Crecimiento y eficiencia de negocios digitales.png";
import ModernizarPlataformas from "../../assets/img/banners/Modernizar y optimizar tus plataformas.png";
import SolucionesSoftware from "../../assets/img/banners/Soluciones empresariales de software.png";

const CustomSwipeableViews = bindKeyboard(SwipeableViews);

const bannerImg = [
  {
    id: 0,
    img: SoftwarePersonalizado,
    description: "Soluciones de software personalizadas.",
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
    img: SolucionesSoftware,
    description: "Soluciones empresariales de software.",
  },
];

const BannerStepper = () => {
  // export default component$(() => {
  const maxSteps = 3; // imagenes.length
  const changeTime = 5000; // 10000
  // const theme = useTheme();

  const [store, setStore] = useState({ count: 0 });

  // const store = useStore({ count: 0 });

  useEffect(() => {
    // useBrowserVisibleTask$(() => {
    const timer = setInterval(() => {
      maxSteps > store.count
        ? setStore({ count: store.count++ })
        : setStore({ count: 0 });
      //   store.count++
      // : (store.count = 0);
    }, changeTime);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <Box
        className="flex flex-row"
        sx={{
          width: "100%",
          flexGrow: 1,
          position: "relative",
          minHeight: "16rem",
        }}
      >
        <CustomSwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={store.count}
          onChangeIndex={(step: number) => {
            console.log("step", step);
            setStore({ count: step });
            // store.count = step;
          }}
          enableMouseEvents
          // slideRenderer={slideRenderer}
        >
          {/* TODO: CREAR PIEZAS VISUALES PARA EL BANNER */}

          {!!bannerImg &&
            bannerImg.map((element) => {
              const { img, description, id } = element;
              return (
                <Box key={id} className="">
                  {id === store.count && (
                    <img className="slider" src={img} alt={description} />
                  )}
                </Box>
              );
            })}
        </CustomSwipeableViews>
      </Box>
      {store.count}
      <MobileStepper
        // variant=
        sx={{
          position: "relative",
          bottom: "-25px",
          zIndex: 1000,
          background: "transparent",
          height: "0px",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
        className="pb-4 mb-4"
        steps={maxSteps}
        // position="static"
        activeStep={store.count}
        nextButton={
          <Button
            size="large"
            onClick={
              () => setStore({ count: store.count++ })
              // (store.count = 0)
            }
            className="arrow-next"
            disabled={store.count === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft fontSize="large" />
            ) : (
              <KeyboardArrowRight fontSize="large" />
            )}
          </Button>
        }
        backButton={
          <Button
            size="large"
            onClick={
              () => setStore({ count: store.count-- })
              // store.count--
            }
            className="arrow-back"
            disabled={store.count === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight fontSize="large" />
            ) : (
              <KeyboardArrowLeft fontSize="large" />
            )}
          </Button>
        }
      />
    </Box>
  );
};
// );

export default BannerStepper;
