import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";
import {
  MUIBox,
  MUIPaper,
  MUIStack,
  MUIPlaceIcon,
  MUIContactPageIcon,
  // MUIAlternateEmailIcon,
  MUIMailOutlineIcon,
  MUIInsertDriveFileIcon,
  MUIWhatsAppIcon,
  MUIInstagramIcon,
  MUIFacebookIcon,
  MUITypography,
} from "~/integrations/react/mui";

import NexaSoftLogo from "~/assets/img/Logos Nexasoft/White (small).png";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <MUIStack
        direction={"row"}
        alignItems={"baseline"}
        justifyContent={"center"}
      >
        {" "}
        <MUIContactPageIcon fontSize="large" className="mb-2" />
        <MUITypography variant="h3" align="center">
          Datos de contacto
        </MUITypography>
      </MUIStack>
      <MUIBox
        className="w-full justify-center"
        sx={{
          paddingBottom: { sm: "0", md: "33px" },
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
            <img src={NexaSoftLogo} height={50} width={210} class="pb-4"/>
            <MUITypography variant="body1" align="center">
              <MUIPlaceIcon /> Bogotá, Colombia.
            </MUITypography>
            <MUIBox className="flex flex-row justify-center items-center">
              <a
                href="mailto:nexasoftprofessionalsolutions@gmail.com"
                target="_blank"
                title="mail"
              >
                <MUITypography className="flex flex-row justify-center items-end" variant="body1">
                  {" "}
                  {/* <MUIAlternateEmailIcon fontSize="small" />  */}
                  <MUIMailOutlineIcon className="me-1"/> NexaSoft SAS 
                </MUITypography>
              </a>
            </MUIBox>
            <a
              href="https://api.whatsapp.com/send?phone=573195137182"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MUITypography className="flex flex-row justify-center items-end" variant="body1" align="center">
                <MUIWhatsAppIcon className="me-1" /> 3195137182
              </MUITypography>
            </a>

            <MUIBox className="flex flex-row justify-center mb-4">
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
            <MUITypography variant="body2" align="center">
              <MUIInsertDriveFileIcon /> Políticas de privacidad
            </MUITypography>
          </MUIStack>
        </MUIPaper>
      </MUIBox>
    </footer>
  );
});
