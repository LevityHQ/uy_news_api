require('dotenv').config();
const winston = require('winston');
const expressWinston = require('express-winston');
const os = require('os');
const pJson = require('../package.json');
require('winston-daily-rotate-file');
const level = process.env.LOGS_LEVEL;
const NODE_ENV = process.env.NODE_ENV;
const consoleTransport = new winston.transports.Console({ level: level });

const transportDailyRotate = new (winston.transports.DailyRotateFile)({
    level: level,
    filename: `${pJson.name}-%DATE%.log`,
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: false,
    maxSize: '20m'
});

const logger = winston.createLogger({
    defaultMeta: {
        appInfo: {
            name: pJson.name,
            version: pJson.version,
            environment: NODE_ENV
        },
        os: {
            hostname: os.hostname()
        }
    },
    transports: [
        consoleTransport,
        transportDailyRotate
    ]
});

const loggerMiddleware = expressWinston.logger({
    winstonInstance: logger,
    requestWhitelist: ['url', 'headers', 'method', 'httpVersion', 'originalUrl', 'query', 'body'],
    responseWhitelist: ['headersSent', 'statusCode', 'locals', 'body']
});

const errorLoggerMiddleware = expressWinston.errorLogger({
    winstonInstance: logger,
    requestWhitelist: ['url', 'headers', 'method', 'httpVersion', 'originalUrl', 'query', 'body'],
    responseWhitelist: ['headersSent', 'statusCode', 'locals', 'body']
});

module.exports = {
    logger,
    loggerMiddleware,
    errorLoggerMiddleware
};
