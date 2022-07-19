const  router  = require('express').Router();
const testCtrl = require('../controllers/testCtrl');

// api/movie/
router.route('/').get(testCtrl.getTests)


module.exports = router;