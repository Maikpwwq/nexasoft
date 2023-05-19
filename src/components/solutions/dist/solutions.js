"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
var mui_1 = require("~/integrations/react/mui");
exports["default"] = qwik_1.component$(function () {
    // useStylesScoped$(styles);
    return (React.createElement("solutions", { id: "solutions-section", "class": "mt-6 mb-6" },
        React.createElement(mui_1.MUITypography, { className: "mt-6 mb-6 pb-6", variant: "body1" }, "Software Solutions")));
});
