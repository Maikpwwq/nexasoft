import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import styles from "./contact.css?inline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
export const MUIButton = qwikify$(Button);
export const MUIBox = qwikify$(Box);
export const MUIStack = qwikify$(Stack);
export const MUIFormControl = qwikify$(FormControl);
export const MUIInput = qwikify$(Input);
export const MUIInputLabel = qwikify$(InputLabel);

export default component$(() => {
  useStylesScoped$(styles);

  const store = useStore({
    name: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
  });

  return (
    <contact id="contact-section">
      <div>
        Formulario de contacto. Solicita información adicional o una
        presentación de nuestros servicios.
        <MUIStack
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            width: '25ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <MUIFormControl variant="standard">
            <MUIInputLabel htmlFor="form-name">Nombre: </MUIInputLabel>
            <MUIInput id="form-name" value={store.name} onChange$={() => {}} />
          </MUIFormControl>
          <MUIFormControl variant="standard" size="small">
            <MUIInputLabel htmlFor="form-email">
              Correo electrónico:{" "}
            </MUIInputLabel>
            <MUIInput
              id="form-email"
              value={store.email}
              onChange$={() => {}}
            />
          </MUIFormControl>
          <MUIFormControl variant="standard" >
            <MUIInputLabel htmlFor="form-phone"> Teléfono: </MUIInputLabel>
            <MUIInput
              id="form-phone"
              value={store.phone}
              onChange$={() => {}}
            />
          </MUIFormControl>
          <MUIFormControl variant="standard">
            <MUIInputLabel htmlFor="form-issue">Asunto: </MUIInputLabel>
            <MUIInput
              id="form-issue"
              value={store.issue}
              onChange$={() => {}}
            />
          </MUIFormControl>
          <MUIFormControl variant="standard">
            <MUIInputLabel htmlFor="form-message">Mensaje: </MUIInputLabel>
            <MUIInput
              id="form-message"
              value={store.message}
              onChange$={() => {}}
            />
          </MUIFormControl>
          <MUIButton>Enviar</MUIButton>
        </MUIStack>
      </div>
    </contact>
  );
});
