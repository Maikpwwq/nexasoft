"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
var qwik_city_1 = require("@builder.io/qwik-city");
var router_head_1 = require("./components/router-head/router-head");
var global_css_inline_1 = require("./global.css?inline");
exports["default"] = qwik_1.component$(function () {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Dont remove the `<head>` and `<body>` elements.
     */
    qwik_1.useStyles$(global_css_inline_1["default"]);
    return (React.createElement(qwik_city_1.QwikCityProvider, null,
        React.createElement("head", null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("link", { rel: "manifest", href: "/manifest.json" }),
            React.createElement(router_head_1.RouterHead, null)),
        React.createElement("body", { lang: "en" },
            React.createElement(qwik_city_1.RouterOutlet, null),
            React.createElement(qwik_city_1.ServiceWorkerRegister, null))));
});
