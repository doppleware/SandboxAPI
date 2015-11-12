'use strict';

var url = require('url');


var Blueprint = require('./BlueprintService');


module.exports.v1BlueprintsGet = function v1BlueprintsGet (req, res, next) {
  

  var result = Blueprint.v1BlueprintsGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.v1BlueprintsSearchGet = function v1BlueprintsSearchGet (req, res, next) {
  var q = req.swagger.params['q'].value;
  var category = req.swagger.params['category'].value;
  

  var result = Blueprint.v1BlueprintsSearchGet(q, category);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.v1BlueprintsBlueprintIdentifierGet = function v1BlueprintsBlueprintIdentifierGet (req, res, next) {
  var blueprintIdentifier = req.swagger.params['blueprint_identifier'].value;
  

  var result = Blueprint.v1BlueprintsBlueprintIdentifierGet(blueprintIdentifier);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
