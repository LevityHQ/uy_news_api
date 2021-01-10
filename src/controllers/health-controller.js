const pjson = require('../../package');

const alive = {
    'alive': true,
    'name': pjson.name,
    'version': pjson.version
};

class HealthController {
    async health(req, res) {
        res.status(200).send(alive);
    }
}

module.exports = new HealthController();
