"use strict";
exports.__esModule = true;
/** @jsxImportSource react */
var react_1 = require("react");
var react_swipeable_views_1 = require("react-swipeable-views");
var react_swipeable_views_utils_1 = require("react-swipeable-views-utils");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
// import { useTheme } from "@mui/material/styles";
var theme_1 = require("./theme");
// import { component$ } from "@builder.io/qwik";
// import { useStore, useBrowserVisibleTask$ } from "@builder.io/qwik";
var Soluciones_de_software_personalizadas_png_1 = require("../../assets/img/banners/Soluciones de software personalizadas.png");
var Crecimiento_y_eficiencia_de_negocios_digitales_png_1 = require("../../assets/img/banners/Crecimiento y eficiencia de negocios digitales.png");
var Modernizar_y_optimizar_tus_plataformas_png_1 = require("../../assets/img/banners/Modernizar y optimizar tus plataformas.png");
var Soluciones_empresariales_de_software_png_1 = require("../../assets/img/banners/Soluciones empresariales de software.png");
var CustomSwipeableViews = react_swipeable_views_utils_1.bindKeyboard(react_swipeable_views_1["default"]);
var bannerImg = [
    {
        id: 0,
        img: Soluciones_de_software_personalizadas_png_1["default"],
        description: "Soluciones de software personalizadas."
    },
    {
        id: 1,
        img: Crecimiento_y_eficiencia_de_negocios_digitales_png_1["default"],
        description: "Crecimiento y eficiencia de negocios digitales."
    },
    {
        id: 2,
        img: Modernizar_y_optimizar_tus_plataformas_png_1["default"],
        description: "Modernizar y optimizar tus plataformas."
    },
    {
        id: 3,
        img: Soluciones_empresariales_de_software_png_1["default"],
        description: "Soluciones empresariales de software."
    },
];
var BannerStepper = function () {
    // export default component$(() => {
    var maxSteps = 3; // imagenes.length
    var changeTime = 5000; // 10000
    // const theme = useTheme();
    var _a = react_1.useState({ count: 0 }), store = _a[0], setStore = _a[1];
    // const store = useStore({ count: 0 });
    react_1.useEffect(function () {
        // useBrowserVisibleTask$(() => {
        var timer = setInterval(function () {
            maxSteps > store.count
                ? setStore({ count: store.count++ })
                : setStore({ count: 0 });
            //   store.count++
            // : (store.count = 0);
        }, changeTime);
        return function () {
            clearInterval(timer);
        };
    });
    return (React.createElement(material_1.Box, { sx: { width: "100%", flexGrow: 1 } },
        React.createElement(material_1.Box, { className: "flex flex-row", sx: {
                width: "100%",
                flexGrow: 1,
                position: "relative",
                minHeight: "16rem"
            } },
            React.createElement(CustomSwipeableViews, { axis: theme_1["default"].direction === "rtl" ? "x-reverse" : "x", index: store.count, onChangeIndex: function (step) {
                    console.log("step", step);
                    setStore({ count: step });
                    // store.count = step;
                }, enableMouseEvents: true }, !!bannerImg &&
                bannerImg.map(function (element) {
                    var img = element.img, description = element.description, id = element.id;
                    return (React.createElement(material_1.Box, { key: id, className: "" }, id === store.count && (React.createElement("img", { className: "slider", src: img, alt: description }))));
                }))),
        store.count,
        React.createElement(material_1.MobileStepper
        // variant=
        , { 
            // variant=
            sx: {
                position: "relative",
                bottom: "-25px",
                zIndex: 1000,
                background: "transparent",
                height: "0px",
                padding: 0,
                display: "flex",
                justifyContent: "center",
                flexDirection: "row"
            }, className: "pb-4 mb-4", steps: maxSteps, 
            // position="static"
            activeStep: store.count, nextButton: React.createElement(material_1.Button, { size: "large", onClick: function () { return setStore({ count: store.count++ }); }, className: "arrow-next", disabled: store.count === maxSteps - 1 }, theme_1["default"].direction === "rtl" ? (React.createElement(icons_material_1.KeyboardArrowLeft, { fontSize: "large" })) : (React.createElement(icons_material_1.KeyboardArrowRight, { fontSize: "large" }))), backButton: React.createElement(material_1.Button, { size: "large", onClick: function () { return setStore({ count: store.count-- }); }, className: "arrow-back", disabled: store.count === 0 }, theme_1["default"].direction === "rtl" ? (React.createElement(icons_material_1.KeyboardArrowRight, { fontSize: "large" })) : (React.createElement(icons_material_1.KeyboardArrowLeft, { fontSize: "large" }))) })));
};
// );
exports["default"] = BannerStepper;
