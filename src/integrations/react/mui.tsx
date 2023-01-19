/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Box, Button, Slider, Typography, Paper } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import DevicesIcon from "@mui/icons-material/Devices";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebIcon from "@mui/icons-material/Web";
// import PushPinIcon from '@mui/icons-material/PushPin';
import PlaceIcon from "@mui/icons-material/Place";
// import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import PermMediaIcon from '@mui/icons-material/PermMedia';
import ContactPageIcon from "@mui/icons-material/ContactPage";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const MUIDevicesIcon = qwikify$(DevicesIcon);
export const MUILaptopIcon = qwikify$(LaptopIcon);
export const MUIPhoneAndroidIcon = qwikify$(PhoneAndroidIcon);
export const MUIPhoneIphoneIcon = qwikify$(PhoneIphoneIcon);
export const MUIWebIcon = qwikify$(WebIcon);
export const MUIPlaceIcon = qwikify$(PlaceIcon);
export const MUIContactPageIcon = qwikify$(ContactPageIcon);
// export const MUIAlternateEmailIcon = qwikify$(AlternateEmailIcon);
export const MUIMailOutlineIcon = qwikify$(MailOutlineIcon);
export const MUIInsertDriveFileIcon = qwikify$(InsertDriveFileIcon);
export const MUIWhatsAppIcon = qwikify$(WhatsAppIcon);
export const MUIInstagramIcon = qwikify$(InstagramIcon);
export const MUIFacebookIcon = qwikify$(FacebookIcon);

// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import ChargingStationIcon from '@mui/icons-material/ChargingStation';
// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
// import BoltIcon from '@mui/icons-material/Bolt';
// import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
// import TabIcon from '@mui/icons-material/Tab';

// import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
// import AddBoxIcon from '@mui/icons-material/AddBox';

export const MUIPaper = qwikify$(Paper);
export const MUIBox = qwikify$(Box);
export const MUITypography = qwikify$(Typography);
export const MUIImageList = qwikify$(ImageList);
export const MUIImageListItem = qwikify$(ImageListItem);
export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: "hover" });
export const MUICard = qwikify$(Card);
export const MUICardContent = qwikify$(CardContent);
export const MUICardMedia = qwikify$(CardMedia);
export const MUIStack = qwikify$(Stack);
export const MUIFormControl = qwikify$(FormControl);
export const MUIInput = qwikify$(Input);
export const MUIInputLabel = qwikify$(InputLabel);

export const TableApp = qwikify$(() => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
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

  return (
    <>
      <h1>Hello from React</h1>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
});
