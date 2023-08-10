import mongoose from "mongoose"; // ,

const DB_USER = `${import.meta.env.VITE_DB_USER}`;
// const DB_PASSWORD = `${process.env.VITE_DB_PASSWORD}`;
const DB_PASSWORD2 = `${import.meta.env.VITE_DB_PASSWORD2}`;
const DB_NAME = `${import.meta.env.VITE_DB_NAME}`;
const MONGO_HOST = `${import.meta.env.VITE_MONGO_HOST}`;

const options = {
  dbName: DB_NAME,
  user: DB_USER,
  pass: DB_PASSWORD2,
};
// useNewUrlParser: true,
// useUnifiedTopology: true,

const dbPromise = await mongoose.connect(
  MONGO_HOST,
  options
);

export default dbPromise;
