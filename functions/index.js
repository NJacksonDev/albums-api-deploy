import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { createNewAlbum, getAllAlbums } from "./src/albums.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/albums', getAllAlbums)
app.post('/albums', createNewAlbum)

export const api = functions.https.onRequest(app)



// call this api because this is what we call it in firebase.json

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
