const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);    // establish connection to Mongo using MongoClient

var _db;

module.exports = {
    /**
     * Attempts to establish a connection with the MongoDB database. Calls callback function with errorcode if error occurs.
     * @param {function} callback 
     */
    establishConnection: async function (callback) {
        try {
            await client.connect();
            _db = await client.db("userbase");
            callback(null);
        } catch (e) {
            callback(e);
        }
    },

    getDb: function () {                       
        return _db;
    }
}

