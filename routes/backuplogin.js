var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.connect("mongodb://localhost:27017/test");
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());
var db = mongoose.connection;

db.once("open", function(callback) {
    console.log("Connection succeeded.");
})
var Schema = mongoose.Schema;


var userschema = new Schema({
    fullname:  {type:String},
    email:{type:String, unique:true},
    Password:String




});


var user = mongoose.model('users', userschema);
/*var query = continent.find({});
query.exec(function (err, continents) {
    if (err) throw err;
    //console.log(countries);
    //res.render('continentss', { title: 'WORLD MAP',list:continents});
    console.log(continents);
})*/

//remove mechanics
/*continent.remove({}, function(err) {
    console.log('collection removed')
});*/


/* GET users listing. */
router.get('/users/:email/:password', function(req, res, next) {

console.log(req.params.email);
    var query = user.findOne({'email':req.params.email});
    res.type('json');
    query.exec(function (err, users) {
        if (err) throw err;
        //console.log(countries);
        //res.render('continentss', { title: 'WORLD MAP',list:continents});
console.log(req.params.password);
       if(users && users.Password != req.params.password)
       {res.json({ error: 'incorrect' })}

       else if (!users || users.email != req.params.email)
        {res.json({ error: 'usernotfound' })}
        else
            res.json(users);

    });
});
router.post('/register',function (req,res) {

    /*var r = new country({
        countryname: req.body.Countryname,
        continentid: req.body.Continentid,
        population: req.body.Population
    });


    r.save(function (err) {
        var error = r.validateSync();
        if (err) throw err;
        console.log("saved");


});*/
    var a=0;





        user.create(
                req.body

            ,    function (error, todo) {


                if (error) {
                    throw error;
                }
                res.json({msg:'success'});
                console.log('created');

            }
        );



    // res.redirect('/');

});

module.exports = router;
