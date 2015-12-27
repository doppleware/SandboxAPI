'use strict';

var url = require('url');


var Blueprint = require('./BlueprintService');


module.exports.v1BlueprintsGet = function v1BlueprintsGet (req, res, next) {
  Blueprint.v1BlueprintsGet(req.swagger.params, res, next);
};

module.exports.v1BlueprintsBlueprintIdentifierGet = function v1BlueprintsBlueprintIdentifierGet (req, res, next) {
  Blueprint.v1BlueprintsBlueprintIdentifierGet(req.swagger.params, res, next);
};
