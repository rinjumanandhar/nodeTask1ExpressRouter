var express = require("express"),
    app = express();

exports.postfunction = function (req, res) {
    const response = {
        username: req.body,
        age: req.body
    };
    //console.log(req.body);
    res.send(JSON.stringify(response));
}; 

exports.getfunction = function (req, res) {
    res.send("Hello and Welcome!!!");

};