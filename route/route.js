var express = require("express");
var router = express.Router();
var postcontroller= require("./../controller/file");


router.post('/post', postcontroller.postfunction);

router.get('/get', postcontroller.getfunction);


module.exports = router;
