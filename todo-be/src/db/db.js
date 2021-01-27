import { Mongoose } from "mongoose";

class DB {

    constructor() {
        this.connection = undefined;
    }

    get conncetion() {
        if (this.connection) {
            return this.connection;
        }
        this.connect().then((con) => {
            this.connection = con;
        }).catch((error) => {
            console.log(error.message);
        });
        return this.connection;
    }

    async connect() {
        return await Mongoose.connect("mongodb://" + config.db.host + ":" + config.db.port + "/" + config.db.name, { useNewUrlParser: true })
            .then(() => console.log("Connected to DB"))
            .catch((error) => console.log('Connection to DB failed: ', error.message));
    }

}

export default DB;