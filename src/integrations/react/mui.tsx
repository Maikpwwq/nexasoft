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
  OpenInBrowser,
  DesignServices,
  Phonelink,
  LaptopMac,
  Language,
  CastForEducation,
  MonitorHeart,
  LocalGroceryStore,
  Store,
  Apps,
  AppShortcut,
  SavedSearch,
  Difference,
  ManageHistory,
  IntegrationInstructions,
  AspectRatio,
  DeveloperBoard,
  BrandingWatermark,
  Security,
  SmartButton,
  LocalPolice,
  Menu,
} from "@mui/icons-material";

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
export const MuiDivider = qwikify$(Divider);

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

export const CustomersTestimonials = qwikify$(() => {
  return (
    <>
      <CustomersTestimonial />
    </>
  );
});

export const CustomersQuestions = qwikify$(
  () => {
    return (
      <>
        <CommonQuestions />
      </>
    );
  },
  { eagerness: "hover" },
);

export const FormularioContacto = qwikify$(
  () => {
    return (
      <>
        <FormContacto />
      </>
    );
  },
  { eagerness: "hover" },
);

export const BannerImgStepper = qwikify$(() => {
  return (
    <>
      <BannerStepper />
    </>
  );
});

export const TableApp = qwikify$(() => {
  return (
    <>
      <TableReactApp />
    </>
  );
});
