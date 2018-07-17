var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.connect("mongodb://localhost:27017/test");
var bodyParser=require('body-parser');
var crypto = require('crypto')
router.use(bodyParser.urlencoded({ extended: false }));
var jwt = require('jsonwebtoken');
var config= require('./config/config')
// parse application/json
router.use(bodyParser.json());
var db = mongoose.connection;
var bcrypt = require('bcryptjs');
db.once("open", function(callback) {
    console.log("Connection succeeded.");
})
var Schema = mongoose.Schema;


var userschema = new Schema({
    fullname:  {type:String},
    email:{type:String, unique:true},
    Password:String,
    hash: String,
    salt: String,
    token: String




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
router.post('/registers', function(req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    user.create({
            fullname : req.body.fullname,
            email : req.body.email,
            Password : hashedPassword
        },
        function (err, users) {
            //if (err) return res.status(500).send("There was a problem registering the user.")

            // create a token
            var token = jwt.sign({ id: users._id,
            name:users.fullname}, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            user.updateOne({email:req.body.email},{$set:{token:token}},function(err,ss){console.log(ss)})

            res.status(200).send({ auth: true, token: token });
        });
});router.post('/me', function(req, res) {

   // var token = req.headers['x-access-token'];
    user.findOne({'email':req.body.email},function(err,Use){if(Use)
    {

        bcrypt.compare(req.body.Password,Use.Password,function(err,match){if(match){
        res.json({sucess:Use.token});


        ;}
        else
            res.json({error:'password mismatch'})

        })}
        else {res.json({error:'user not found'})}


    });

// get the decoded payload and header

    /*if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
        console.log(config.secret)
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    console.log(decoded)
        res.json(decoded);
    });*/
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
