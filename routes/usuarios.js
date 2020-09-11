var express = require('express');
var router = express.Router();
let usuariosController = require('../controllers/usuariosController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registrate', usuariosController.registro)

module.exports = router;
