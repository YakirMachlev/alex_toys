const express = require('express')
const toyControllers = require('../controllers/toyControllers')
const { verifyToken } = require('../middlewares/authJwt')
const router = express.Router()

router.route('/')
    .get(toyControllers.getToys)
    .post([verifyToken], toyControllers.createToy)

router.route('/search')
    .get(toyControllers.fillterToys)

router.route('/category/:catname')
    .get(toyControllers.getToyByCat)

router.route('/:editId')
    .put([verifyToken], toyControllers.updateToy)

router.route('/:delId')
    .delete([verifyToken], toyControllers.deleteToy)

router.route('/prices')
    .get(toyControllers.fillterToysByPrice)

router.route('/single/:id')
    .get(toyControllers.getToyById)

module.exports = router;