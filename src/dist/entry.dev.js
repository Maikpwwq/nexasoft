"use strict";
exports.__esModule = true;
/*
 * WHAT IS THIS FILE?
 *
 * Development entry point using only client-side modules:
 * - Do not use this mode in production!
 * - No SSR
 * - No portion of the application is pre-rendered on the server.
 * - All of the application is running eagerly in the browser.
 * - More code is transferred to the browser than in SSR mode.
 * - Optimizer/Serialization/Deserialization code is not exercised!
 */
var qwik_1 = require("@builder.io/qwik");
var root_1 = require("./root");
function default_1(opts) {
    return qwik_1.render(document, React.createElement(root_1["default"], null), opts);
}
exports["default"] = default_1;
