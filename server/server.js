import config from "./../config/config";
import app from "./express";
import mongoose, { Error } from "mongoose";

app.listen(config.port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`Server started on port: ${config.port}`);
});

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`);
});
