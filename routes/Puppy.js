const express = require('express');
const router = express.Router();
var Puppy = require("../models/puppy");
var helpers = require("../helpers/Puppy");

router.route('/')
 .get(helpers.getPuppies)
 .post(helpers.newPuppy)

router.route('/:puppyId')
  .get(helpers.getPuppy)
  .put(helpers.updatePuppy)
  .delete(helpers.deletePuppy)

module.exports = router;
