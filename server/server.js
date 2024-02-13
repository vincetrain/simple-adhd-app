const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 5000;  // use whatever is specified in PORT, or 5000 if PORT is null
app.use(cors());
app.use(express.json());

const mongo = require("./db/connection");

// connect to database with driver connection
app.listen(port, () => {
    mongo.establishConnection( function (callback) {
        if (callback) {
            console.error("Unable to connect to MongoDB.");
        }
        else {
            console.log("Established connection with MongoDB.");
        }
    });
    console.log(`Server running on port: ${port}`);
});