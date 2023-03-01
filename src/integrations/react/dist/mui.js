"use strict";
exports.__esModule = true;
exports.TableApp = exports.FormularioContacto = exports.ImagesList = exports.MUIInputLabel = exports.MUIInput = exports.MUIFormControl = exports.MUIStackForm = exports.MUIStack = exports.MUICardMedia = exports.MUICardContent = exports.MUICard = exports.MUISlider = exports.MUIButton = exports.MUITypography = exports.MUIBox = exports.MUIPaper = exports.MUIMobileStepper = exports.MUIKeyboardArrowRight = exports.MUIKeyboardArrowLeft = exports.MUIFacebookIcon = exports.MUIInstagramIcon = exports.MUIWhatsAppIcon = exports.MUIInsertDriveFileIcon = exports.MUIMailOutlineIcon = exports.MUIContactPageIcon = exports.MUIPlaceIcon = exports.MUIWebIcon = exports.MUIPhoneIphoneIcon = exports.MUIPhoneAndroidIcon = exports.MUILaptopIcon = exports.MUIDevicesIcon = void 0;
/** @jsxImportSource react */
var qwik_react_1 = require("@builder.io/qwik-react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var x_data_grid_1 = require("@mui/x-data-grid");
var imageListItems_1 = require("./imageListItems");
var FormContacto_1 = require("./FormContacto");
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
exports.MUIKeyboardArrowLeft = qwik_react_1.qwikify$(icons_material_1.KeyboardArrowLeft);
exports.MUIKeyboardArrowRight = qwik_react_1.qwikify$(icons_material_1.KeyboardArrowRight);
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import ChargingStationIcon from '@mui/icons-material/ChargingStation';
// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
// import BoltIcon from '@mui/icons-material/Bolt';
// import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
// import TabIcon from '@mui/icons-material/Tab';
// import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
// import AddBoxIcon from '@mui/icons-material/AddBox';
exports.MUIMobileStepper = qwik_react_1.qwikify$(material_1.MobileStepper);
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
exports.MUIStackForm = qwik_react_1.qwikify$(material_1.Stack);
exports.MUIFormControl = qwik_react_1.qwikify$(material_1.FormControl);
exports.MUIInput = qwik_react_1.qwikify$(material_1.Input);
exports.MUIInputLabel = qwik_react_1.qwikify$(material_1.InputLabel);
exports.ImagesList = qwik_react_1.qwikify$(function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.ImageList, { sx: { width: { md: 500 }, height: { md: 600 } }, variant: "quilted", cols: 4, rowHeight: 121 },
            React.createElement(imageListItems_1["default"], null))));
});
exports.FormularioContacto = qwik_react_1.qwikify$(function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(FormContacto_1["default"], null)));
});
exports.TableApp = qwik_react_1.qwikify$(function () {
    var columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 90
        },
        {
            field: "fullName",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: function (params) {
                return (params.row.firstName || "") + " " + (params.row.lastName || "");
            }
        },
    ];
    var rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Hello from React"),
        React.createElement("div", { style: { height: 400, width: "100%" } },
            React.createElement(x_data_grid_1.DataGrid, { rows: rows, columns: columns, pageSize: 5, rowsPerPageOptions: [5], checkboxSelection: true, disableSelectionOnClick: true }))));
});
