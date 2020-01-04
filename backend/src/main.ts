import http from "http";
import express from "express";
import subscriberInfo from "./routes/subscriberRoute.js"
import apiInfo from "./routes/defaultRoute.js"


const app = express();
const port = 3000;

const router = express.Router();

//app.get('/', (req, res) => res.send('Hello World!'));
app.use("/", [subscriberInfo(router), apiInfo(router)]);
app.listen(port, () => console.log(`Server started listening to port ${port}`));