"use strict";
exports.__esModule = true;
exports.TableApp = exports.BannerImgStepper = exports.FormularioContacto = exports.ImagesList = exports.MUIStack = exports.MUICardMedia = exports.MUICardContent = exports.MUICard = exports.MUISlider = exports.MUIButton = exports.MUITypography = exports.MUIBox = exports.MUIPaper = exports.MUIFacebookIcon = exports.MUIInstagramIcon = exports.MUIWhatsAppIcon = exports.MUIInsertDriveFileIcon = exports.MUIMailOutlineIcon = exports.MUIContactPageIcon = exports.MUIPlaceIcon = exports.MUIWebIcon = exports.MUIPhoneIphoneIcon = exports.MUIPhoneAndroidIcon = exports.MUILaptopIcon = exports.MUIDevicesIcon = void 0;
/** @jsxImportSource react */
var qwik_react_1 = require("@builder.io/qwik-react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var imageListItems_1 = require("./imageListItems");
var FormContacto_1 = require("./FormContacto");
var BannerStepper_1 = require("./BannerStepper");
var TableReactApp_1 = require("./TableReactApp");
// import PushPinIcon from '@mui/icons-material/PushPin';
// import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import PermMediaIcon from '@mui/icons-material/PermMedia';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
exports.MUIDevicesIcon = qwik_react_1.qwikify$(icons_material_1.Devices);
exports.MUILaptopIcon = qwik_react_1.qwikify$(icons_material_1.Laptop);
exports.MUIPhoneAndroidIcon = qwik_react_1.qwikify$(icons_material_1.PhoneAndroid);
exports.MUIPhoneIphoneIcon = qwik_react_1.qwikify$(icons_material_1.PhoneIphone);
exports.MUIWebIcon = qwik_react_1.qwikify$(icons_material_1.Web);
exports.MUIPlaceIcon = qwik_react_1.qwikify$(icons_material_1.Place);
exports.MUIContactPageIcon = qwik_react_1.qwikify$(icons_material_1.ContactPage);
// export const MUIAlternateEmailIcon = qwikify$(AlternateEmail);
exports.MUIMailOutlineIcon = qwik_react_1.qwikify$(icons_material_1.MailOutline);
exports.MUIInsertDriveFileIcon = qwik_react_1.qwikify$(icons_material_1.InsertDriveFile);
exports.MUIWhatsAppIcon = qwik_react_1.qwikify$(icons_material_1.WhatsApp);
exports.MUIInstagramIcon = qwik_react_1.qwikify$(icons_material_1.Instagram);
exports.MUIFacebookIcon = qwik_react_1.qwikify$(icons_material_1.Facebook);
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import ChargingStationIcon from '@mui/icons-material/ChargingStation';
// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
// import BoltIcon from '@mui/icons-material/Bolt';
// import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
// import TabIcon from '@mui/icons-material/Tab';
// import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
// import AddBoxIcon from '@mui/icons-material/AddBox';
exports.MUIPaper = qwik_react_1.qwikify$(material_1.Paper);
exports.MUIBox = qwik_react_1.qwikify$(material_1.Box);
exports.MUITypography = qwik_react_1.qwikify$(material_1.Typography);
// export const MUIImageList = qwikify$(ImageList);
// export const MUIImageListItem = qwikify$(ImageListItem);
exports.MUIButton = qwik_react_1.qwikify$(material_1.Button);
exports.MUISlider = qwik_react_1.qwikify$(material_1.Slider, { eagerness: "hover" });
exports.MUICard = qwik_react_1.qwikify$(material_1.Card);
exports.MUICardContent = qwik_react_1.qwikify$(material_1.CardContent);
exports.MUICardMedia = qwik_react_1.qwikify$(material_1.CardMedia);
exports.MUIStack = qwik_react_1.qwikify$(material_1.Stack);
// export const MUIFormControl = qwikify$(FormControl);
// export const MUIInput = qwikify$(Input);
// export const MUIInputLabel = qwikify$(InputLabel);
exports.ImagesList = qwik_react_1.qwikify$(function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.ImageList, { sx: { width: { md: 500 }, height: { md: 600 } }, variant: "quilted", cols: 4, rowHeight: 121 },
            React.createElement(imageListItems_1["default"], null))));
});
exports.FormularioContacto = qwik_react_1.qwikify$(function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(FormContacto_1["default"], null)));
});
exports.BannerImgStepper = qwik_react_1.qwikify$(function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(BannerStepper_1["default"], null)));
});
exports.TableApp = qwik_react_1.qwikify$(function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(TableReactApp_1["default"], null)));
});
