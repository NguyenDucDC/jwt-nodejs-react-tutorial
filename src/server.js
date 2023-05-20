import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

import bodyParser from 'body-parser';



//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log(">>> JWT Backend is the running on the port = " + PORT);
})