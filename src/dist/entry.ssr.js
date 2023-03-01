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
/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
var server_1 = require("@builder.io/qwik/server");
var _qwik_client_manifest_1 = require("@qwik-client-manifest");
var root_1 = require("./root");
function default_1(opts) {
    return server_1.renderToStream(React.createElement(root_1["default"], null), __assign(__assign({ manifest: _qwik_client_manifest_1.manifest }, opts), { 
        // Use container attributes to set attributes on the html tag.
        containerAttributes: __assign({ lang: 'en-us' }, opts.containerAttributes) }));
}
exports["default"] = default_1;
