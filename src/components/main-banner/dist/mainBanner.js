"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
// import { isServer, isBrowser } from "@builder.io/qwik/build";
var mainBanner_css_inline_1 = require("./mainBanner.css?inline");
var mui_1 = require("~/integrations/react/mui");
exports["default"] = qwik_1.component$(function () {
    qwik_1.useStylesScoped$(mainBanner_css_inline_1["default"]);
    // const store = useStore({ count: 0 });
    // useClientEffect$(() => {
    //   // Only runs in the client
    //   const timer = setInterval(() => {
    //     maxSteps > store.count ? store.count++ : (store.count = 0);
    //   }, changeTime);
    //   return () => {
    //     clearInterval(timer);
    //   };
    // });
    //, left: `-${store.count}00vw`
    return (React.createElement("mainbanner", null,
        React.createElement(mui_1.BannerImgStepper, null)));
});
