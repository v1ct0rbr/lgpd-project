const express = require('express')
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.getIndex);
router.get('/privacy-policy', mainController.getPrivacyPolicy);
router.get('/terms-of-use', mainController.getTermOfUse);

module.exports = router;