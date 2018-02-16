const Puppy = require('../models/puppy');

exports.getPuppies = function(req, res){
    Puppy.find()
    .then(function(puppies){
        res.json(puppies);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.newPuppy = function(req, res){
  Puppy.create(req.body)
  .then(function(newPuppies){
      res.status(201).json(newPuppies);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getPuppy = function(req, res){
   Puppy.findById(req.params.puppyId)
   .then(function(foundPuppy){
       res.json(foundPuppy);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updatePuppy =  function(req, res){
Puppy.findOneAndUpdate({_id: req.params.puppyId}, req.body, {new: true})
   .then(function(puppy){
       res.json(puppy);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deletePuppy = function(req, res){
   Puppy.remove({_id: req.params.puppyId})
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;
