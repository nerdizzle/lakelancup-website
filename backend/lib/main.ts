import http from "http";

import express from "express";
import { getAdmin }from "./routes/users"

import connectToMongo, { MongoDb } from "./utils/mongdb";
import Admin from "./schemas/admin";

import createAdmin from './config/createAdmin';

// TODO: outsource to config file
//const mdbServer = '127.0.0.1:27017';
const mdbServer = 'lakelandcup-db';
const mdbPport= '27017';
const mdb = 'lakelandcup';

const app = express();
const port = 5001;

const db = MongoDb.getInstance();

db.connect({server: mdbServer, port: mdbPport, dbName: mdb}).then((db)=>{
    console.log("Connected to MongoDB ");
    const init = async () => {
        const admin = await Admin.find({username: "admin"});
        if(admin.length == 0){
            const newAdmin = await createAdmin();
            await Admin.create(newAdmin)
        } else {
            console.log("Admin already exists..");
            //console.log(admin);
        }
    } 
    init();
}).catch((error) => console.log(error));

const router = express.Router();

//connectToMongo({server: mdbServer, port: mdbPport, dbName: mdb});
app.get('/lakelandcup/api/', (req, res) => res.send('Hello World!'));
//app.use("/", userInfo(router));

app.listen(port, () => console.log(`Server started listening to port ${port}`));