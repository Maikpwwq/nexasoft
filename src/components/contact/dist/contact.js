"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.mongo = void 0;
var qwik_1 = require("@builder.io/qwik");
var contact_css_inline_1 = require("./contact.css?inline");
var mui_1 = require("~/integrations/react/mui");
// use the correct URL to connect serverless functions
// dev  http://localhost:8888/.netlify/functions/get_contacts/
// prod  https://nexasoft.netlify.app/.netlify/functions/get_contacts/
exports.mongo = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
exports["default"] = qwik_1.component$(function () {
    qwik_1.useStylesScoped$(contact_css_inline_1["default"]);
    var response = qwik_1.useResource$(exports.mongo);
    qwik_1.useClientEffect$(function () {
        console.log("finalData", response.loading, response.value); //.value
    });
    var store = qwik_1.useStore({
        name: "",
        email: "",
        phone: "",
        issue: "",
        message: ""
    });
    // const handleClick = () => {
    //   console.log(store);
    // };
    return (React.createElement("contact", { id: "contact-section", "class": "flex w-full justify-center" },
        React.createElement(mui_1.MUICard, { className: "m-6 flex", sx: { maxWidth: 369, borderRadius: 6 }, elevation: 16 },
            React.createElement(mui_1.MUICardContent, { className: "flex flex-col items-center" },
                React.createElement(mui_1.MUITypography, { variant: "h6", color: "var(--qwik-dark-blue)" }, "Formulario de contacto"),
                React.createElement(mui_1.MUITypography, { variant: "body1", className: "pt-2", align: "center" }, "Solicita informaci\u00F3n adicional o una presentaci\u00F3n de nuestros servicios."),
                React.createElement(mui_1.MUIStack, { component: "form", sx: {
                        "& > :not(style)": { m: 1 },
                        width: "25ch"
                    }, spacing: 2, noValidate: true, autoComplete: "off", className: "mt-6 items-center" },
                    React.createElement(mui_1.MUIFormControl, { variant: "standard" },
                        React.createElement(mui_1.MUIInputLabel, { htmlFor: "form-name" }, "Nombre: "),
                        React.createElement(mui_1.MUIInput, { id: "form-name", value: store.name, "onChange$": function () { } })),
                    React.createElement(mui_1.MUIFormControl, { variant: "standard", size: "small" },
                        React.createElement(mui_1.MUIInputLabel, { htmlFor: "form-email" },
                            "Correo electr\u00F3nico:",
                            " "),
                        React.createElement(mui_1.MUIInput, { id: "form-email", value: store.email, "onChange$": function () { } })),
                    React.createElement(mui_1.MUIFormControl, { variant: "standard" },
                        React.createElement(mui_1.MUIInputLabel, { htmlFor: "form-phone" }, " Tel\u00E9fono: "),
                        React.createElement(mui_1.MUIInput, { id: "form-phone", value: store.phone, "onChange$": function () { } })),
                    React.createElement(mui_1.MUIFormControl, { variant: "standard" },
                        React.createElement(mui_1.MUIInputLabel, { htmlFor: "form-issue" }, "Asunto: "),
                        React.createElement(mui_1.MUIInput, { id: "form-issue", value: store.issue, "onChange$": function () { } })),
                    React.createElement(mui_1.MUIFormControl, { variant: "standard" },
                        React.createElement(mui_1.MUIInputLabel, { htmlFor: "form-message" }, "Mensaje: "),
                        React.createElement(mui_1.MUIInput, { id: "form-message", multiline: true, rows: 3, value: store.message, "onChange$": function () { } })),
                    React.createElement(mui_1.MUIButton, null, "Enviar"))))));
});
