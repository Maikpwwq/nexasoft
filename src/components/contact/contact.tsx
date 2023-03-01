import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import styles from "./contact.css?inline";

import {
  MUIButton,
  MUITypography,
  MUICard,
  MUICardContent,
  MUIStack,
  MUIFormControl,
  MUIInput,
  MUIInputLabel,
} from "~/integrations/react/mui";

// import ContactBtn from "./contact_btn";

// use the correct URL to connect serverless functions
// dev  http://localhost:8888/.netlify/functions/get_contacts/
// prod  https://nexasoft.netlify.app/.netlify/functions/get_contacts/

export default component$(() => {
  useStylesScoped$(styles);

  const store = useStore({
    name: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
  });

  const handleClick = async (store: Object ) => {
    console.log("handleClick", store);
    await fetch(
      "https://nexasoft.netlify.app/.netlify/functions/customer_record",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(store),
      }
    )
      .then((res) => {
        console.log("MongoRes", res);
        res.json();
      })
      .then((docs) => {
        console.log("My-docs", docs);
      });
  };

  return (
    <contact id="contact-section" class="flex w-full justify-center">
      <MUICard
        className="m-6 flex"
        sx={{ maxWidth: 369, borderRadius: 6 }}
        elevation={16}
      >
        <MUICardContent className="flex flex-col items-center">
          <MUITypography variant="h6" color={"var(--qwik-dark-blue)"}>
            Formulario de contacto
          </MUITypography>
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
                onChange$={(val) => {
                  store.name = val;
                  console.log(store);
                }}
              />
            </MUIFormControl>
            <MUIFormControl variant="standard" size="small">
              <MUIInputLabel htmlFor="form-email">
                Correo electrónico:{" "}
              </MUIInputLabel>
              <MUIInput
                id="form-email"
                value={store.email}
                onChange$={(val) => {
                  store.email = val;
                }}
              />
            </MUIFormControl>
            <MUIFormControl variant="standard">
              <MUIInputLabel htmlFor="form-phone"> Teléfono: </MUIInputLabel>
              <MUIInput
                id="form-phone"
                value={store.phone}
                onChange$={(val) => {
                  store.phone = val;
                }}
              />
            </MUIFormControl>
            <MUIFormControl variant="standard">
              <MUIInputLabel htmlFor="form-issue">Asunto: </MUIInputLabel>
              <MUIInput
                id="form-issue"
                value={store.issue}
                onChange$={(val) => {
                  store.issue = val;
                }}
              />
            </MUIFormControl>
            <MUIFormControl variant="standard">
              <MUIInputLabel htmlFor="form-message">Mensaje: </MUIInputLabel>
              <MUIInput
                id="form-message"
                multiline={true}
                rows={3}
                value={store.message}
                onChange$={(val) => {
                  store.message = val;
                }}
              />
            </MUIFormControl>
            <MUIButton onClick$={handleClick(store)}>Enviar</MUIButton>
            {/* <ContactBtn store={store}/> */}
          </MUIStack>
        </MUICardContent>
      </MUICard>
    </contact>
  );
});
