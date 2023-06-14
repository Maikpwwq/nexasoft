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
import { TextareaAutosize } from "@mui/base";
import { useState } from "react";

const FormContacto = () => {
  const [store, setStore] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
  });

  return (
    <>
      <Card
        className="m-6 flex hover:rounded-3xl"
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
            method="post"
            // onSubmit={fetchCustomerRecord}
            action="/customer-record"
          >
            <FormControl variant="standard" className="m-0 mt-4" size="small">
              <InputLabel sx={{ position: "relative" }} htmlFor="form-name">
                Nombre:{" "}
              </InputLabel>
              <Input
                id="form-name"
                name="name"
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
                name="email"
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
                name="phone"
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
                name="issue"
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
              <TextareaAutosize
                id="form-message"
                name="message"
                minRows={5}
                maxRows={48}
                style={{ height: "auto" }}
                value={store.message}
                onChange={(event: any) => {
                  setStore({ ...store, message: event });
                  console.log(store, event);
                }}
              />
            </FormControl>
            <FormControl variant="standard" size="small">
              <Button
                type="submit"
                className="button"
                sx={{ marginTop: "3rem" }}
              >
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
