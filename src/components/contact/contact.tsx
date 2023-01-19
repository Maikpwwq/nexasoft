import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import styles from "./contact.css?inline";
import {
  MUITypography,
  MUIButton, 
  MUICard ,
  MUICardContent ,
  MUIStack ,
  MUIFormControl ,
  MUIInput ,
  MUIInputLabel ,
} from "~/integrations/react/mui";

export default component$(() => {
  useStylesScoped$(styles);

  const store = useStore({
    name: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
  });

  // const handleClick = () => {
  //   console.log(store);
  // };

  return (
    <contact id="contact-section" class="flex w-full justify-center">
      <MUICard
        className="m-6 flex"
        sx={{ maxWidth: 369, borderRadius: 6 }}
        elevation={16}
      >
        <MUICardContent className="flex flex-col items-center">
          <MUITypography variant="h6">Formulario de contacto</MUITypography>
          <MUITypography variant="body1" className="pt-2" align="center">
            Solicita información adicional o una presentación de nuestros
            servicios.
          </MUITypography>
          <MUIStack
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              width: "25ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
            className="mt-6 items-center"
          >
            <MUIFormControl variant="standard">
              <MUIInputLabel htmlFor="form-name">Nombre: </MUIInputLabel>
              <MUIInput
                id="form-name"
                value={store.name}
                onChange$={() => {}}
              />
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
            <MUIFormControl variant="standard">
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
                multiline={true}
                rows={3}
                value={store.message}
                onChange$={() => {}}
              />
            </MUIFormControl>
            <MUIButton>Enviar</MUIButton>
            {/* onClick={() => handleClick} */}
          </MUIStack>
        </MUICardContent>
      </MUICard>
    </contact>
  );
});
