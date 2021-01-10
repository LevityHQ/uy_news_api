const pjson = require('../../package');

const alive = {
    'alive': true,
    'name': pjson.name,
    'version': pjson.version
};

module.exports = (app) => {
    /***
     * Health Route
     */
    app.get('/health', async (req, res) => {
        res.status(200).send(alive);
    });
};
