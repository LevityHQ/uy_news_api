const { Router } = require('express');
const newsController = require('../controllers/news-controller');
const router = new Router();
const auth = require('../middlewares/auth');

router.post('/', auth, newsController.create);

router.get('/:id', auth, newsController.findById);

router.put('/:id', auth, newsController.findByIdAndUpdate);

router.delete('/:id', auth, newsController.delete);

router.post('/find', auth, newsController.find);

module.exports = router;
