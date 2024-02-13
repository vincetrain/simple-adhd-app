const express = require("express");
const mongo = require("../db/connection");
const router = express.Router();

var db = mongo.getDb();