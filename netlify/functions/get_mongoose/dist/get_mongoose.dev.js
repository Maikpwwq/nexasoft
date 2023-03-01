"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var dotenv = _interopRequireWildcard(require("dotenv"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable @typescript-eslint/no-var-requires */
// import type { Handler } from "@netlify/functions"; // , HandlerEvent, HandlerContext
// ,
dotenv.config(); // Variables de entorno

var DB_USER = "".concat(process.env.VITE_DB_USER);
var DB_PASSWORD = "".concat(process.env.VITE_DB_PASSWORD);
var DB_HOST = "".concat(process.env.VITE_DB_HOST);
var DB_NAME = "".concat(process.env.VITE_DB_NAME);
var MONGODB_COLLECTION = "".concat(process.env.VITE_MONGODB_COLLECTION);
var MONGO_HOST = "mongodb+srv://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, "/?retryWrites=true&w=majority");
var schema = new _mongoose["default"].Schema({
  name: String,
  email: String,
  phone: String,
  issue: String,
  message: String
});
console.log("MONGOOSE_HOST", MONGO_HOST);

var clientPromise = _mongoose["default"].createConnection(MONGO_HOST, {
  dbName: DB_NAME,
  useNewUrlParser: true,
  // useCreateIndex: true, No suported
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.log("Connection error", err);
  }
});

var Contactos = clientPromise.model(MONGODB_COLLECTION, schema);

var handler = function handler() {
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // exports.handler = async () => {
          console.log("get_mongoose");
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Contactos.find() // .exec()
          // Await its fulfillment inside another async function, or chain onto it using .then blocks.
          .then(function (docs) {
            console.log("mongoDocs", docs);

            if (docs.length > 0) {
              return {
                statusCode: 200,
                body: JSON.stringify(docs) || docs
              };
            }
          }));

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);
          console.error("[db] Error", MONGO_HOST, _context.t0);
          return _context.abrupt("return", {
            statusCode: 500,
            body: _context.t0.toString()
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 6]]);
}; // export { clientPromise, handler };


exports.handler = handler;