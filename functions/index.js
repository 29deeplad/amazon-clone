const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51MzyZySEqYUPU3aR2hicUuBstx44RBrvrkawm8e3iQaKPRRWLd1y2qygLkdZ0GM4lEqyG4LTNzEU7jQV7fljYI1100q1MxCJKq"
);

const app = express();
app.use(cores({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello From Cloud"));


/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const { request } = require("http");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);