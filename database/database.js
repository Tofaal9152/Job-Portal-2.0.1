import mongoose from "mongoose";

const database = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI,{
            dbName:"Portal"
        })
        const connection = mongoose.connection
        connection.on("connected", () => {
            console.log("Database connected");
        })

        connection.on("error", () => {
            console.log("Database disconnected");
            process.exit()
        })
    } catch (error) {
        console.log("Internal server failed Database");
    }
}

export default database;