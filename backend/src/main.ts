import http from "http";
import express from "express";
import userInfo from "./routes/users"

import connectToMongo, { MongoDb } from "./utils/mongdb";
import User from "./schemas/user";

// TODO: outsource to config file
const mdbServer = '127.0.0.1:27017';
const mdbPport= '27017';
const mdb = 'lakelandcup';

const app = express();
const port = 3000;

const db = MongoDb.getInstance();
//console.log(db.getDb());
db.connect({server: mdbServer, port: mdbPport, dbName: mdb}).then((db)=>{
    console.log("connected to mongodb..");
    const testPerson = {
        firstName : "Max",
    lastName : "Muster",
    email: "max.muster@gmail.com",
    password: "hallo123",
    };
    User.create(testPerson);
});

const router = express.Router();

//connectToMongo({server: mdbServer, port: mdbPport, dbName: mdb});
//app.get('/', (req, res) => res.send('Hello World!'));

app.use("/", userInfo(router));
app.listen(port, () => console.log(`Server started listening to port ${port}`));