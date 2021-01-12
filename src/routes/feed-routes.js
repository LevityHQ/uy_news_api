const { Router } = require('express');
const feedController = require('../controllers/feed-controller');
const router = new Router();
const auth = require('../middlewares/auth');

router.post('/', auth, feedController.create);

router.get('/:id', auth, feedController.findById);

router.put('/:id', auth, feedController.findByIdAndUpdate);

router.delete('/:id', auth, feedController.delete);

router.post('/find', auth, feedController.find);

module.exports = router;
