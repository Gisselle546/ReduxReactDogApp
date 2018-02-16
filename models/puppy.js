var mongoose = require('mongoose');

var puppySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    description: {
        type: String,
        required:'Cannot be blank'
    },
    image:{
      type:String,
      default:false
    },
    breed:{
      type:String,
      required:'Cannot be blank'
    }


});

var Puppy = mongoose.model('Puppy', puppySchema);

module.exports = Puppy;
