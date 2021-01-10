const { Router } = require('express');
const healthController = require('../controllers/health-controller');
const router = new Router();

router.get('/', healthController.health);

module.exports = router;
