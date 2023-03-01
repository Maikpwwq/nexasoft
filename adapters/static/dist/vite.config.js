"use strict";
exports.__esModule = true;
var vite_1 = require("@builder.io/qwik-city/adapters/static/vite");
var vite_2 = require("@builder.io/qwik-city/vite");
var vite_config_1 = require("../../vite.config");
exports["default"] = vite_2.extendConfig(vite_config_1["default"], function () {
    return {
        build: {
            ssr: true,
            rollupOptions: {
                input: ['@qwik-city-plan']
            }
        },
        plugins: [
            vite_1.staticAdapter({
                origin: 'https://nexasoft.netlify.app/'
            }),
        ]
    };
});
