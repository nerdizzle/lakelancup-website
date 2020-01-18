import http from "http";
import express from "express";
import userInfo from "./routes/users"


const app = express();
const port = 3000;

const router = express.Router();

//app.get('/', (req, res) => res.send('Hello World!'));
app.use("/", userInfo(router));
app.listen(port, () => console.log(`Server started listening to port ${port}`));