import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors"

const { MONGO_URL, PORT } = process.env;

const corsPolicy = {
    origin: "http://localhost:3000",
    headers: "Content-Type, Authorization",
    method: "GET, POST, PUT, DELETE"
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("something");
});

(async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    }
    catch (error) {
        console.error(error);
        app.close();
    }
})