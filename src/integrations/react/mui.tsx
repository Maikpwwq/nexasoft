/** @jsxImportSource react */

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
  Divider,
} from "@mui/material";
import Devices from "@mui/icons-material/Devices";
import Laptop from "@mui/icons-material/Laptop";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import PhoneIphone from "@mui/icons-material/PhoneIphone";
import Web from "@mui/icons-material/Web";
import Place from "@mui/icons-material/Place";
import ContactPage from "@mui/icons-material/ContactPage";
import MailOutline from "@mui/icons-material/MailOutline";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import OpenInBrowser from "@mui/icons-material/OpenInBrowser";
import DesignServices from "@mui/icons-material/DesignServices";
import Phonelink from "@mui/icons-material/Phonelink";
import LaptopMac from "@mui/icons-material/LaptopMac";
import Language from "@mui/icons-material/Language";
import CastForEducation from "@mui/icons-material/CastForEducation";
import MonitorHeart from "@mui/icons-material/MonitorHeart";
import LocalGroceryStore from "@mui/icons-material/LocalGroceryStore";
import Store from "@mui/icons-material/Store";
import Apps from "@mui/icons-material/Apps";
import AppShortcut from "@mui/icons-material/AppShortcut";
import SavedSearch from "@mui/icons-material/SavedSearch";
import Difference from "@mui/icons-material/Difference";
import ManageHistory from "@mui/icons-material/ManageHistory";
import IntegrationInstructions from "@mui/icons-material/IntegrationInstructions";
import AspectRatio from "@mui/icons-material/AspectRatio";
import DeveloperBoard from "@mui/icons-material/DeveloperBoard";
import BrandingWatermark from "@mui/icons-material/BrandingWatermark";
import Security from "@mui/icons-material/Security";
import SmartButton from "@mui/icons-material/SmartButton";
import LocalPolice from "@mui/icons-material/LocalPolice";
import Menu from "@mui/icons-material/Menu";

import ImageListItems from "~/integrations/react/imageListItems";
import FormContacto from "~/integrations/react/FormContacto";
import BannerStepper from "~/integrations/react/BannerStepper";
import TableReactApp from "~/integrations/react/TableReactApp";
import CustomersTestimonial from "~/integrations/react/CustomersTestimonial";
import CommonQuestions from "~/integrations/react/CommonQuestions";

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

// resume Icons
export const MUIDesignServicesIcon = qwikify$(DesignServices);
export const MUIPhonelinkIcon = qwikify$(Phonelink);
export const MUILaptopMacIcon = qwikify$(LaptopMac);
export const MUICastForEducationIcon = qwikify$(CastForEducation);
export const MUILocalGroceryStoreIcon = qwikify$(LocalGroceryStore);
export const MUIStoreIcon = qwikify$(Store);
export const MUIAppShortcutIcon = qwikify$(AppShortcut);
// further Icons
export const MUIOpenInBrowserIcon = qwikify$(OpenInBrowser);
export const MUISavedSearchIcon = qwikify$(SavedSearch);
export const MUIIntegrationInstructionsIcon = qwikify$(IntegrationInstructions);
export const MUIDeveloperBoardIcon = qwikify$(DeveloperBoard);
export const MUIBrandingWatermarkIcon = qwikify$(BrandingWatermark);
export const MUISecurityIcon = qwikify$(Security);
// advantages Icons
export const MUILanguageIcon = qwikify$(Language);
export const MUIMonitorHeartIcon = qwikify$(MonitorHeart);
export const MUIManageHistoryIcon = qwikify$(ManageHistory);
export const MUIAspectRatioIcon = qwikify$(AspectRatio);
export const MUISmartButtonIcon = qwikify$(SmartButton);
export const MUILocalPoliceIcon = qwikify$(LocalPolice);
// more
export const MUIAppsIcon = qwikify$(Apps);
export const MUIDifferenceIcon = qwikify$(Difference);

// Menu
export const MUIMenuIcon = qwikify$(Menu);

// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import ChargingStationIcon from '@mui/icons-material/ChargingStation';
// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
// import BoltIcon from '@mui/icons-material/Bolt';
// import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
// import TabIcon from '@mui/icons-material/Tab';

// import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
// import AddBoxIcon from '@mui/icons-material/AddBox';

export const MUIPaper = qwikify$(Paper, { eagerness: "load" });
export const MUIBox = qwikify$(Box, { eagerness: "load" });
export const MUITypography = qwikify$(Typography, { eagerness: "load" });
// export const MUIImageList = qwikify$(ImageList);
// export const MUIImageListItem = qwikify$(ImageListItem);
export const MUIButton = qwikify$(Button, { eagerness: "load" });
export const MUISlider = qwikify$(Slider, { eagerness: "load" });
export const MUICard = qwikify$(Card, { eagerness: "load" });
export const MUICardContent = qwikify$(CardContent, { eagerness: "load" });
export const MUICardMedia = qwikify$(CardMedia, { eagerness: "load" });
export const MUIStack = qwikify$(Stack, { eagerness: "load" });
export const MuiDivider = qwikify$(Divider, { eagerness: "load" });

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
}, { eagerness: "load", "client:only": true });

export const CustomersTestimonials = qwikify$(() => {
  return (
    <>
      <CustomersTestimonial />
    </>
  );
}, { eagerness: "load" });

export const CustomersQuestions = qwikify$(
  () => {
    return (
      <>
        <CommonQuestions />
      </>
    );
  },
  { eagerness: "load" },
);

export const FormularioContacto = qwikify$(
  () => {
    return (
      <>
        <FormContacto />
      </>
    );
  },
  { eagerness: "load" },
);

export const BannerImgStepper = qwikify$(() => {
  return (
    <>
      <BannerStepper />
    </>
  );
}, { eagerness: "load" });

export const TableApp = qwikify$(() => {
  return (
    <>
      <TableReactApp />
    </>
  );
}, { eagerness: "load" });
