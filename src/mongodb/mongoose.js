import mongoose from "mongoose";

// Variables de entorno
const DB_USER = import.meta.env.VITE_DB_USER;
const DB_PASSWORD = import.meta.env.VITE_DB_PASSWORD;
// const DB_HOST = import.meta.env.VITE_DB_HOST;

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://DB_USER:DB_PASSWORD@127.0.0.1:27017/test');` if your database has auth enabled
  await mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@127.0.0.1:27017/test`
  );

  // Schemas
  const contactSchema = new mongoose.Schema({
    name: String,
    cedula: String,
    genero: String,
  });

  // Models
  const Contact = mongoose.model("Contact", contactSchema);

  // New  Contact
  const silence = new Contact({ name: "Silence", cedula: "", genero: "" });
  console.log(silence.name); // 'Silence'
}
