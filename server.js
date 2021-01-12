const { logger, loggerMiddleware, errorLoggerMiddleware } = require('./util/logger');
const mongoose = require('mongoose');
const pJson = require('./package');
const mongoOptions = require('./mongoConfig');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENV;
const MONGODB_URI = process.env.MONGODB_URI;
const healthRoute = require('./src/routes/health-routes');
const authRoutes = require('./src/routes/auth-routes');
const userRoutes = require('./src/routes/user-routes');
const feedRoutes = require('./src/routes/feed-routes');
const newsRoutes = require('./src/routes/news-routes');

(function connect () {
    mongoose.connect(MONGODB_URI,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, mongoOptions)
        .then(() => logger.info('Success connection to database' + ENVIRONMENT))
        .catch(err => {
            logger.info(err);
            setTimeout(connect, 35000);
        });
})();

const app = express();
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(loggerMiddleware);
app.use('/health', healthRoute);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/feed', feedRoutes);
app.use('/news', newsRoutes);
app.use(errorLoggerMiddleware);

app.listen(PORT, () => logger.info(`${pJson.name} - is live @ ${PORT} on ${ENVIRONMENT}`));

module.exports = app;
