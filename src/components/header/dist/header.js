"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
var header_css_inline_1 = require("./header.css?inline");
exports["default"] = qwik_1.component$(function () {
    qwik_1.useStylesScoped$(header_css_inline_1["default"]);
    var NexaSoftLogo = "NexaSoft SAS";
    return (React.createElement("header", null,
        React.createElement("div", { "class": "logo" },
            React.createElement("a", { href: "/", title: "qwik" },
                NexaSoftLogo,
                " ",
                React.createElement("span", { "class": "lightning" }, "\u26A1\uFE0F"))),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#features-section" }, "Servicios")),
            React.createElement("li", null,
                React.createElement("a", { href: "#testimonials-section" }, "Casos de \u00E9xito")),
            React.createElement("li", null,
                React.createElement("a", { href: "#contact-section" }, "Contacto")))));
});
