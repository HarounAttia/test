var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.connect("mongodb://localhost:27017/test");

var db = mongoose.connection;
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
db.once("open", function(callback) {
         console.log("Connection succeeded.");
    })
var Schema = mongoose.Schema;
;
var country=require('./models/country')
// parse application/json
router.use(bodyParser.json())
/*var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only',
    }),
];
var countryschema = new Schema({
    countryname:  {type:String, required:true, validate:nameValidator},
    continentid:{type:String, required:true},
    createdatdate: { type: Date, default: Date.now() },
    population:{type:Number, required:'enter the popoulation'},



});var country = mongoose.model('country', countryschema);
*/
var continent = mongoose.model('continent');



//remove mechanics
/*country.remove({}, function(err) {
    console.log('countries removed')
});
/*country.findOneAndRemove({'countryname':"Egypt"}, function (err, e) {
    if (err) {
      throw err;
    }

})*/



router.get('/countries/:id',function (req,res) {
    var c;
    var query = country.findOne({_id: req.params.id},{}
    );
    if (query)
    query.exec(function (err,result) {

        c=result.continentid;



    country.deleteOne({_id:req.params.id}, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document


    });
    var query = country.find({ continentid: c},{}
    );
    query.exec(function (err, resul) {
        //console.log(resul);
        var a=0;
        //resul.push(todo);
        for (var i = 0; i < resul.length; i++) {
            a = a + resul[i].population;
            //console.log(a);


        }


        continent.update({continentname:c}, {$set: {countries:resul,population:a,numberofcount:  resul.length}}, function (err, data) {
            if (err) return handleError(err);
            console.log(data);
        });
    })

    })
})
/* GET home page. */
router.get('/', function(req, res, next) {
    var query = country.find({});
    query.exec(function (err, countries) {
        if (err) throw err;
        //console.log(countries);
        res.render('index', { title: 'WORLD MAP',list:countries});

    });

});

router.post('/addcountry',function (req,res) {
    console.log("h");






    country.create(req.body

    ,    function (error, todo) {


            if (error) {
                throw error;
            }



var query = country.find({ continentid: req.body.continentid },{}
);
query.exec(function (err, resul) {
    //console.log(resul);
    var a=0;
    //resul.push(todo);
    for (var i = 0; i < resul.length; i++) {
        a = a + resul[i].population;
        //console.log(a);


    }


    continent.update({continentname:req.body.continentid}, {$set: {countries:resul,population:a,  numberofcount:resul.length}}, function (err, data) {
        if (err) return handleError(err);
        console.log(data);
    });
    }

)
})




   // res.redirect('/');

});

router.post('/addcountry/:id',function (req,res) {
console.log(req.params.id);

        country.findByIdAndUpdate(req.params.id, {$set: {countryname:req.body.countryname, population:req.body.population,continentid:req.body.continentid}}, function (err, country) {
            if (err) throw err

            res.json(country);

        });
    var query = country.find({ continentid: req.body.continentid },{}
    );
    query.exec(function (err, resul) {
            //console.log(resul);
            var a=0;
            //resul.push(todo);
            for (var i = 0; i < resul.length; i++) {
                a = a + resul[i].population;
                //console.log(a);


            }


            continent.update({continentname:req.body.continentid}, {$set: {countries:resul,population:a}}, function (err, data) {
                if (err) return handleError(err);
                console.log(data);
            });
        }

    )

})
router.get('/countries',function (req,res) {
    var query = country.find({}).sort({continentid:1});
    query.exec(function (err, countries) {
        if (err) throw err;
        //console.log(countries);
       // res.render('countries', { title: 'WORLD MAP',list:countries});
        res.json(countries);
    });

});

module.exports = router;
