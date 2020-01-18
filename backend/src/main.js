import express from "express";
import userInfo from "./routes/users.js";
import connectToMongo from "./utils/mongdb.js";
// TODO: outsource to config file
const mdbServer = '127.0.0.1:27017';
const mdbPport = '27017';
const mdb = 'test';
const app = express();
const port = 3000;
const router = express.Router();
connectToMongo({ server: mdbServer, port: mdbPport, db: mdb });
//app.get('/', (req, res) => res.send('Hello World!'));
app.use("/", userInfo(router));
app.listen(port, () => console.log(`Server started listening to port ${port}`));
