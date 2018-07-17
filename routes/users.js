var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.connect("mongodb://localhost:27017/test");
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
country =require('./models/country')
// parse application/json
router.use(bodyParser.json());
var db = mongoose.connection;

db.once("open", function(callback) {
    console.log("Connection succeeded.");
})
var Schema = mongoose.Schema;
//var country = mongoose.model('country', countryschema);
var country = mongoose.model('country');
var continentschema = new Schema({
    continentname:  {type:String, required:true},
    continentlocation:String,
    population:Number,
    numberofcount:Number,
    countries: Array




});


var continent = mongoose.model('continent', continentschema);
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
});


/* GET users listing. */
router.get('/continents/:id',function (req,res) {
    continent.deleteOne({_id:req.params.id}, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document


    });
})

router.post('/addcontinent/:id',function (req,res) {
    var query = country.find({ continentid: req.body.continentname },{});
    query.exec(function (err, resul) {
        //console.log(resul);
        var a=0;
        for (var i = 0; i < resul.length; i++) {
            a = a + resul[i].population;
            console.log(a);


        }

        continent.findByIdAndUpdate(req.params.id, {$set: {continentname:req.body.continentname, continentlocation:req.body.continentlocation,countries:resul,population:a}}, function (err, country) {
            if (err) return handleError(err);
            res.json(country);
        });
    })
})



router.get('/continents', function(req, res, next) {
    var query = continent.find({});
    query.exec(function (err, continents) {
        if (err) throw err;
        //console.log(countries);
       //res.render('continentss', { title: 'WORLD MAP',list:continents});
        res.json(continents);

    });
});

router.post('/addcontinent',function (req,res) {
    console.log("h");
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

    var query = country.find({ continentid: req.body.continentname },{});
    query.exec(function (err, resul) {
      //console.log(resul);
for (var i=0;i<resul.length;i++)
{
  a=a+resul[i].population;
  console.log(a);


}


    continent.create({
        continentname: req.body.continentname,
        continentlocation: req.body.continentlocation,
            population: a,
        numberofcount:resul.length,
        countries:resul

        },    function (error, todo) {


            if (error) {
                throw error;
            }
            console.log('created');

        }
    );

    });

   // res.redirect('/');

});

module.exports = router;
