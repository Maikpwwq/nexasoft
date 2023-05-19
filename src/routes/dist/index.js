"use strict";
exports.__esModule = true;
exports.head = void 0;
var qwik_1 = require("@builder.io/qwik");
// import { Link } from "@builder.io/qwik-city";
var contact_1 = require("../components/contact/contact");
var footer_1 = require("../components/footer/footer");
var testimonials_1 = require("../components/testimonials/testimonials");
var features_1 = require("../components/features/features");
var mainBanner_1 = require("../components/main-banner/mainBanner");
exports["default"] = qwik_1.component$(function () {
    return (React.createElement("div", null,
        React.createElement(mainBanner_1["default"], null),
        React.createElement(features_1["default"], null),
        React.createElement(testimonials_1["default"], null),
        React.createElement(contact_1["default"], null),
        React.createElement(footer_1["default"], null)));
});
exports.head = {
    title: "Bienvenido a NexaSoft SAS",
    meta: [
        {
            name: "description",
            content: "NexaSoft SAS, el futuro en soluciones de software."
        },
    ]
};
