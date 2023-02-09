const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const connectDB = require('./server/database/connection');

const app = express();

// Loading port form env
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// Log Requests
app.use(morgan('tiny'));

// mongoDB connection
connectDB();

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// load routes
app.use('/', require('./server/routes/routes'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});