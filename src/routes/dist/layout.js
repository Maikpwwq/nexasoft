"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
var header_1 = require("../components/header/header");
exports["default"] = qwik_1.component$(function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", null,
            React.createElement(header_1["default"], null),
            React.createElement("section", null,
                React.createElement(qwik_1.Slot, null))),
        React.createElement("footer", null,
            React.createElement("a", { href: "/", target: "_blank" }, "Made in Colombia \u2661 by NexaSoft SAS"))));
});
