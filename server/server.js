const cors = require('cors');
const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5000;  // use whatever is specified in PORT, or 5000 if PORT is null