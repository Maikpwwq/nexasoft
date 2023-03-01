"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _mongodb = require("mongodb");

var dotenv = _interopRequireWildcard(require("dotenv"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable @typescript-eslint/no-var-requires */
// import type { Handler } from "@netlify/functions"; // , HandlerEvent, HandlerContext
// ,
// const { Handler } = require("@netlify/functions");
dotenv.config(); // Variables de entorno

var DB_USER = process.env.VITE_DB_USER;
var DB_PASSWORD = process.env.VITE_DB_PASSWORD;
var DB_HOST = process.env.VITE_DB_HOST;
var DB_NAME = process.env.VITE_DB_NAME;
var MONGODB_COLLECTION = "".concat(process.env.VITE_MONGODB_COLLECTION);
var MONGO_HOST = "mongodb+srv://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, "/?retryWrites=true&w=majority");
console.log("MONGO_HOST", MONGO_HOST);
var mongoClient = new _mongodb.MongoClient(MONGO_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: _mongodb.ServerApiVersion.v1
});
var clientPromise = mongoClient.connect(); // export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

var handler = function handler() {
  var database, collection, results;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("get_contacts");
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(clientPromise);

        case 4:
          _context.t0 = DB_NAME;
          database = _context.sent.db(_context.t0);
          collection = database.collection(MONGODB_COLLECTION);
          console.log("[db] Conectada con éxito", collection, MONGODB_COLLECTION);
          _context.next = 10;
          return regeneratorRuntime.awrap(collection.find().toArray());

        case 10:
          results = _context.sent;
          console.log("mongoClient", results);
          return _context.abrupt("return", {
            statusCode: 200,
            body: JSON.stringify(results)
          });

        case 15:
          _context.prev = 15;
          _context.t1 = _context["catch"](1);
          console.error("[db] Error", MONGO_HOST, _context.t1);
          return _context.abrupt("return", {
            statusCode: 500,
            body: _context.t1.toString()
          });

        case 19:
          _context.prev = 19;
          _context.next = 22;
          return regeneratorRuntime.awrap(mongoClient.close());

        case 22:
          return _context.finish(19);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 15, 19, 23]]);
};

exports.handler = handler;