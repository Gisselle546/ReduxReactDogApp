const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');





mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/puppy-api');

var puppyRoutes = require("./routes/Puppy");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/views'));


app.use('/api/puppy', puppyRoutes);

app.get('/', function(req, res){

});


app.listen(port,()=>{
  console.log('App is running '+port);
});
