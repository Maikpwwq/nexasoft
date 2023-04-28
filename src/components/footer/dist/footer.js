"use strict";
exports.__esModule = true;
var qwik_1 = require("@builder.io/qwik");
var footer_css_inline_1 = require("./footer.css?inline");
var mui_1 = require("~/integrations/react/mui");
exports["default"] = qwik_1.component$(function () {
    qwik_1.useStylesScoped$(footer_css_inline_1["default"]);
    return (React.createElement("footer", null,
        React.createElement(mui_1.MUIBox, { "class": "w-full justify-center", sx: {
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    // width: 184,
                    height: 184
                }
            } },
            React.createElement(mui_1.MUIPaper, { elevation: 3, "class": "p-4 w-full" },
                React.createElement(mui_1.MUIStack, null,
                    " ",
                    React.createElement(mui_1.MUIContactPageIcon, { fontSize: "large" })),
                React.createElement(mui_1.MUIStack, null,
                    React.createElement(mui_1.MUITypography, { variant: "body2" },
                        React.createElement(mui_1.MUIPlaceIcon, null),
                        " Bogot\u00E1, Colombia."),
                    React.createElement(mui_1.MUIBox, { "class": "flex flex-row justify-center" },
                        React.createElement(mui_1.MUIMailOutlineIcon, null),
                        React.createElement("a", { href: "mailto:nexasoftprofessionalsolutions@gmail.com", target: "_blank", title: "mail" },
                            React.createElement(mui_1.MUITypography, { variant: "body2" },
                                " ",
                                "NexaSoft"))),
                    React.createElement(mui_1.MUITypography, { variant: "body2" },
                        React.createElement(mui_1.MUIWhatsAppIcon, { fontSize: "small" }),
                        " 3195137182"),
                    React.createElement(mui_1.MUIBox, { "class": "flex flex-row justify-center" },
                        React.createElement("a", { href: "https://www.instagram.com/nexa_soft/", target: "_blank", title: "Instagram" },
                            React.createElement(mui_1.MUIInstagramIcon, null)),
                        React.createElement("a", { href: "https://www.facebook.com/profile.php?id=100089606313657", target: "_blank", title: "Facebook" },
                            React.createElement(mui_1.MUIFacebookIcon, null))),
                    React.createElement(mui_1.MUITypography, { variant: "body2" },
                        React.createElement(mui_1.MUIInsertDriveFileIcon, null),
                        " Pol\u00EDticas de privacidad."))))));
});
