const express = require('express')
const router = express.Router();

const dataController = require('../controllers/dataAccess');

router.get('/data-access', dataController.getDataAccess);


module.exports = router;