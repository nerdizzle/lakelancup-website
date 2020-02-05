import mongoose from "mongoose";
export const makeMongoDbUri = (config) => {
    return "mongodb://" + config.server + ":" + config.port + "/" + config.dbName;
};
// make singelton class
export class MongoDb {
    constructor() { ; }
    static getInstance() {
        if (!MongoDb.instance) {
            MongoDb.instance = new MongoDb();
        }
        return MongoDb.instance;
    }
    async connect(config) {
        console.log(makeMongoDbUri(config));
        await mongoose.connect(makeMongoDbUri(config), { useNewUrlParser: true, useUnifiedTopology: true });
        return mongoose.connection;
    }
    async disconnect() {
        await mongoose.disconnect();
    }
}
export default MongoDb;
