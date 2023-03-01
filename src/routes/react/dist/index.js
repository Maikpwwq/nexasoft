"use strict";
exports.__esModule = true;
exports.head = void 0;
var qwik_1 = require("@builder.io/qwik");
var mui_1 = require("~/integrations/react/mui");
exports["default"] = qwik_1.component$(function () {
    var show = qwik_1.useSignal(false);
    var count = qwik_1.useSignal(0);
    var variant = qwik_1.useSignal('contained');
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Qwik/React mother of all demos"),
        React.createElement("select", { value: variant.value, "onChange$": function (ev) {
                variant.value = ev.target.value;
            } },
            React.createElement("option", null, "text"),
            React.createElement("option", null, "outlined"),
            React.createElement("option", { selected: true }, "contained")),
        React.createElement(mui_1.MUISlider, { value: count.value, "onChange$": function (_, value) {
                count.value = value;
            } }),
        React.createElement(mui_1.MUIButton, { variant: variant.value, host: true }),
        "onClick$=",
        function () { return alert('click'); },
        "> Slider is ",
        count.value)
        ,
            React.createElement("button", { "onClick$": function () { return (show.value = true); } }, "Show table"));
    {
        show.value && React.createElement(mui_1.TableApp, { client: true, visible: true },
            "Slider is ",
            count.value);
    }
     >
    ;
});
;
exports.head = {
    title: 'Qwik React'
};
