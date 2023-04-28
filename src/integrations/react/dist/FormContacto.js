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
/** @jsxImportSource react */
var material_1 = require("@mui/material");
var react_1 = require("react");
var FormContacto = function () {
    var _a = react_1.useState({
        name: "",
        email: "",
        phone: "",
        issue: "",
        message: ""
    }), store = _a[0], setStore = _a[1];
    var handleClick = function (store) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("handleClick", store);
                    return [4 /*yield*/, fetch("https://nexasoft.netlify.app/.netlify/functions/customer_record", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(store)
                        })
                            .then(function (res) {
                            console.log("MongoRes", res);
                            return res.json();
                        })
                            .then(function (docs) {
                            console.log("My-docs", docs);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Card, { className: "m-6 flex", sx: { maxWidth: 369, borderRadius: 6 }, elevation: 16 },
            React.createElement(material_1.CardContent, { className: "flex flex-col items-center" },
                React.createElement(material_1.Typography, { variant: "h6", color: "var(--qwik-dark-blue)" }, "Formulario de contacto"),
                React.createElement(material_1.Typography, { variant: "body1", className: "pt-2", align: "center" }, "Solicita informaci\u00F3n adicional o una presentaci\u00F3n de nuestros servicios."),
                React.createElement(material_1.Stack, { component: "form", sx: {
                        "& > :not(style)": { m: 1 },
                        width: "25ch"
                    }, spacing: 2, noValidate: true, autoComplete: "off", className: "mt-2 items-center", onSubmit: handleClick },
                    React.createElement(material_1.FormControl, { variant: "standard", className: "m-0 mt-4", size: "small" },
                        React.createElement(material_1.InputLabel, { sx: { position: "relative" }, htmlFor: "form-name" },
                            "Nombre:",
                            " "),
                        React.createElement(material_1.Input, { id: "form-name", value: store.name, onChange: function (event) {
                                setStore(__assign(__assign({}, store), { name: event }));
                                console.log(store, event);
                            } })),
                    React.createElement(material_1.FormControl, { variant: "standard", size: "small" },
                        React.createElement(material_1.InputLabel, { sx: { position: "relative" }, htmlFor: "form-email" },
                            "Correo electr\u00F3nico:",
                            " "),
                        React.createElement(material_1.Input, { id: "form-email", value: store.email, onChange: function (event) {
                                setStore(__assign(__assign({}, store), { email: event }));
                                console.log(store, event);
                            } })),
                    React.createElement(material_1.FormControl, { variant: "standard", size: "small" },
                        React.createElement(material_1.InputLabel, { sx: { position: "relative" }, htmlFor: "form-phone" },
                            "Tel\u00E9fono:",
                            " "),
                        React.createElement(material_1.Input, { id: "form-phone", value: store.phone, onChange: function (event) {
                                setStore(__assign(__assign({}, store), { phone: event }));
                                console.log(store, event);
                            } })),
                    React.createElement(material_1.FormControl, { variant: "standard", size: "small" },
                        React.createElement(material_1.InputLabel, { sx: { position: "relative" }, htmlFor: "form-issue" },
                            "Asunto:",
                            " "),
                        React.createElement(material_1.Input, { id: "form-issue", value: store.issue, onChange: function (event) {
                                setStore(__assign(__assign({}, store), { issue: event }));
                                console.log(store, event);
                            } })),
                    React.createElement(material_1.FormControl, { variant: "standard", size: "small" },
                        React.createElement(material_1.InputLabel, { sx: { position: "relative" }, htmlFor: "form-message" },
                            "Mensaje:",
                            " "),
                        React.createElement(material_1.Input, { id: "form-message", multiline: true, rows: "3", value: store.message, onChange: function (event) {
                                setStore(__assign(__assign({}, store), { message: event }));
                                console.log(store, event);
                            } })),
                    React.createElement(material_1.FormControl, { sx: { paddingTop: "16px" }, variant: "standard", size: "small" },
                        React.createElement(material_1.Button, { type: "submit", onClick: function () { return handleClick(store); } }, "Enviar")))))));
};
exports["default"] = FormContacto;
