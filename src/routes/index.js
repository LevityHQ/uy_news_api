const healthCheckRoutes = require('./health');
const userRoutes = require('./user-routes');

module.exports = (app) => {
    healthCheckRoutes(app);
    userRoutes(app);
};
