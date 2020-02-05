import mongoose from "mongoose";
import { inherits } from "util";

interface MongoDbConfig {
   server: String, 
   port: String,
   dbName: String;
} 

export const makeMongoDbUri = (config: MongoDbConfig) : string => {
    return "mongodb://"+config.server+":"+config.port+"/"+config.dbName;
}
// make singelton class
export class MongoDb {
    private static instance : MongoDb

    private constructor(){ ; }

    static getInstance() : MongoDb {
        if (!MongoDb.instance) {
            MongoDb.instance = new MongoDb();
        }
        return MongoDb.instance;
    }
   
    public async connect(config: MongoDbConfig) {
        console.log(makeMongoDbUri(config));
        await mongoose.connect(makeMongoDbUri(config), {useNewUrlParser: true, useUnifiedTopology: true});
        return mongoose.connection;
    }

    public async disconnect(){
        await mongoose.disconnect();
    }
}
export default MongoDb;