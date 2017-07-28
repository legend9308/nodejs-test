var express = require('express');
var router = express.Router();
var user = require('../controllers/user.js');
/* GET home page. */
router.get('/', user.index);
router.get('/reg',user.reg);
router.post('/reg',user.doreg);

router.get('/login',user.login);
router.post('/login',user.dologin);

module.exports = router;
