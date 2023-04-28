/** @jsxImportSource react */
import {
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const FormContacto = () => {
  const [store, setStore] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
  });

  const handleClick = async (store: Object) => {
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
        return res.json();
      })
      .then((docs) => {
        console.log("My-docs", docs);
      });
  };

  return (
    <>
      <Card
        className="m-6 flex"
        sx={{ maxWidth: 369, borderRadius: 6 }}
        elevation={16}
      >
        <CardContent className="flex flex-col items-center">
          <Typography variant="h6" color={"var(--qwik-dark-blue)"}>
            Formulario de contacto
          </Typography>
          <Typography variant="body1" className="pt-2" align="center">
            Solicita información adicional o una presentación de nuestros
            servicios.
          </Typography>
          <Stack
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              width: "25ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
            className="mt-2 items-center"
            onSubmit={handleClick}
          >
            <FormControl variant="standard" className="m-0 mt-4" size="small">
              <InputLabel sx={{ position: "relative" }} htmlFor="form-name">
                Nombre:{" "}
              </InputLabel>
              <Input
                id="form-name"
                value={store.name}
                onChange={(event: any) => {
                  setStore({ ...store, name: event });
                  console.log(store, event);
                }}
              />
            </FormControl>
            <FormControl variant="standard" size="small">
              <InputLabel sx={{ position: "relative" }} htmlFor="form-email">
                Correo electrónico:{" "}
              </InputLabel>
              <Input
                id="form-email"
                value={store.email}
                onChange={(event: any) => {
                  setStore({ ...store, email: event });
                  console.log(store, event);
                }}
              />
            </FormControl>
            <FormControl variant="standard" size="small">
              <InputLabel sx={{ position: "relative" }} htmlFor="form-phone">
                Teléfono:{" "}
              </InputLabel>
              <Input
                id="form-phone"
                value={store.phone}
                onChange={(event: any) => {
                  setStore({ ...store, phone: event });
                  console.log(store, event);
                }}
              />
            </FormControl>
            <FormControl variant="standard" size="small">
              <InputLabel sx={{ position: "relative" }} htmlFor="form-issue">
                Asunto:{" "}
              </InputLabel>
              <Input
                id="form-issue"
                value={store.issue}
                onChange={(event: any) => {
                  setStore({ ...store, issue: event });
                  console.log(store, event);
                }}
              />
            </FormControl>
            <FormControl variant="standard" size="small">
              <InputLabel sx={{ position: "relative" }} htmlFor="form-message">
                Mensaje:{" "}
              </InputLabel>
              <Input
                id="form-message"
                multiline
                rows={"3"}
                value={store.message}
                onChange={(event: any) => {
                  setStore({ ...store, message: event });
                  console.log(store, event);
                }}
              />
            </FormControl>
            <FormControl
              sx={{ paddingTop: "16px" }}
              variant="standard"
              size="small"
            >
              <Button type="submit" onClick={() => handleClick(store)}>
                Enviar
              </Button>
            </FormControl>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default FormContacto;
