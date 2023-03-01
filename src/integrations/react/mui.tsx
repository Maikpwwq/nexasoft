/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import {
  Box,
  Button,
  Slider,
  Typography,
  Paper,
  ImageList,
  Card,
  CardContent,
  CardMedia,
  Stack,
  // FormControl,
  // Input,
  // InputLabel,
  MobileStepper,
} from "@mui/material";
import {
  Devices,
  Laptop,
  PhoneAndroid,
  PhoneIphone,
  Web,
  Place,
  ContactPage,
  MailOutline,
  InsertDriveFile,
  WhatsApp,
  Instagram,
  Facebook,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  DataGrid,
  type GridColDef,
  type GridValueGetterParams,
} from "@mui/x-data-grid";

import ImageListItems from "./imageListItems";
import FormContacto from "./FormContacto";

// import PushPinIcon from '@mui/icons-material/PushPin';
// import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import PermMediaIcon from '@mui/icons-material/PermMedia';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';

export const MUIDevicesIcon = qwikify$(Devices);
export const MUILaptopIcon = qwikify$(Laptop);
export const MUIPhoneAndroidIcon = qwikify$(PhoneAndroid);
export const MUIPhoneIphoneIcon = qwikify$(PhoneIphone);
export const MUIWebIcon = qwikify$(Web);
export const MUIPlaceIcon = qwikify$(Place);
export const MUIContactPageIcon = qwikify$(ContactPage);
// export const MUIAlternateEmailIcon = qwikify$(AlternateEmail);
export const MUIMailOutlineIcon = qwikify$(MailOutline);
export const MUIInsertDriveFileIcon = qwikify$(InsertDriveFile);
export const MUIWhatsAppIcon = qwikify$(WhatsApp);
export const MUIInstagramIcon = qwikify$(Instagram);
export const MUIFacebookIcon = qwikify$(Facebook);
export const MUIKeyboardArrowLeft = qwikify$(KeyboardArrowLeft);
export const MUIKeyboardArrowRight = qwikify$(KeyboardArrowRight);

// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import ChargingStationIcon from '@mui/icons-material/ChargingStation';
// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
// import BoltIcon from '@mui/icons-material/Bolt';
// import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
// import TabIcon from '@mui/icons-material/Tab';

// import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
// import AddBoxIcon from '@mui/icons-material/AddBox';

export const MUIMobileStepper = qwikify$(MobileStepper);
export const MUIPaper = qwikify$(Paper);
export const MUIBox = qwikify$(Box);
export const MUITypography = qwikify$(Typography);
// export const MUIImageList = qwikify$(ImageList);
// export const MUIImageListItem = qwikify$(ImageListItem);
export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: "hover" });
export const MUICard = qwikify$(Card);
export const MUICardContent = qwikify$(CardContent);
export const MUICardMedia = qwikify$(CardMedia);
export const MUIStack = qwikify$(Stack);
// export const MUIFormControl = qwikify$(FormControl);
// export const MUIInput = qwikify$(Input);
// export const MUIInputLabel = qwikify$(InputLabel);

export const ImagesList = qwikify$(() => {
  return (
    <>
      <ImageList
        sx={{ width: { md: 500 }, height: { md: 600 } }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        <ImageListItems />
      </ImageList>
    </>
  );
});

export const FormularioContacto = qwikify$(() => {
  return (
    <>
      <FormContacto />
    </>
  );
});

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
