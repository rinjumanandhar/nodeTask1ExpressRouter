var express = require("express");
var router = express.Router();
var responses= require("./../promises/promises");

router.post('/post/p', responses.create);
router.get('/get/p', responses.findAll);
router.get('/get/:id/p', responses.findOne);
router.put('/update/:id/p', responses.update);
router.delete('/delete/:id/p', responses.delete);

module.exports = router;
