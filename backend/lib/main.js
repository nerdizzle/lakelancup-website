import express from "express";
import { MongoDb } from './utils/mongdb.js';
import Admin from './schemas/admin.js';
import createAdmin from './config/createAdmin.js';
// TODO: outsource to config file
const mdbServer = '127.0.0.1:27017';
const mdbPport = '27017';
const mdb = 'lakelandcup';
const app = express();
const port = 3000;
const db = MongoDb.getInstance();
db.connect({ server: mdbServer, port: mdbPport, dbName: mdb }).then((db) => {
    console.log("Connected to MongoDB ");
    const init = async () => {
        const admin = await Admin.find({ username: "admin" });
        if (admin.length == 0) {
            const newAdmin = await createAdmin();
            await Admin.create(newAdmin);
        }
        else {
            console.log("Admin already exists..");
            //console.log(admin);
        }
    };
    init();
});
const router = express.Router();
//connectToMongo({server: mdbServer, port: mdbPport, dbName: mdb});
//app.get('/', (req, res) => res.send('Hello World!'));
//app.use("/", userInfo(router));
app.listen(port, () => console.log(`Server started listening to port ${port}`));
