var User = require('../models/user');

module.exports = function(router) {
        
    router.route('/users')
        .post(function(req, res) {
            res.json({message: 'Add New User here.... '});
        });

    
    // middleware to use for all requests
    router.use(function(req, res, next) {
        next();
    });
    
    // Put all the links to the routes in here. 
    // Need to switch to doing with https://github.com/aseemk/requireDir, it will require a dir and loop through everything.
    // http://www.codekitchen.ca/guide-to-structuring-and-building-a-restful-api-using-express-4/
    require("./user")(router);
    
}