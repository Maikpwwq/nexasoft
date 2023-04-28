"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
var testimonials_css_inline_1 = require("./testimonials.css?inline");
var Comunidad_Dezzpo_jpg_1 = require("../../assets/img/logos/Comunidad-Dezzpo.jpg");
var WaviPixelLogo_png_1 = require("../../assets/img/logos/WaviPixelLogo.png");
var WaviPixelLogo_png_2 = require("../../assets/img/logos/WaviPixelLogo.png");
var mui_1 = require("~/integrations/react/mui");
exports["default"] = qwik_1.component$(function () {
    qwik_1.useStylesScoped$(testimonials_css_inline_1["default"]);
    var testimonials = [
        {
            message: "Trabajar con NexaSoft fue una experiencia increíble. Al modernizar la plataforma, hemos podido atender mejor a nuestros clientes y aumentar nuestras ventas.",
            name: "WaviAeronautics",
            logo: WaviPixelLogo_png_1["default"],
            webSite: "https://wavi-aeronautics.vercel.app/"
        },
        {
            message: "NexaSoft nos ayudó a mejorar la productividad de nuestros sistemas existentes, ahora confiamos en ellos el mantenimiento de nuestros sistemas, conociendo que estarán disponibles en todo momento y podremos cumplir con los plazos de entrega.",
            name: "Naga Regeneración de Aguas",
            logo: WaviPixelLogo_png_2["default"],
            webSite: "https://maikpwwq.github.io/"
        },
        {
            message: "NexaSoft ha superado nuestras expectativas con sus servicios de desarrollo de aplicaciones móviles. Hemos reducido costos operativos de manera significativa. Además, la aplicación es fácil de usar y ha sido muy bien recibida por nuestros usuarios finales.",
            name: "Comunidad Dezzpo",
            logo: Comunidad_Dezzpo_jpg_1["default"],
            webSite: "https://maikpwwq.github.io/"
        },
    ];
    return (React.createElement("testimonials", { id: "testimonials-section" },
        React.createElement("div", null,
            React.createElement(mui_1.MUITypography, { variant: "h6", align: "center", color: "var(--qwik-dark-blue)" }, "Testimonios y comentarios de clientes satisfechos."),
            React.createElement(mui_1.MUIBox, { "class": "flex items-center", sx: { flexDirection: { md: "row", sm: "row", xs: "column" } } }, testimonials.map(function (_a) {
                var message = _a.message, name = _a.name, logo = _a.logo, webSite = _a.webSite;
                return (React.createElement(mui_1.MUICard, { key: name, "class": "m-6 rounded hover:rounded-lg", sx: { maxWidth: 275, borderRadius: 4 }, elevation: 16 },
                    React.createElement(mui_1.MUICardMedia, null,
                        React.createElement("img", { src: logo, alt: name, height: "194" })),
                    React.createElement(mui_1.MUICardContent, null,
                        React.createElement(mui_1.MUITypography, { variant: "body2", color: "text.secondary" }, message),
                        React.createElement(mui_1.MUITypography, { variant: "body1", fontWeight: "bold" },
                            React.createElement("a", { href: webSite }, name),
                            " "))));
            })))));
});
