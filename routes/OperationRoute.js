const express = require('express')
const OperationController = require('../controllers/OperationController')
const router = express.Router();
router.get('/', OperationController.findAll);

router.post('/', OperationController.create);
router.patch('/:email', OperationController.update);

router.delete('/:email', OperationController.destroy);


module.exports = router