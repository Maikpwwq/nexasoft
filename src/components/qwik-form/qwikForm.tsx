import { component$, useSignal } from "@builder.io/qwik";
import { server$, Form } from "@builder.io/qwik-city";
import { MUITypography } from "~/integrations/react/mui";

const styles = () => ({
  formFlex: {
    display: "flex",
    flexDirection: "column",
  },
  inputStyle: {
    color: "black",
    margin: "0.5rem 0",
    border: "2px solid white",
    borderRadius: "13px",
    padding: "0.5rem 0.5rem",
    backgroundColor: "aliceblue",
  },
  labelStyle: {
    position: "relative",
    textAlign: "start",
  },
  btnStyle: {
    margin: "0.5rem 0",
    padding: "0.75rem 0",
    backgroundColor: "var(--qwik-light-blue)",
    color: "var(--qwik-dark-text)",
  },
  sheetFormStyle: {
    maxWidth: "330px",
    margin: "33px 0",
  },
});

let successful = false;

// use the correct URL to connect functions
// dev  http://localhost:5173/customer-record
// prod  https://nexasoft.dev/customer-record

const fetchCustomerRecord = async (customerRecord: any) => {
  await fetch(
    "http://localhost:5173/customer-record",
    // "https://nexasoft.dev/customer-record",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerRecord),
    }
  ).then((res) => {
    // console.log("fetchCustomerRecord", res);
    const statusCode = res.status;
    if (statusCode === 303) {
      successful = true;
    }
    // console.log("statusCode", statusCode, successful);
    return statusCode;
  });
};

const addCustomer = server$(async (data) => {
  // This will only run on the server when the user submits the form (or when the action is called programatically)
  const customerRecord = {
    name: data.name.value,
    email: data.email.value,
    phone: data.phone.value,
    issue: data.issue.value,
    message: data.message.value,
  };
  // console.log("customerRecord", customerRecord);
  const respuesta: any = await fetchCustomerRecord(customerRecord);
  return {
    successful,
    respuesta,
  };
});

export default component$(() => {
  const classes = styles();
  const formData = {
    name: useSignal(""),
    email: useSignal(""),
    phone: useSignal(""),
    issue: useSignal(""),
    message: useSignal(""),
  };

  return (
    <div style={classes.sheetFormStyle}>
      <MUITypography variant="h6" color={"var(--qwik-dark-blue)"}>
        Formulario de contacto
      </MUITypography>
      <MUITypography variant="body1" className="pt-2 pb-4" align="center">
        Solicita información adicional o una presentación de nuestros servicios.
      </MUITypography>
      <Form
        //   action={action}
        style={classes.formFlex}
      >
        <label for="form-name" style={classes.labelStyle}>
          Nombre:{" "}
        </label>
        <input
          id="form-name"
          name="fullName"
          type="text"
          style={classes.inputStyle}
          bind:value={formData.name}
        />
        <label for="form-email" style={classes.labelStyle}>
          Correo electrónico:{" "}
        </label>
        <input
          id="form-email"
          name="email"
          type="email"
          style={classes.inputStyle}
          bind:value={formData.email}
        />
        <label for="form-phone" style={classes.labelStyle}>
          Teléfono:{" "}
        </label>
        <input
          id="form-phone"
          name="phone"
          type="phone"
          style={classes.inputStyle}
          bind:value={formData.phone}
        />
        <label for="form-issue" style={classes.labelStyle}>
          Asunto:{" "}
        </label>
        <input
          id="form-issue"
          name="issue"
          type="text"
          style={classes.inputStyle}
          bind:value={formData.issue}
        />
        <label for="form-message" style={classes.labelStyle}>
          Mensaje:{" "}
        </label>
        <textarea
          id="form-message"
          rows={7}
          name="message"
          style={classes.inputStyle}
          bind:value={formData.message}
        />
        <button
          type="submit"
          style={classes.btnStyle}
          onClick$={async () => {
            const greeting = await addCustomer(formData);
            // console.log("greeting", greeting.successful);
            if (greeting.successful) {
              alert("Gracias, su mensaje ha sido recibido.");
            }
          }}
        >
          Enviar
        </button>
      </Form>
      {/* {successful && (
        // When the action is done successfully, the `action.value` property will contain the return value of the action
        <p>Gracias, su mensaje ha sido recibido.</p>
      )} */}
    </div>
  );
});
