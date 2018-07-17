
var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var nameValidator = [
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



});module.exports=  mongoose.model('country', countryschema);