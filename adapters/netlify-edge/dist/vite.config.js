"use strict";
exports.__esModule = true;
var vite_1 = require("@builder.io/qwik-city/adapters/netlify-edge/vite");
var vite_2 = require("@builder.io/qwik-city/vite");
var vite_config_1 = require("../../vite.config");
exports["default"] = vite_2.extendConfig(vite_config_1["default"], function () {
    return {
        build: {
            ssr: true,
            rollupOptions: {
                input: ['src/entry.netlify-edge.tsx', '@qwik-city-plan']
            },
            outDir: '.netlify/edge-functions/entry.netlify-edge'
        },
        plugins: [
            vite_1.netifyEdgeAdaptor({
                staticGenerate: true
            }),
        ]
    };
});
