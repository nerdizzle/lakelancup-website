import mongoose from "mongoose";
function connectDb(config) {
    const uri = "mongodb://" + config.server + ":" + config.port + "/" + config.db;
    mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
        console.log('Successful database connection to ' + uri + " ");
    }).catch(err => {
        console.error('Database connection error');
    });
}
;
export { connectDb };
export default connectDb;
