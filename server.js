var express = require("express"),
    route = require("./route/route"),
    parser= require("body-parser");
    app = express();
//var request = url.parse(req.url, true);


app.use(parser.json());
app.use('/api/', route);
app.use(express.static('public'));
app.listen(8000);