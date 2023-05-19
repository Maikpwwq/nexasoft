"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RouterHead = void 0;
var qwik_1 = require("@builder.io/qwik");
var qwik_city_1 = require("@builder.io/qwik-city");
/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
exports.RouterHead = qwik_1.component$(function () {
    var head = qwik_city_1.useDocumentHead();
    var title = "NexaSoft SAS";
    var loc = qwik_city_1.useLocation(); // isNavigating, url, params
    console.log('useLocation', loc);
    return (React.createElement(React.Fragment, null,
        React.createElement("title", null, title),
        React.createElement("link", { rel: "canonical" }),
        " ",
        React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        React.createElement("link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }),
        React.createElement("meta", { "http-equiv": "Content-Security-Policy", content: "default-src 'self';script-src 'unsafe-inline' 'unsafe-eval' http:; style-src 'unsafe-inline' http:; img-src http: data:; font-src http: data:;" }),
        head.meta.map(function (m, k) { return (React.createElement("meta", __assign({ key: k }, m))); }),
        head.links.map(function (l, k) { return (React.createElement("link", __assign({ key: k }, l))); }),
        React.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" }),
        head.styles.map(function (s, k) { return (React.createElement("style", __assign({ key: k }, s.props, { dangerouslySetInnerHTML: s.style }))); }),
        React.createElement("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-2PNKE0S3GJ" })));
});
