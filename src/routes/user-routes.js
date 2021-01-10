const { Router } = require('express');
const userController = require('../controllers/user-controller');
const router = new Router();
const auth = require('../middlewares/auth');

router.post('/', auth, userController.create);

router.get('/:id', auth, userController.findById);

router.put('/:id', auth, userController.findByIdAndUpdate);

router.delete('/:id', auth, userController.delete);

router.post('/find', auth, userController.find);

module.exports = router;
