"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
var contact_css_inline_1 = require("./contact.css?inline");
var mui_1 = require("~/integrations/react/mui");
// import ContactBtn from "./contact_btn";
// use the correct URL to connect serverless functions
// dev  http://localhost:8888/.netlify/functions/get_contacts/
// prod  https://nexasoft.netlify.app/.netlify/functions/get_contacts/
exports["default"] = qwik_1.component$(function () {
    qwik_1.useStylesScoped$(contact_css_inline_1["default"]);
    // const store = useStore({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   issue: "",
    //   message: "",
    // });
    return (React.createElement("contact", { id: "contact-section", "class": "flex w-full justify-center" },
        React.createElement(mui_1.FormularioContacto, null)));
});
