const Response = require('./../model/model');

let response;

//create data controller
exports.create_data = function (req, res) {

    response = new Response(
        {
            username: req.body.username,
            age: req.body.age
        }
    );

    response.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
}; 


//get all the database stored values
exports.retrieve_all = function (req, res) {

    Response.find(function (err, response) {
        if (err) return next(err);
        res.send(response);         
    })
};


//get one stored value by ID
exports.retrieve_one = function (req, res) {

    Response.findById(req.params.id, function (err, response) {
        if (err) return next(err);
        res.send(response);         
    })
};


//update the database stored value by ID
exports.update_data = function (req, res) {
    Response.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    
    });
};


//delete database stored values by ID
exports.delete_data = function (req, res) {
    Response.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
