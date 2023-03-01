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
/** @jsxImportSource react */
var material_1 = require("@mui/material");
var Aplicaciones_m_viles_jpg_1 = require("../../assets/img/lista imagenes/Aplicaciones m\u00F3viles.jpg");
var aplications_jpg_1 = require("../../assets/img/lista imagenes/aplications.jpg");
var Automatizaci_n_jpg_1 = require("../../assets/img/lista imagenes/Automatizaci\u00F3n.jpg");
var Desarrollo_web_jpg_1 = require("../../assets/img/lista imagenes/Desarrollo web.jpg");
var desktop_jpg_1 = require("../../assets/img/lista imagenes/desktop.jpg");
var development_jpg_1 = require("../../assets/img/lista imagenes/development.jpg");
var devices_jpg_1 = require("../../assets/img/lista imagenes/devices.jpg");
var ecommerce_jpg_1 = require("../../assets/img/lista imagenes/ecommerce.jpg");
var explore_internet_jpg_1 = require("../../assets/img/lista imagenes/explore internet.jpg");
var growth_ideas_jpg_1 = require("../../assets/img/lista imagenes/growth ideas.jpg");
var Innovaci_n_jpg_1 = require("../../assets/img/lista imagenes/Innovaci\u00F3n.jpg");
var Integraci_n_de_sistemas_jpg_1 = require("../../assets/img/lista imagenes/Integraci\u00F3n de sistemas.jpg");
var Mantenimiento_de_plataformas_jpg_1 = require("../../assets/img/lista imagenes/Mantenimiento de plataformas.jpg");
var Modernizaci_n_de_plataformas_jpg_1 = require("../../assets/img/lista imagenes/Modernizaci\u00F3n de plataformas.jpg");
var m_vile_jpg_1 = require("../../assets/img/lista imagenes/m\u00F3vile.jpg");
var remote_office_jpg_1 = require("../../assets/img/lista imagenes/remote office.jpg");
var Seguridad_inform_tica_jpg_1 = require("../../assets/img/lista imagenes/Seguridad inform\u00E1tica.jpg");
var Tecnolog_a_jpg_1 = require("../../assets/img/lista imagenes/Tecnolog\u00EDa.jpg");
var itemData = [
    {
        id: 0,
        img: Aplicaciones_m_viles_jpg_1["default"],
        title: "AplicacionesMoviles",
        rows: 2,
        cols: 2
    },
    {
        id: 1,
        img: aplications_jpg_1["default"],
        title: "Aplications"
    },
    {
        id: 2,
        img: Automatizaci_n_jpg_1["default"],
        title: "Automatizacion"
    },
    {
        id: 3,
        img: Desarrollo_web_jpg_1["default"],
        title: "DesarrolloWeb",
        cols: 2
    },
    {
        id: 4,
        img: desktop_jpg_1["default"],
        title: "Desktop",
        cols: 2
    },
    {
        id: 5,
        img: development_jpg_1["default"],
        title: "Development",
        author: "@nkiqi",
        rows: 2,
        cols: 2
    },
    {
        id: 6,
        img: devices_jpg_1["default"],
        title: "Devices"
    },
    {
        id: 7,
        img: ecommerce_jpg_1["default"],
        title: "Ecommerce"
    },
    {
        id: 8,
        img: explore_internet_jpg_1["default"],
        title: "ExploreInternet",
        rows: 2,
        cols: 2
    },
    {
        id: 9,
        img: growth_ideas_jpg_1["default"],
        title: growth_ideas_jpg_1["default"]
    },
    {
        id: 10,
        img: Innovaci_n_jpg_1["default"],
        title: "Innovation"
    },
    {
        id: 11,
        img: Integraci_n_de_sistemas_jpg_1["default"],
        title: "SystemIntegration",
        cols: 2
    },
    {
        id: 12,
        img: Mantenimiento_de_plataformas_jpg_1["default"],
        title: "MantenimientoPlataformas",
        rows: 2,
        cols: 2
    },
    {
        id: 13,
        img: Modernizaci_n_de_plataformas_jpg_1["default"],
        title: "ModernizacionPlataformas"
    },
    {
        id: 14,
        img: m_vile_jpg_1["default"],
        title: "Movile"
    },
    {
        id: 15,
        img: remote_office_jpg_1["default"],
        title: "RemoteOffice",
        cols: 2
    },
    {
        id: 16,
        img: Seguridad_inform_tica_jpg_1["default"],
        title: "SeguridadInformatica",
        cols: 2
    },
    {
        id: 17,
        img: Tecnolog_a_jpg_1["default"],
        title: "Tecnologia",
        rows: 2,
        cols: 2
    },
];
function srcset(image, size, rows, cols) {
    if (rows === void 0) { rows = 1; }
    if (cols === void 0) { cols = 1; }
    return {
        src: image + "?w=" + size * cols + "&h=" + size * rows + "&fit=crop&auto=format",
        srcSet: image + "?w=" + size * cols + "&h=" + size * rows + "&fit=crop&auto=format&dpr=2 2x"
    };
}
var ImageListItems = function () {
    return (React.createElement(React.Fragment, null, itemData ? (itemData.map(function (item) {
        var id = item.id, title = item.title, img = item.img, cols = item.cols, rows = item.rows;
        return (React.createElement(material_1.ImageListItem, { key: id, cols: cols || 1, rows: rows || 1 },
            React.createElement("img", __assign({}, srcset(img, 121, rows, cols), { alt: title, loading: "lazy" }))));
    })) : (React.createElement(React.Fragment, null))));
};
exports["default"] = ImageListItems;
