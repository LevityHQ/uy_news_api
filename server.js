const { logger, loggerMiddleware, errorLoggerMiddleware } = require('./util/logger');
//const mongoose = require('mongoose');
const pJson = require('./package');
//const mongoOptions = require('./mongoConfig');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENV;
//const MONGODB_URI = process.env.MONGODB_URI;
/*
(function connect () {
    mongoose.connect(MONGODB_URI,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, mongoOptions)
        .then(() => logger.info('Success connection to database' + environment))
        .catch(err => {
            logger.info(err);
            setTimeout(connect, 35000);
        });
})();*/

const app = express();
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(loggerMiddleware);
app.use(errorLoggerMiddleware);

require('./src/routes')(app);

app.listen(PORT, () => logger.info(`${pJson.name} - is live @ ${PORT} on ${ENVIRONMENT}`));

module.exports = app;
