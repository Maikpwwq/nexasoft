import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import styles from "./footer.css?inline";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
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
import Typography from "@mui/material/Typography";

export const MUIBox = qwikify$(Box);
export const MUIPaper = qwikify$(Paper);
export const MUIStack = qwikify$(Stack);
export const MUIPlaceIcon = qwikify$(PlaceIcon);
export const MUIContactPageIcon = qwikify$(ContactPageIcon);
// export const MUIAlternateEmailIcon = qwikify$(AlternateEmailIcon);
export const MUIMailOutlineIcon = qwikify$(MailOutlineIcon);
export const MUIInsertDriveFileIcon = qwikify$(InsertDriveFileIcon);
export const MUIWhatsAppIcon = qwikify$(WhatsAppIcon);
export const MUIInstagramIcon = qwikify$(InstagramIcon);
export const MUIFacebookIcon = qwikify$(FacebookIcon);
export const MUITypography = qwikify$(Typography);

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <MUIBox
        className="w-full justify-center"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            // width: 184,
            height: 184,
          },
        }}
      >
        <MUIPaper elevation={3} className="p-4 w-full">
          <MUIStack>
            {" "}
            <MUIContactPageIcon fontSize="large" />
          </MUIStack>
          <MUIStack>
            <MUITypography variant="body2">
              <MUIPlaceIcon /> Bogotá, Colombia.
            </MUITypography>
            <MUIBox className="flex flex-row justify-center">
              <MUIMailOutlineIcon />
              <a
                href="mailto:mariasf@correo.udistrital.edu.co"
                target="_blank"
                title="mail"
              >
                <MUITypography variant="body2">
                  {" "}
                  {/* <MUIAlternateEmailIcon fontSize="small" />  */}
                  NexaSoft
                </MUITypography>
              </a>
            </MUIBox>
            <MUITypography variant="body2">
              <MUIWhatsAppIcon fontSize="small" /> 3195137182
            </MUITypography>
            <MUIBox className="flex flex-row justify-center">
              <a
                href="https://www.instagram.com/nexa_soft/"
                target="_blank"
                title="Instagram"
              >
                <MUIInstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089606313657"
                target="_blank"
                title="Facebook"
              >
                <MUIFacebookIcon />
              </a>
            </MUIBox>
            <MUITypography variant="body2">
              <MUIInsertDriveFileIcon /> Políticas de privacidad.
            </MUITypography>
          </MUIStack>
        </MUIPaper>
      </MUIBox>
    </footer>
  );
});
