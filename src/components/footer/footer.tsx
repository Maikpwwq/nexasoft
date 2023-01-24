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
                href="mailto:nexasoftprofessionalsolutions@gmail.com"
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
