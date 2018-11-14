var express = require("express");
var route = require("./route/route");
var app = express();

app.use('/api/', route);
app.listen(7500);